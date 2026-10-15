/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/halloween-the-game-cheats/'],
  ['/cheats/', '/products/halloween-the-game-cheats/'],
  ['/cheats/lite', '/products/halloween-the-game-cheats/'],
  ['/cheats/lite/', '/products/halloween-the-game-cheats/'],
  ['/cheats/pro', '/products/halloween-the-game-cheats/'],
  ['/cheats/pro/', '/products/halloween-the-game-cheats/'],
  ['/cheats/elite', '/products/halloween-the-game-cheats/elite/'],
  ['/cheats/elite/', '/products/halloween-the-game-cheats/elite/'],
  ['/cheats/compare', '/blog/halloween-the-game-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/halloween-the-game-lite-vs-pro/'],
  ['/products/halloween-the-game-cheats/utilities', '/products/halloween-the-game-cheats/utilities/'],
  ['/products/halloween-the-game-cheats', '/products/halloween-the-game-cheats/'],
  ['/products/halloween-the-game-cheats/account-recovery', '/products/halloween-the-game-cheats/ugc/'],
  ['/products/halloween-the-game-cheats/account-recovery/', '/products/halloween-the-game-cheats/ugc/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
