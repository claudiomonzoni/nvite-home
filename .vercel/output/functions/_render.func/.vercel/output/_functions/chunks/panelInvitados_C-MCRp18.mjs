import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot } from './astro/server_DBH30GPw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.nvita.me");
const $$PanelInvitados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PanelInvitados;
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="¡Que tu celebración sea inolvidable!, transforma las invitaciones de tu evento en una experiencia única con las invitaciones digitales de nvita"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="sitemap" href="/sitemap-index.xml"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} <form data-authForm action="../api/salir.json"> <button>Salir del panel de invitados</button> </form>  </body> </html>`;
}, "/mnt/c/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/layouts/panelInvitados.astro", void 0);

export { $$PanelInvitados as $ };
