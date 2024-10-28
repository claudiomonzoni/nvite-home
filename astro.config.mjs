import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nvita.me',
  integrations: [sitemap(), react(), mdx(), icon()],
  output: "hybrid",
  adapter: vercel({
    imageService: true
  })
});