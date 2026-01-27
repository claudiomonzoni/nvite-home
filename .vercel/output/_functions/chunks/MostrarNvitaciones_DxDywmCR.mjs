import { c as createAstro, a as createComponent, d as defineStyleVars, m as maybeRenderHead, e as addAttribute, r as renderComponent, u as unescapeHTML, b as renderTemplate, s as spreadAttributes, g as renderSlot, h as renderScript, F as Fragment } from './astro/server_CohHI9gX.mjs';
import { $ as $$Icon } from './Icon_DJmXbCaH.mjs';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_CB1oRdTX.mjs';
import 'kleur/colors';
import { $ as $$Btn } from './Nav_C5b82xcF.mjs';
import { b as getCollection } from './cart_BIVM58yS.mjs';
import { $ as $$ProductoCard } from './ProductoCard_DrY2SuSZ.mjs';

const $$Astro$3 = createAstro("https://nvitaciones.com");
const $$Caracteristicas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Caracteristicas;
  const { encabezado, texto, icono, fondo } = Astro2.props;
  let { colorBg } = Astro2.props;
  const url = `url("${fondo}")`;
  colorBg ? colorBg : colorBg = "#ffd9b0";
  const $$definedVars = defineStyleVars([{ url, colorBg }]);
  return renderTemplate`${maybeRenderHead()}<div class="carcateristicas" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}> <div class="icono" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icono, "size": 45, "color": "#656a8d", "data-astro-cid-iocpc6zy": true })} <!-- <img src={icono} alt={encabezado}  /> --> </div> <div class="conte" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}> <h3 data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}>${encabezado}</h3> <p data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}>${unescapeHTML(texto)}</p> </div> </div> <!-- buscare en globales  --> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Caracteristicas.astro", void 0);

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$BannerGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BannerGeneral;
  const {
    encabezado,
    texto,
    tema,
    icono,
    izquierda,
    urlImagen,
    margenAbajo,
    valorBoton,
    ...rest
  } = Astro2.props;
  const imagen = /* #__PURE__ */ Object.assign({"../assets/home/gale/confirmacion.webp": () => import('./confirmacion_Br9jzans.mjs'),"../assets/home/gale/cover.png": () => import('./cover_DQ-Psqyc.mjs'),"../assets/home/gale/cover.webp": () => import('./cover_CzdtQFUX.mjs'),"../assets/home/gale/frase.webp": () => import('./frase_D-bL8JQX.mjs'),"../assets/home/gale/itinerario.webp": () => import('./itinerario_5eokjMUM.mjs'),"../assets/home/gale/mapa.webp": () => import('./mapa_0UlvAtlB.mjs'),"../assets/home/gale/musica.webp": () => import('./musica_DATKlpjE.mjs'),"../assets/home/gale/panel.png": () => import('./panel_BTXvLtsB.mjs'),"../assets/home/gale/panel.webp": () => import('./panel_DHQrcHBQ.mjs'),"../assets/home/gale/pdf-caracteristicas-2.webp": () => import('./pdf-caracteristicas-2_D9kp1ypD.mjs'),"../assets/home/gale/recibes.webp": () => import('./recibes_CxFw_ZZW.mjs'),"../assets/home/gale/regalos.webp": () => import('./regalos_CqnLbtNf.mjs')

});
  if (!imagen[urlImagen])
    throw new Error(`"${urlImagen}" no existe wey, checale bien"`);
  return renderTemplate`${maybeRenderHead()}<div id="banner"${addAttribute(["flex", tema, { margenAbajo }], "class:list")}${spreadAttributes(rest)} data-astro-cid-yca5r3xm> <div class="contenido flex" data-astro-cid-yca5r3xm> <div class="bande" data-astro-cid-yca5r3xm> ${renderComponent($$result, "Icon", $$Icon, { "name": icono, "size": 40, "data-astro-cid-yca5r3xm": true })} <h2 data-astro-cid-yca5r3xm>${unescapeHTML(encabezado)}</h2> <p data-astro-cid-yca5r3xm>${unescapeHTML(texto)}</p> ${renderSlot($$result, $$slots["default"])} </div> </div> <div${addAttribute(["imagen", { izq: izquierda }], "class:list")} data-astro-cid-yca5r3xm> ${renderComponent($$result, "Image", $$Image, { "src": imagen[urlImagen](), "alt": encabezado, "data-astro-cid-yca5r3xm": true })} </div> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/BannerGeneral.astro", void 0);

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$CaracteristicasGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CaracteristicasGrid;
  const { matriz } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid contenido" data-astro-cid-o7bkhtc4> <div id="caracteristicas" data-astro-cid-o7bkhtc4> <div id="item-a" data-astro-cid-o7bkhtc4> <div class="info" data-astro-cid-o7bkhtc4> <div class="conte" data-astro-cid-o7bkhtc4> <h2 id="caracteristicash2" data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[0].titulo)}</h2> <p data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[0].texto)}</p> ${renderComponent($$result, "Btn", $$Btn, { "liga": matriz[0].enlace ? matriz[0].enlace : "#formu", "texto": matriz[0].txtbtn ? matriz[0].txtbtn : "Saber m\xE1s", "claro": false, "clases": "btn-bordes", "data-astro-cid-o7bkhtc4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": matriz[0].icono ? matriz[0].icono : "mdi:check-all", "size": 25, "data-astro-cid-o7bkhtc4": true })} ` })} </div> </div> <div class="imagen" data-astro-cid-o7bkhtc4> <img${addAttribute(matriz[0].imagen, "src")} alt="Invitaciones digitales / Nvitaciones" loading="lazy" decoding="async" data-astro-cid-o7bkhtc4> </div> </div> <div id="item-b" class="item" data-astro-cid-o7bkhtc4> ${renderComponent($$result, "Icon", $$Icon, { "name": matriz[1].imagen, "size": 55, "data-astro-cid-o7bkhtc4": true })} <h3 data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[1].titulo)}</h3> <p data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[1].texto)}</p> </div> <div id="item-c" class="item" data-astro-cid-o7bkhtc4> ${renderComponent($$result, "Icon", $$Icon, { "name": matriz[2].imagen, "size": 55, "data-astro-cid-o7bkhtc4": true })} <p data-astro-cid-o7bkhtc4> ${matriz[2].texto} </p> </div> <div id="item-d" class="item" data-astro-cid-o7bkhtc4> <p class="p-itemGlobal" data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[3].texto)}</p> </div> <div id="item-e" class="item" data-astro-cid-o7bkhtc4> <p class="p-itemGlobal" data-astro-cid-o7bkhtc4>${unescapeHTML(matriz[4].texto)}</p>  </div> </div> </div> <!-- <style is:global>
    #caracteristicash2 span{
    border: solid;
    color: $secundario;
  }
