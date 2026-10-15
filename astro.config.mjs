import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://halloweenthegamecheats.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/halloween-the-game-cheats/',
    '/cheats/lite/': '/products/halloween-the-game-cheats/',
    '/cheats/pro/': '/products/halloween-the-game-cheats/',
    '/cheats/elite/': '/products/halloween-the-game-cheats/elite/',
    '/cheats/compare/': '/blog/halloween-the-game-lite-vs-pro/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
