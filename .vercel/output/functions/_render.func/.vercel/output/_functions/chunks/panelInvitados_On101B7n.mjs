import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot } from './astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://nvitaciones.com");
const $$PanelInvitados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PanelInvitados;
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="¡Que tu celebración sea inolvidable!, transforma las invitaciones de tu evento en una experiencia única con las invitaciones digitales de nvitaciones.com"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="sitemap" href="/sitemap-index.xml"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/claud/OneDrive/Escritorio/Nvitaciones/nvitaciones.com/src/layouts/panelInvitados.astro", void 0);

export { $$PanelInvitados as $ };