import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import node from '@astrojs/node';
// A local-only fixture renders the real invitation routes without unrelated Stripe collections.
export default defineConfig({
  srcDir: './.brisa-preview/astro/',
  cacheDir: './.brisa-preview/cache/',
  outDir: './.brisa-preview/dist/',
  site: 'https://nvitaciones.com',
  output: 'server',
  adapter: node({mode:'standalone'}),
  integrations: [react(), icon({iconDir:'./src/icons'})],
  devToolbar: {enabled:false},
  vite: { ssr: { noExternal: ['gsap'] }, css: {preprocessorOptions:{scss:{silenceDeprecations:['import','global-builtin','color-functions']}}} },
});
