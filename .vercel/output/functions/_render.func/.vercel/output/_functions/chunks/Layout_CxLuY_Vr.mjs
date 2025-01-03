import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, d as renderHead, b as addAttribute } from './astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://nvitaciones.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, url, cover } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const portadaOG = `https://nvitaciones.com${cover}`;
  console.log(cover);
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><meta name="generator"', '><link rel="canonical"', '><meta name="generator"', "><title>", '</title><meta property="og:locale" content="es_MX"><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="nvitaciones.com invitaciones de bodas digitales"><meta property="og:image"', '><meta property="og:image:width" content="900"><meta property="og:image:height" content="900"><meta property="og:image:type" content="image/webp"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "Invitaciones Digitales - Nvitaciones",\n        "url": "https://www.nvitaciones.com",\n        "logo": "https://www.nvitaciones.com/nvita-logo.svg", \n        "sameAs": [\n          "https://www.facebook.com/nvitaciones",\n          "https://www.instagram.com/nvitaciones"\n        ],\n        "description": "\xA1Que tu celebraci\xF3n sea inolvidable!, transforma las invitaciones de tu evento en una experiencia \xFAnica con las invitaciones digitales de nvitaciones.com",\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "M\xE9xico",\n          "addressCountry": "MX"\n        },\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+5217551132468",\n          "contactType": "customer service"\n        }\n      }\n      <\/script>', "</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) -->  <body> ", " </body></html>"])), addAttribute(`Invitacion de bodas de nvitaciones.com / ${title}`, "content"), addAttribute(`/favicon.svg`, "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.generator, "content"), title, addAttribute(`${title} - Invitaci\xF3n digital nvitaciones.com`, "content"), addAttribute(`Esperamos tu asistencia, estaremos felices de celebrar juntos / ${title}`, "content"), addAttribute(url, "content"), addAttribute(portadaOG, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/src/layouts/bodas/Layout.astro", void 0);

export { $$Layout as $ };
