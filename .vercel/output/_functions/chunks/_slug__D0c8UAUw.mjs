import { m as createAstro, n as createComponent, o as renderTemplate, s as addAttribute, t as renderHead, u as renderSlot, p as renderComponent, q as maybeRenderHead } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_C1jgX_vh.mjs';
import 'clsx';
import { S as Style } from './_slug_.506db981_DM0MDZSR.mjs';
import cover from './cover_D_CSIQx0.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { i as invitadosData } from './invitados_DVaZk3LI.mjs';
import { $ as $$Footer } from './Footer_DoCATsMP.mjs';

const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, url } = Astro2.props;
  const portadaOG = `https://nvita.me${cover.src}`;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Invitacion de XV años de nvita.me"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(`/favicon.svg`, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta property="og:locale" content="es_MX"><meta property="og:type" content="article"><meta property="og:title"${addAttribute(`${title} - Invitaci\xF3n digital nvita.me`, "content")}><meta property="og:description"${addAttribute(`Esperamos tu asistencia, estaremos felices de celebrar juntos`, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:site_name" content="nvita.me invitaciones de XV años digitales"><meta property="og:image"${addAttribute(portadaOG, "content")}><meta property="og:image:width" content="900"><meta property="og:image:height" content="900"><meta property="og:image:type" content="image/webp"><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) --> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/layouts/quince/Layout.astro", void 0);

function Hero({ nombres, fecha }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  useEffect(() => {
    document.querySelector(".contenido").classList.remove("opa");
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    if (id && id < invitadosData.length) {
      setInvitado(invitadosData[id].nombre);
      setPase(invitadosData[id].pases);
    }
    const tl = gsap.timeline();
    gsap.from(".contenido", { opacity: 0, y: -30, duration: 1, delay: 0.2 });
    tl.from("#bande", {
      opacity: 0,
      y: -30,
      delay: 2,
      height: 500,
      duration: 1,
      ease: "power4.out"
    });
    tl.from("#centro *", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power4.out",
      stagger: { amount: 0.5 }
    });
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { id: Style["hero"], className: "grid contenido opa", children: /* @__PURE__ */ jsxs("div", { className: Style.bandeja, id: "bande", children: [
    /* @__PURE__ */ jsxs("div", { className: Style.centro, id: "centro", children: [
      /* @__PURE__ */ jsx("span", { className: Style.familia, id: "invitado", children: invitado }),
      /* @__PURE__ */ jsx("h1", { dangerouslySetInnerHTML: { __html: nombres } }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Te invitamos a mis ",
        /* @__PURE__ */ jsx("b", { children: "XV años" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: Style.fecha, children: fecha })
    ] }),
    pase > 0 ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { id: Style["pases"], children: [
      "No. de pases: ",
      /* @__PURE__ */ jsx("span", { id: "NumeroPases", children: pase })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, {})
  ] }) }) });
}

const $$Astro = createAstro("https://www.nvita.me");
async function getStaticPaths() {
  const quinces = await getCollection("quince", ({ data }) => {
    return !data.draft;
  });
  return quinces.map((quince) => ({
    params: { slug: quince.slug },
    props: { quince }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { quince } = Astro2.props;
  const base = new URL(Astro2.url.pathname, Astro2.site);
  const Nfecha = new Date(quince.data.fecha);
  const fecha = Nfecha.toLocaleDateString(["es-MX"], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const { Content } = await quince.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Invitaci\xF3n de quince de ${quince.data.novios}`, "url": base.toString() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, { "nombres": quince.data.novios, "fecha": fecha, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Content", Content, {})} ${maybeRenderHead()}<section class="grid contenido"> ${renderComponent($$result2, "Footer", $$Footer, { "ruta": base })} </section> ` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/quince/[slug].astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/quince/[slug].astro";
const $$url = "/quince/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
