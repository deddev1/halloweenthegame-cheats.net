const RASTER_EXT = /\.(png|jpe?g|webp)$/i;

/** 400w covers ~330px card slots at 1x; 640w covers 2x without a 960 download. */
export const CARD_IMAGE_WIDTHS = [400, 640] as const;
export const CARD_IMAGE_SIZES = '(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw';
/** Hero LCP slot is ~560px CSS. Cap at 640w so 2x/3x screens do not pull 960. */
export const HERO_IMAGE_WIDTHS = [512, 640] as const;
export const HERO_IMAGE_SIZES = '(min-width: 1024px) 560px, 100vw';
/** Thumbs ~148px CSS; one 320w file covers 2x. */
export const THUMB_IMAGE_WIDTHS = [320] as const;
/** Article / product heroes. 640w is the LCP cap. */
export const DEFAULT_IMAGE_WIDTHS = [512, 640] as const;

export function stripRasterExt(src: string): string {
  return src.replace(RASTER_EXT, '');
}

export function webpSrc(src: string, width: number): string {
  return `${stripRasterExt(src)}-${width}.webp`;
}

export function responsiveSrcSet(src: string, widths: readonly number[] = DEFAULT_IMAGE_WIDTHS): string {
  return widths.map((width) => `${webpSrc(src, width)} ${width}w`).join(', ');
}

/**
 * Fallback `src`: smallest candidate so browsers without srcset, and preload hrefs,
 * do not download the largest file. `srcset` still upgrades when the slot needs it.
 */
export function defaultWebpSrc(src: string, widths: readonly number[]): string {
  return webpSrc(src, widths[0] ?? 512);
}
