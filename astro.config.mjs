import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro"
import icon from "astro-icon";
import db from "@astrojs/db";
// import netlify from "@astrojs/netlify";
import vercelServerless from '@astrojs/vercel';
import invitaciones from './src/pages/nvitaciones/nvitaciones.json';

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: 'https://nvitaciones.com',
  integrations: [
    sitemap({
      filter: (page) => {
        // Excluir rutas dinámicas y privadas
        if (page.includes('/api/')) return false;
        if (page.includes('/panel/')) return false;
        if (page.includes('[id]') || page.includes('[slug]')) return false;
        return true;
      },
      serialize: (item) => {
        // Prioridades según la importancia de la página
        if (item.url === 'https://nvitaciones.com/') {
          item.priority = 1.0;
        } else if (item.url.includes('/nvitaciones/')) {
          item.priority = 0.85;
        } else if (item.url.includes('/bodas') || item.url.includes('/invitaciones-quince')) {
          item.priority = 0.9;
        } else if (item.url.includes('/terminos')) {
          item.priority = 0.6;
        } else {
          item.priority = 0.8;
        }
        
        item.changefreq = item.url === 'https://nvitaciones.com/' ? 'weekly' : 'monthly';
        return item;
      },
      routes: invitaciones.map((inv) => ({
        url: `/nvitaciones/${inv.slug}`,
        changefreq: 'monthly',
        priority: 0.85,
      })),
    }),
    react(),
    mdx(),
    icon(),
    db(),
    keystatic()
  ],
  output: "server",
  // adapter: netlify()
  adapter: vercelServerless(),
  vite: {
    ssr: {
      noExternal: ['gsap']
    }
  }
});