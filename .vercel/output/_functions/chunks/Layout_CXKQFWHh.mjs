import { c as createAstro, a as createComponent, e as addAttribute, h as renderScript, b as renderTemplate, r as renderComponent, g as renderSlot, f as renderHead } from './astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
/* empty css                         */

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://nvitaciones.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="es-MX"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Color para la barra de navegaci\xF3n en Android --><meta name="theme-color" content="#f0eae7"><!-- (Opcional) Para modo oscuro, solo algunos navegadores lo soportan --><meta name="theme-color" content="#656a8d" media="(prefers-color-scheme: dark)"><!-- iOS --><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="description"', '><meta name="generator"', '><meta property="og:site_name" content="Invitaciones Digitales "><meta property="og:locale" content="es_MX"><meta property="og:type" content="website"><meta property="og:image" content="https://nvitaciones.com/invitaciones-digitales-cover-nvitacines-cel.webp"><link rel="canonical"', '><link rel="icon" type="image/x-icon" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><title>', '</title><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "Invitaciones Digitales - Nvitaciones",\n        "url": "https://www.nvitaciones.com",\n        "logo": "https://www.nvitaciones.com/nvita-logo.svg",\n        "image": [\n          "https://nvitaciones.com/invitaciones-digitales-cover-nvitacines-cel.webp"\n        ],\n        "sameAs": [\n          "https://www.facebook.com/nvitaciones",\n          "https://www.instagram.com/nvitaciones"\n        ],\n        "description": "Organiza a tus invitados con invitaciones digitales. Env\xEDa por WhatsApp, confirma asistencias y gestiona tus invitados f\xE1cilmente con Nvitaciones.",\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "M\xE9xico",\n          "addressCountry": "MX"\n        },\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+5217551132468",\n          "contactType": "customer service"\n        }\n      }\n    <\/script>', "", '<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-D9F01PXXVK"><\/script>', "", '<script src="https://analytics.ahrefs.com/analytics.js" data-key="7D2knBNtoOK/DOcTrPLqPg" async><\/script>', "", '</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) --> <!-- Facebook Pixel Code --> <noscript> <img height="1" width="1" src="https://www.facebook.com/tr?id=679188402488387&ev=PageView\n  &noscript=1"> </noscript> <!-- End Facebook Pixel Code --> <body> ', " ", " ", " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro?astro&type=script&index=2&lang.ts"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Analytics", $$Index, {}), renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro?astro&type=script&index=3&lang.ts"), renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro?astro&type=script&index=4&lang.ts"));
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
