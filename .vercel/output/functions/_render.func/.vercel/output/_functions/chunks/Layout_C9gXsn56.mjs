import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot, u as unescapeHTML, f as renderComponent, d as renderHead } from './astro/server_CKmjmX1y.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_B_-Oyq4d.mjs';
/* empty css                         */
import 'clsx';
/* empty css                         */

const $$Astro$3 = createAstro("https://nvitaciones.com");
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Btn;
  const { liga, texto, claro, blank, clases, rel, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(liga, "href")}${addAttribute(clases, "class:list")}${addAttribute(blank ? "_blank" : "", "target")}${spreadAttributes(rest)}${addAttribute(rel, "rel")} data-astro-cid-5dcumwjq>${renderSlot($$result, $$slots["default"])} ${unescapeHTML(texto)}</a> `;
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/src/components/Btn.astro", void 0);

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const url = Astro2.url.pathname;
  console.log(url);
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <a href="/" data-astro-cid-dmqpwcec><img src="nvita-logo.svg" alt="Nvita invitaciones digitales" id="logo" data-astro-cid-dmqpwcec></a> <ul data-astro-cid-dmqpwcec> ${url === "/terminos-condiciones" ? renderTemplate`<li data-astro-cid-dmqpwcec><a href="/" class="selected" data-astro-cid-dmqpwcec>Regresar</a></li>` : renderTemplate`<li data-astro-cid-dmqpwcec><a href="#bodas" class="selected" data-astro-cid-dmqpwcec>Bodas</a></li>
        <li data-astro-cid-dmqpwcec><a href="#bodas" data-astro-cid-dmqpwcec>XV años</a></li>
        <li data-astro-cid-dmqpwcec><a href="#quince" data-astro-cid-dmqpwcec>Cumpleaños</a></li>
        <li data-astro-cid-dmqpwcec>Eventos</li>`} </ul> <li data-astro-cid-dmqpwcec> ${renderComponent($$result, "Btn", $$Btn, { "liga": "/panel", "texto": "Mi panel de invitados", "clases": "btn-claro", "claro": false, "blank": true, "rel": "nofollow", "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "bag", "size": 25, "data-astro-cid-dmqpwcec": true })} ` })} </li> </nav> `;
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://nvitaciones.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.svg"><meta name="generator"', '><link rel="canonical"', '><link rel="sitemap" href="/sitemap-index.xml"><meta property="og:site_name" content="Nvitaciones Digitales "><title>', '</title><meta property="og:locale" content="es_MX"><meta property="og:type" content="website"><meta property="og:image" content="https://nvitaciones.com/_astro/recibes.Di5vN0yD_12qL39.webp"><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "Invitaciones Digitales - Nvitaciones",\n        "url": "https://www.nvitaciones.com",\n        "logo": "https://www.nvitaciones.com/nvita-logo.svg", \n        "sameAs": [\n          "https://www.facebook.com/nvitaciones",\n          "https://www.instagram.com/nvitaciones"\n        ],\n        "description": "\xA1Que tu celebraci\xF3n sea inolvidable!, transforma las invitaciones de tu evento en una experiencia \xFAnica con las invitaciones digitales de nvitaciones.com",\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "M\xE9xico",\n          "addressCountry": "MX"\n        },\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+5217551132468",\n          "contactType": "customer service"\n        }\n      }\n      <\/script>', '</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) -->  <script src="https://analytics.ahrefs.com/analytics.js" data-key="7D2knBNtoOK/DOcTrPLqPg" async><\/script> <!-- Facebook Pixel Code -->  <noscript> <img height="1" width="1" src="https://www.facebook.com/tr?id=679188402488387&ev=PageView\n  &noscript=1"> </noscript> <!-- End Facebook Pixel Code --> <body> ', " ", " </body>  </html>"])), addAttribute(`Invitacion de 15 an\u0303os nvitaciones.com / ${title}`, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Analytics", $$Index, {}));
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/src/layouts/Layout.astro", void 0);

export { $$Nav as $, $$Layout as a, $$Btn as b };
