import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_C1jgX_vh.mjs';
import { $ as $$Layout } from './Layout_DngXTjJ3.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { S as Style } from './hero_module.8862d141_DWiYEr4Q.mjs';
import { i as invitadosData } from './invitados_DIUx8Fhx.mjs';
import { $ as $$Footer } from './Footer_BRiM-VfL.mjs';

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
        "desean invitarte a ",
        /* @__PURE__ */ jsx("b", { children: "celebrar su boda" })
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
  const bodas = await getCollection("bodas", ({ data }) => {
    return !data.draft;
  });
  return bodas.map((boda) => ({
    params: { slug: boda.slug },
    props: { boda }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { boda } = Astro2.props;
  const base = new URL(Astro2.url.pathname, Astro2.site);
  const Nfecha = new Date(boda.data.fecha);
  const fecha = Nfecha.toLocaleDateString(["es-MX"], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const { Content } = await boda.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Invitaci\xF3n de boda de ${boda.data.novios}`, "url": base.toString() }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, { "nombres": boda.data.novios, "fecha": fecha, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Content", Content, {})} ${maybeRenderHead()}<section class="grid contenido"> ${renderComponent($$result2, "Footer", $$Footer, { "ruta": base })} </section> ` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/bodas/[slug].astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/bodas/[slug].astro";
const $$url = "/bodas/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
