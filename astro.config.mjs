import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";
import icon from "astro-icon";
// import netlify from "@astrojs/netlify";
import vercelServerless from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://nvitaciones.com",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  devToolbar: { enabled: false },
  integrations: [
    react(),
    mdx(),
    icon(),
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
    build: {
      cssMinify: "esbuild",
    },
    ssr: {
      noExternal: ["gsap"],
    },
  },
});
