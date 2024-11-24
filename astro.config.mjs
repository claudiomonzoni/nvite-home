import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nvita.me',
  integrations: [sitemap(), react(), mdx(), icon(), db()],
  output: "server",
  adapter: netlify()
});