</style> --> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/CaracteristicasGrid.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$MostrarNvitaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostrarNvitaciones;
  const productos = await getCollection("productos");
  const { dondeEstoy } = Astro2.props;
  const filteredProducts = productos.filter((producto) => {
    if (!producto.data.active) {
      return false;
    }
    const categoria = (producto.data.metadata?.Categoria || "").toLowerCase();
    const dondeEstoyLower = (dondeEstoy || "").toLowerCase();
    if (!dondeEstoy || dondeEstoy === "home") {
      return true;
    }
    return categoria === dondeEstoyLower;
  });
  const categorias = [
    { key: "todos", label: "Todo" },
    { key: "bodas", label: "Bodas" },
    { key: "quince", label: "Xv a\xF1os" }
    // { key: "cumple", label: "Cumples" },
  ];
  return renderTemplate`${!dondeEstoy || dondeEstoy === "home" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-7hh455co": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid pantalla-der" data-astro-cid-7hh455co><div class="filtros-productos" data-astro-cid-7hh455co>${categorias.map((cat, idx) => renderTemplate`<button type="button"${addAttribute(cat.key, "data-filtro")}${addAttribute(`filtro-btn${idx === 0 ? " filtro-activo" : ""}`, "class")} data-astro-cid-7hh455co>${cat.label}</button>`)}</div></div><div class="grid pantalla-der" data-astro-cid-7hh455co><div class="swiper productos-swiper" data-astro-cid-7hh455co><div class="swiper-wrapper" id="productos-wrapper" data-astro-cid-7hh455co>${(!dondeEstoy || dondeEstoy === "home" ? productos.filter((producto) => producto.data.active) : productos.filter(
    (producto) => producto.data.active && // Filtrar solo activos
    producto.data.metadata?.Tipo?.toLowerCase() === "pdf"
  )).map((producto) => {
    const categoria = (producto.data.metadata?.Categoria || "").toLowerCase();
    return renderTemplate`<div class="swiper-slide"${addAttribute(categoria, "data-categoria")} data-astro-cid-7hh455co>${renderComponent($$result2, "ProductoCard", $$ProductoCard, { "producto": producto, "data-astro-cid-7hh455co": true })}</div>`;
  })}</div><div class="swiper-pagination" data-astro-cid-7hh455co></div></div></div>` })}` : renderTemplate`<div class="grid pantalla-der" data-astro-cid-7hh455co><div class="swiper productos-swiper" data-astro-cid-7hh455co><div class="swiper-wrapper" data-astro-cid-7hh455co>${filteredProducts.map((producto) => renderTemplate`<div class="swiper-slide" data-astro-cid-7hh455co>${renderComponent($$result, "ProductoCard", $$ProductoCard, { "producto": producto, "data-astro-cid-7hh455co": true })}</div>`)}</div><div class="swiper-pagination" data-astro-cid-7hh455co></div></div></div>`}${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Pagos/MostrarNvitaciones.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Pagos/MostrarNvitaciones.astro", void 0);

export { $$Caracteristicas as $, $$MostrarNvitaciones as a, $$CaracteristicasGrid as b, $$BannerGeneral as c };
