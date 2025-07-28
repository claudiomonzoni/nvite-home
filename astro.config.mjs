import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro"
import icon from "astro-icon";
import db from "@astrojs/db";
// import netlify from "@astrojs/netlify";
import vercelServerless from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: 'https://nvitaciones.com',
  integrations: [sitemap(), react(), mdx(), icon(), db(), keystatic()],
  output: "server",
  // adapter: netlify()
  adapter: vercelServerless(),

});