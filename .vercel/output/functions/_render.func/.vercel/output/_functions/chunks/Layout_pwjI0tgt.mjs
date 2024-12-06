import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot } from './astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.nvitaciones.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, url, cover } = Astro2.props;
  const portadaOG = `https://nvitaciones.com${cover}`;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Invitacion de bodas de nvite.me"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(`/favicon.svg`, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:locale" content="es_MX"><meta property="og:type" content="article"><meta property="og:title"${addAttribute(`${title} - Invitaci\xF3n digital nvite.me`, "content")}><meta property="og:description"${addAttribute(`Esperamos tu asistencia, estaremos felices de celebrar juntos`, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:site_name" content="nvite.me invitaciones de bodas digitales"><meta property="og:image"${addAttribute(portadaOG, "content")}><meta property="og:image:width" content="900"><meta property="og:image:height" content="900"><meta property="og:image:type" content="image/webp"><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) --> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/layouts/bodas/Layout.astro", void 0);

export { $$Layout as $ };
