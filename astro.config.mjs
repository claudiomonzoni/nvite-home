import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";
import icon from "astro-icon";
import db from "@astrojs/db";
// import netlify from "@astrojs/netlify";
import vercelServerless from "@astrojs/vercel";
import invitaciones from "./src/pages/nvitaciones/nvitaciones.json";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://nvitaciones.com",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => {
        // Excluir rutas dinámicas y privadas
        if (page.includes("/api/")) return false;
        if (page.includes("/panel/")) return false;
        if (page.includes("[id]") || page.includes("[slug]")) return false;
        return true;
      },
      serialize: (item) => {
        // Prioridades según la importancia de la página
        if (item.url === "https://nvitaciones.com/") {
          item.priority = 1.0;
        } else if (item.url.includes("/nvitaciones/")) {
          item.priority = 0.85;
        } else if (
          item.url.includes("/bodas") ||
          item.url.includes("/invitaciones-quince")
        ) {
          item.priority = 0.9;
        } else if (item.url.includes("/terminos")) {
          item.priority = 0.6;
        } else {
          item.priority = 0.8;
        }

        item.changefreq =
          item.url === "https://nvitaciones.com/" ? "weekly" : "monthly";
        return item;
      },
      routes: invitaciones.map((inv) => ({
        url: `/nvitaciones/${inv.slug}`,
        changefreq: "monthly",
        priority: 0.85,
      })),
    }),
    react(),
    mdx(),
    icon(),
    db(),
    keystatic(),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Hurme Geometric Sans 4",
      cssVariable: "--font-hurme",
      options: {
        variants: [
          {
            src: ["./public/fonts/hurme/HurmeGeometricSans4-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./public/fonts/hurme/HurmeGeometricSans4-Bold.woff2"],
            weight: "700",
            style: "normal",
          },
        ],
      },
    },
  ],
  output: "server",
  // adapter: netlify()
  adapter: vercelServerless(),
  vite: {
    ssr: {
      noExternal: ["gsap"],
    },
  },
});
