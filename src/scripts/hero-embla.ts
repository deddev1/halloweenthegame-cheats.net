export const HERO_AUTOPLAY_MS = 4000;

type EmblaApi = {
  selectedScrollSnap: () => number;
  scrollTo: (n: number) => void;
  scrollNext: () => void;
  on: (event: string, cb: () => void) => void;
};

type CarouselInstance = {
  api: EmblaApi;
  destroy: () => void;
};

function restartProgress(progressEl: HTMLElement) {
  // Restart the CSS animation on the next frame. Reading offsetWidth here
  // forces a synchronous layout after the style write.
  progressEl.style.animation = 'none';
  requestAnimationFrame(() => {
    progressEl.style.animation = `hero-embla-progress ${HERO_AUTOPLAY_MS}ms linear forwards`;
  });
}

function bindHeroDots(wrapper: HTMLElement, api: EmblaApi, onUserSelect: () => void) {
  const dotsRoot = wrapper.querySelector('[data-hero-embla-dots]');
  if (!dotsRoot) return;

  const dots = Array.from(dotsRoot.querySelectorAll<HTMLButtonElement>('[data-hero-embla-dot]'));

  const syncProgress = () => {
    const index = api.selectedScrollSnap();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    dots.forEach((dot, i) => {
      const progress = dot.querySelector<HTMLElement>('[data-hero-embla-progress]');
      if (!progress) return;

      progress.style.animation = 'none';
      progress.style.width = i === index && reducedMotion ? '100%' : '0%';

      if (i === index && !reducedMotion) {
        restartProgress(progress);
      }
    });
  };

  const setActive = () => {
    const index = api.selectedScrollSnap();
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.dataset.active = active ? 'true' : 'false';
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    syncProgress();
  };

  dots.forEach((dot) => {
    const index = Number(dot.getAttribute('data-hero-embla-dot'));
    dot.addEventListener('click', () => {
      api.scrollTo(index);
      onUserSelect();
    });
  });

  api.on('select', setActive);
  api.on('reInit', setActive);
  setActive();
}

async function initHeroCarousels(root: ParentNode = document) {
  const nodes = [...root.querySelectorAll<HTMLElement>('[data-hero-embla]')].filter(
    (node) => node.dataset.heroEmblaReady !== 'true' && node.dataset.heroEmblaPending !== 'true',
  );
  if (!nodes.length) return;

  // Claim nodes synchronously so parallel page-load handlers cannot double-init.
  nodes.forEach((node) => {
    node.dataset.heroEmblaPending = 'true';
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { createCarousel } = await import('@starwind-ui/runtime/carousel');

  nodes.forEach((carouselRoot) => {
    const wrapper = carouselRoot.closest<HTMLElement>('[data-hero-embla-wrap]');
    if (!wrapper) {
      delete carouselRoot.dataset.heroEmblaPending;
      return;
    }

    // Recreate so we never inherit a stale Embla instance without our timer.
    try {
      (createCarousel(carouselRoot) as CarouselInstance).destroy();
    } catch {
      // Missing viewport or already torn down.
    }

    let instance: CarouselInstance;
    try {
      instance = createCarousel(carouselRoot, {
        opts: { loop: true, align: 'start', duration: 20 },
      }) as CarouselInstance;
    } catch {
      delete carouselRoot.dataset.heroEmblaPending;
      return;
    }

    carouselRoot.dataset.heroEmblaReady = 'true';
    delete carouselRoot.dataset.heroEmblaPending;

    const api = instance.api;
    let timer: number | undefined;
    let inView = false;

    const stop = () => {
      if (timer != null) {
        window.clearInterval(timer);
        timer = undefined;
      }
    };

    const play = () => {
      stop();
      if (reducedMotion || document.hidden || !inView) return;
      timer = window.setInterval(() => {
        if (document.hidden || !inView) return;
        api.scrollNext();
      }, HERO_AUTOPLAY_MS);
    };

    bindHeroDots(wrapper, api, play);

    if (reducedMotion) return;

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else play();
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        inView = entry.isIntersecting;
        if (inView && !document.hidden) play();
        else stop();
      },
      { threshold: 0.15 },
    );
    io.observe(carouselRoot);
  });
}

let heroEmblaWired = false;

export function setupHeroEmbla() {
  // Clear stale flags so Vite HMR / remounts can rebind timers.
  document.querySelectorAll<HTMLElement>('[data-hero-embla]').forEach((node) => {
    delete node.dataset.heroEmblaReady;
    delete node.dataset.heroEmblaPending;
  });

  const run = () => {
    void initHeroCarousels();
  };

  const schedule = () => {
    window.requestIdleCallback?.(run) ?? window.setTimeout(run, 1);
  };

  // Carousel runtime is off the LCP path; start it after the first paint.
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });

  if (heroEmblaWired) return;
  heroEmblaWired = true;
  document.addEventListener('astro:page-load', schedule);
  document.addEventListener('astro:after-swap', schedule);
}
