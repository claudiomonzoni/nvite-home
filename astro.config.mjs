import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nvitagit a.me',
  integrations: [sitemap(), react(), mdx()],
  output: "hybrid",
  adapter: vercel({
    imageService: true,
  })
});