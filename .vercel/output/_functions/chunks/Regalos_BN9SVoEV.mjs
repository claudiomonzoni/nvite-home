import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, p as renderComponent, s as addAttribute, y as unescapeHTML } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import { a as $$Image } from './_astro_assets_rgm5ZIVA.mjs';
/* empty css                                                               */
import 'clsx';
/* empty css                                                               */

const $$Astro$2 = createAstro("https://www.nvita.me");
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Galeria;
  const imas = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../assets/bodas/nvitaPlus/boda.jpg": () => import('./boda_VAclEDUZ.mjs'),"../../assets/bodas/nvitaPlus/boda1.jpg": () => import('./boda1_BN3PGC3b.mjs'),"../../assets/bodas/nvitaPlus/boda3.jpg": () => import('./boda3_BUKcqXgE.mjs'),"../../assets/bodas/nvitaPlus/boda4.jpg": () => import('./boda4_D1Vvmhjt.mjs'),"../../assets/bodas/nvitaPlus/boda5.jpg": () => import('./boda5_DNJ095J8.mjs'),"../../assets/bodas/nvitaPlus/cover.webp": () => import('./cover_uCtYAzmA.mjs')}), () => "../../assets/bodas/nvitaPlus/*").then((images) => {
    return images.map((foto) => foto.default);
  });
  return renderTemplate`${maybeRenderHead()}<div class="gale"> ${imas.map((ima) => renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": ima, "width": 500, "alt": "galeria" })}`)} </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Galeria.astro", void 0);

const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Btn;
  const { texto, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="btn" target="_blank">${unescapeHTML(texto)}</a>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Btn.astro", void 0);

const $$Astro = createAstro("https://www.nvita.me");
const $$Regalos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Regalos;
  const { frase, beneficiario, banco, cuenta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="bandeja" data-astro-cid-6yprd7va> <div id="regalo" data-astro-cid-6yprd7va> <svg viewBox="0 0 35 37" fill="none" data-astro-cid-6yprd7va> <path d="M3.5 33.4762V17.619C2.5375 17.619 1.71354 17.274 1.02812 16.5839C0.342708 15.8938 0 15.0643 0 14.0952V10.5714C0 9.60238 0.342708 8.77282 1.02812 8.08274C1.71354 7.39266 2.5375 7.04762 3.5 7.04762H9.1C8.95417 6.78333 8.85938 6.50437 8.81563 6.21071C8.77187 5.91706 8.75 5.60873 8.75 5.28571C8.75 3.81746 9.26042 2.56944 10.2812 1.54167C11.3021 0.513889 12.5417 0 14 0C14.6708 0 15.2979 0.124802 15.8812 0.374405C16.4646 0.624008 17.0042 0.969048 17.5 1.40952C17.9958 0.939683 18.5354 0.587302 19.1187 0.352381C19.7021 0.11746 20.3292 0 21 0C22.4583 0 23.6979 0.513889 24.7188 1.54167C25.7396 2.56944 26.25 3.81746 26.25 5.28571C26.25 5.60873 26.2208 5.90972 26.1625 6.18869C26.1042 6.46766 26.0167 6.75397 25.9 7.04762H31.5C32.4625 7.04762 33.2865 7.39266 33.9719 8.08274C34.6573 8.77282 35 9.60238 35 10.5714V14.0952C35 15.0643 34.6573 15.8938 33.9719 16.5839C33.2865 17.274 32.4625 17.619 31.5 17.619V33.4762C31.5 34.4452 31.1573 35.2748 30.4719 35.9649C29.7865 36.655 28.9625 37 28 37H7C6.0375 37 5.21354 36.655 4.52812 35.9649C3.84271 35.2748 3.5 34.4452 3.5 33.4762ZM21 3.52381C20.5042 3.52381 20.0885 3.69266 19.7531 4.03036C19.4177 4.36806 19.25 4.78651 19.25 5.28571C19.25 5.78492 19.4177 6.20337 19.7531 6.54107C20.0885 6.87877 20.5042 7.04762 21 7.04762C21.4958 7.04762 21.9115 6.87877 22.2469 6.54107C22.5823 6.20337 22.75 5.78492 22.75 5.28571C22.75 4.78651 22.5823 4.36806 22.2469 4.03036C21.9115 3.69266 21.4958 3.52381 21 3.52381ZM12.25 5.28571C12.25 5.78492 12.4177 6.20337 12.7531 6.54107C13.0885 6.87877 13.5042 7.04762 14 7.04762C14.4958 7.04762 14.9115 6.87877 15.2469 6.54107C15.5823 6.20337 15.75 5.78492 15.75 5.28571C15.75 4.78651 15.5823 4.36806 15.2469 4.03036C14.9115 3.69266 14.4958 3.52381 14 3.52381C13.5042 3.52381 13.0885 3.69266 12.7531 4.03036C12.4177 4.36806 12.25 4.78651 12.25 5.28571ZM3.5 10.5714V14.0952H15.75V10.5714H3.5ZM15.75 33.4762V17.619H7V33.4762H15.75ZM19.25 33.4762H28V17.619H19.25V33.4762ZM31.5 14.0952V10.5714H19.25V14.0952H31.5Z" fill="white" data-astro-cid-6yprd7va></path> </svg> <h2 data-astro-cid-6yprd7va>Sugerencia de regalos</h2> <p data-astro-cid-6yprd7va>${frase}</p> ${renderComponent($$result, "Btn", $$Btn, { "url": "https://www.amazon.com.mx/registries", "texto": "Amazon", "data-astro-cid-6yprd7va": true })} ${renderComponent($$result, "Btn", $$Btn, { "url": "https://meli.uniko.co/Home", "texto": "Marcado Libre", "data-astro-cid-6yprd7va": true })} ${renderComponent($$result, "Btn", $$Btn, { "url": "https://mesaderegalos.liverpool.com.mx/", "texto": "Liverpool", "data-astro-cid-6yprd7va": true })} </div> <div id="transferencias" data-astro-cid-6yprd7va> <h3 data-astro-cid-6yprd7va>Transferencias:</h3> <ul data-astro-cid-6yprd7va> <li data-astro-cid-6yprd7va><b data-astro-cid-6yprd7va>Beneficiario</b>: ${beneficiario}</li> <li data-astro-cid-6yprd7va><b data-astro-cid-6yprd7va>Banco</b>: ${banco}</li> <li data-astro-cid-6yprd7va><b data-astro-cid-6yprd7va>Cuenta</b>: ${cuenta}</li> </ul> </div> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Regalos.astro", void 0);

export { $$Galeria as $, $$Regalos as a };
