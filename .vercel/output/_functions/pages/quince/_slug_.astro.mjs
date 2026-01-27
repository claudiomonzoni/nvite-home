import { c as createAstro, a as createComponent, b as renderTemplate, g as renderSlot, f as renderHead, e as addAttribute, m as maybeRenderHead, h as renderScript, r as renderComponent, l as defineScriptVars, u as unescapeHTML, d as defineStyleVars } from '../../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import matter from 'gray-matter';
import 'clsx';
import { S as Style } from '../../chunks/_slug_.c06db20f_HPCym2WP.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { $ as $$Anchor, a as $$FotoSolitaria, b as $$Contador, c as $$ProgresoInvitados, d as $$MensajeVip } from '../../chunks/FotoSolitaria_BU6M3fD6.mjs';
import { $ as $$Icon } from '../../chunks/Icon_DJmXbCaH.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$c = createAstro("https://nvitaciones.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, url, cover, paleta, theme } = Astro2.props;
  const { name, colors, typography } = theme;
  const portadaOG = cover ? `${cover.split("?")[0]}?v=${(/* @__PURE__ */ new Date()).getTime()}` : "";
  console.log(portadaOG);
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<html lang="es"', "", '> <head><meta charset="UTF-8"><meta name="description" content="Celebra tus XV a\xF1os con invitaciones digitales \xFAnicas y f\xE1ciles de compartir. Sorprende a tus invitados con dise\xF1os incre\xEDbles y gestiona tu evento sin complicaciones con Nvitaciones."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"', '><link rel="canonical"', '><meta name="generator"', '><meta name="generator"', "><title>", '</title><meta property="og:locale" content="es_MX"><meta property="og:type" content="article"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="nvita.me invitaciones de XV an\u0303os digitales"><meta property="og:image"', '><meta property="og:image:width" content="900"><meta property="og:image:height" content="900"><meta property="og:image:type" content="image/webp"><meta name="twitter:card" content="summary_large_image">', "</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre)\n<script>\n  (function(h,o,t,j,a,r){\n      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n      h._hjSettings={hjid:5048561,hjsv:6};\n      a=o.getElementsByTagName('head')[0];\n      r=o.createElement('script');r.async=1;\n      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n      a.appendChild(r);\n  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');\n<\/script> --> <body> ", " </body></html>"])), addAttribute(paleta, "data-paleta"), addAttribute(name, "data-theme"), addAttribute(`/favicon.svg`, "href"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.generator, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(`${title} - Invitaci\xF3n digital nvita.me`, "content"), addAttribute(`Esperamos tu asistencia, estaremos felices de celebrar juntos`, "content"), addAttribute(url, "content"), addAttribute(portadaOG, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/layouts/quince/Layout.astro", void 0);

function Hero({ nombres, fecha, cover }) {
  const [invitado, setInvitado] = useState("-");
  const [pase, setPase] = useState(0);
  useEffect(() => {
    document.querySelector(".contenido").classList.remove("opa");
    const valores = window.location.search;
    const params = new URLSearchParams(valores);
    const id = params.get("id");
    const uid = params.get("uid");
    const pase2 = document.querySelector(".paseSpan");
    const spanVarios = document.querySelector(".variosSpan");
    fetch(`${window.location.origin}/api/getInvitado.json?id=${id}&uid=${uid}`).then((res) => res.json()).then(
      (json) => {
        setInvitado(json[0].nombre);
        setPase(json[0].pases);
        if (json[0].pases > 1) {
          spanVarios.textContent = "Los";
          pase2.textContent = " pases";
        } else {
          spanVarios.textContent = "Te";
          pase2.textContent = " pase";
        }
      }
    );
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { id: Style["hero"], className: "contenido opa", children: [
    /* @__PURE__ */ jsx("div", { className: Style["laimagen"], children: /* @__PURE__ */ jsx("img", { src: cover, alt: "cover" }) }),
    /* @__PURE__ */ jsx("div", { className: Style.bandeja, id: "bande", children: /* @__PURE__ */ jsxs("div", { className: Style.centro, id: "centro", children: [
      /* @__PURE__ */ jsx("p", { className: Style.familia, id: "invitado", children: invitado }),
      /* @__PURE__ */ jsx("p", { children: "Tengo el honor de invitarlos a celebrar mis XV años" }),
      /* @__PURE__ */ jsxs("p", { className: Style.fecha, children: [
        "La cita es el día",
        /* @__PURE__ */ jsx("b", { children: " " + (() => {
          try {
            if (!fecha) return "Fecha por confirmar";
            const date = new Date(fecha);
            date.setDate(date.getDate() + 1);
            if (isNaN(date.getTime())) return "Fecha inválida";
            return date.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
              timeZone: "America/Mexico_City"
            });
          } catch (error) {
            console.error("Error parsing date:", fecha, error);
            return "Fecha por confirmar";
          }
        })() + " " }),
        "y me encantará compartirlo contigo. Con cariño,"
      ] }),
      /* @__PURE__ */ jsx("h1", { dangerouslySetInnerHTML: { __html: nombres } }),
      pase ? /* @__PURE__ */ jsxs("div", { id: Style["pases"], children: [
        "No. de pases ",
        /* @__PURE__ */ jsx("p", { id: Style["NumeroPases"], children: pase })
      ] }) : ""
    ] }) })
  ] }) });
}

const $$Astro$b = createAstro("https://nvitaciones.com");
const $$Audio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Audio;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="rola" data-astro-cid-57gypg7m> <h3 data-astro-cid-57gypg7m>Escucha la <b data-astro-cid-57gypg7m>canción</b> de mis Xv años</h3> <audio controls autoplay data-astro-cid-57gypg7m> <!-- <source src="horse.ogg"  type="audio/ogg"> --> <source${addAttribute(src, "src")} type="audio/mpeg" data-astro-cid-57gypg7m>
Tu dispositivo no soporta el audio
</audio> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Audio.astro", void 0);

const $$Astro$a = createAstro("https://nvitaciones.com");
const $$Encabezados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Encabezados;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tituloEncabezados"> ${texto == "Mis 15 a\xF1os" ? renderTemplate`<svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M47.3846 17.0297C47.7949 17.4823 48 18.0198 48 18.6422C48 19.2645 47.7949 19.802 47.3846 20.2546L39.4406 28.232C39.0303 28.6846 38.5082 28.9109 37.8741 28.9109C37.2401 28.9109 36.7179 28.6846 36.3077 28.232L33.1189 25.0637C32.6713 24.611 32.4476 24.0736 32.4476 23.4512C32.4476 22.8289 32.6713 22.2914 33.1189 21.8388C33.5664 21.4239 34.0979 21.2164 34.7133 21.2164C35.3287 21.2164 35.8601 21.4239 36.3077 21.8388L37.8741 23.4229L44.1958 17.0297C44.6434 16.6148 45.1748 16.4074 45.7902 16.4074C46.4056 16.4074 46.9371 16.6148 47.3846 17.0297ZM20.8671 39.4342L15.2727 34.2857C12.5874 31.834 10.2844 29.6464 8.36364 27.7228C6.44289 25.7992 4.85781 23.9887 3.60839 22.2914C2.35897 20.5941 1.44522 18.9533 0.867133 17.3692C0.289044 15.785 0 14.1254 0 12.3904C0 8.84488 1.17483 5.89345 3.52448 3.53607C5.87413 1.17869 8.80186 0 12.3077 0C14.2471 0 16.0932 0.405469 17.8462 1.21641C19.5991 2.02735 21.1096 3.18718 22.3776 4.6959C23.6457 3.18718 25.1562 2.02735 26.9091 1.21641C28.662 0.405469 30.5082 0 32.4476 0C35.6177 0 38.2751 0.97124 40.4196 2.91372C42.5641 4.8562 43.8974 7.12871 44.4196 9.73126C43.6737 9.42951 42.8904 9.24092 42.0699 9.16549C41.2494 9.09005 40.4103 9.05233 39.5524 9.05233C36.3823 9.05233 33.4732 10.3442 30.8252 12.9279C28.1772 15.5116 26.8531 18.7459 26.8531 22.6308C26.8531 24.4413 27.2448 26.2801 28.028 28.1471C28.8112 30.0141 29.9114 31.5323 31.3287 32.7016C30.62 33.3428 29.697 34.1631 28.5594 35.1627C27.4219 36.1622 26.4429 37.0391 25.6224 37.7935L23.8322 39.4342C23.4219 39.8114 22.9277 40 22.3496 40C21.7716 40 21.2774 39.8114 20.8671 39.4342Z" fill="#8C6363"></path> </svg>` : renderTemplate`<svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5 0C6.48357 0 0 6.4165 0 14.35C0 25.1125 14.5 41 14.5 41C14.5 41 29 25.1125 29 14.35C29 6.4165 22.5164 0 14.5 0ZM14.5 19.475C11.6414 19.475 9.32143 17.179 9.32143 14.35C9.32143 11.521 11.6414 9.225 14.5 9.225C17.3586 9.225 19.6786 11.521 19.6786 14.35C19.6786 17.179 17.3586 19.475 14.5 19.475Z" fill="#864E4E"></path> </svg>`} <br> <h2>${texto}</h2> </div> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Encabezados.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Encabezados.astro", void 0);

const $$Astro$9 = createAstro("https://nvitaciones.com");
const $$Cartas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Cartas;
  const { icono, titulo, array, fecha, codigo, tonos } = Astro2.props;
  const formattedFecha = fecha ? new Date(fecha).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }) : null;
  return renderTemplate`${maybeRenderHead()}<div class="carta" data-astro-cid-usgloln4> <div class="icono" data-astro-cid-usgloln4> ${renderComponent($$result, "Icon", $$Icon, { "name": icono, "size": 40, "data-astro-cid-usgloln4": true })} </div> <h3 class="overlay" data-astro-cid-usgloln4>${titulo}</h3> ${fecha ? renderTemplate`<p data-astro-cid-usgloln4>${formattedFecha}</p>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} ${tonos && tonos.length > 0 ? renderTemplate`<li data-astro-cid-usgloln4> <div class="colores-circulos" data-astro-cid-usgloln4> ${tonos.map((color) => renderTemplate`<span class="color-circulo"${addAttribute(`background-color: ${color};`, "style")}${addAttribute(color, "title")} data-astro-cid-usgloln4></span>`)} </div> </li>` : null} ${array ? array.map((item) => renderTemplate`<li data-astro-cid-usgloln4><p data-astro-cid-usgloln4> ${item}</p></li>`) : renderTemplate`${renderSlot($$result, $$slots["default"])}`} ${codigo ? renderTemplate`<p data-astro-cid-usgloln4>${codigo}</p>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div>  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Cartas.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Cartas.astro", void 0);

const $$Astro$8 = createAstro("https://nvitaciones.com");
const $$Frase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Frase;
  const { frase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="frase"> ${frase} </p> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Frase.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Frase.astro", void 0);

const $$SilderGsap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="galeSlider"> <div class="progress-bar-container"> <div class="progress-bar"></div> </div> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/SilderGsap.astro?astro&type=script&index=0&lang.ts")} <!-- No hay cambios de código posibles para evitar el brinco si el slider no es el primer elemento.
Debe ir al inicio del body o del flujo de la página. -->`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/SilderGsap.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://nvitaciones.com");
const $$Mapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Mapa;
  const { lat, lng, mapName } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<div", ' data-astro-cid-664duqr5></div>  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin=""> <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"> <script>(function(){', "\n  let map = L.map(mapName, {\n    zoomControl: false,\n    attributionControl: false\n  }).setView([lat, lng], 16);\n\n  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {\n    maxZoom: 27,\n    subdomains: 'abcd',\n  }).addTo(map);\n\n  const customIcon = L.divIcon({\n    html: `<i class=\"fa-solid fa-location-dot custom-marker\"></i>`,\n    className: 'custom-div-icon',\n    iconSize: [30, 42],\n    iconAnchor: [15, 42]\n  });\n\n  L.marker([lat, lng], { icon: customIcon }).addTo(map);\n\n  L.control.zoom({\n    position: 'topright'\n  }).addTo(map);\n\n  setTimeout(() => {\n    map.invalidateSize();\n  }, 100);\n\n  window.addEventListener('resize', () => {\n    if (map) {\n      map.invalidateSize();\n    }\n  });\n\n  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\n  if (isMobile) {\n    map.dragging.disable();\n  }\n  map.scrollWheelZoom.disable();\n})();</script>"], ["", "<div", ' data-astro-cid-664duqr5></div>  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin=""> <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"> <script>(function(){', "\n  let map = L.map(mapName, {\n    zoomControl: false,\n    attributionControl: false\n  }).setView([lat, lng], 16);\n\n  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {\n    maxZoom: 27,\n    subdomains: 'abcd',\n  }).addTo(map);\n\n  const customIcon = L.divIcon({\n    html: \\`<i class=\"fa-solid fa-location-dot custom-marker\"></i>\\`,\n    className: 'custom-div-icon',\n    iconSize: [30, 42],\n    iconAnchor: [15, 42]\n  });\n\n  L.marker([lat, lng], { icon: customIcon }).addTo(map);\n\n  L.control.zoom({\n    position: 'topright'\n  }).addTo(map);\n\n  setTimeout(() => {\n    map.invalidateSize();\n  }, 100);\n\n  window.addEventListener('resize', () => {\n    if (map) {\n      map.invalidateSize();\n    }\n  });\n\n  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\n  if (isMobile) {\n    map.dragging.disable();\n  }\n  map.scrollWheelZoom.disable();\n})();</script>"])), maybeRenderHead(), addAttribute(mapName, "id"), defineScriptVars({ lat, lng, mapName }));
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Mapa.astro", void 0);

const $$Astro$6 = createAstro("https://nvitaciones.com");
const $$BloqueMapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BloqueMapa;
  const { encabezado, dir, lat, lng, mapName, horario } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bloqueMapa"> <div class="izq"> ${renderComponent($$result, "Mapa", $$Mapa, { "lat": lat, "lng": lng, "mapName": mapName })} </div> <div class="der"> <div class="bandeja"> <h3>${encabezado}</h3> <time datetime="{horario}"> <svg viewBox="0 0 37 37" fill="none"> <path d="M18.4815 0C8.2695 0 0 8.288 0 18.5C0 28.712 8.2695 37 18.4815 37C28.712 37 37 28.712 37 18.5C37 8.288 28.712 0 18.4815 0ZM24.5865 27.2135L16.65 19.2585V9.25H20.35V17.7415L27.2135 24.605L24.5865 27.2135Z" fill="#864E4E"></path> </svg> ${horario}</time> <address> <svg viewBox="0 0 29 41" fill="ffffff"> <path d="M14.5 0C6.48357 0 0 6.4165 0 14.35C0 25.1125 14.5 41 14.5 41C14.5 41 29 25.1125 29 14.35C29 6.4165 22.5164 0 14.5 0ZM14.5 19.475C11.6414 19.475 9.32143 17.179 9.32143 14.35C9.32143 11.521 11.6414 9.225 14.5 9.225C17.3586 9.225 19.6786 11.521 19.6786 14.35C19.6786 17.179 17.3586 19.475 14.5 19.475Z" fill="#864E4E"></path> </svg> <br> <p>${unescapeHTML(dir)}</p> </address> ${renderComponent($$result, "Anchor", $$Anchor, { "url": `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "id": `${mapName}-btn-googlemaps`, "icono": "solar:map-arrow-right-outline", "clases": "large", "conBorde": false, "redondo": false, "sombra": true, "tema": "secundario", "texto": "iniciar viaje", "target": "_blank" })} </div> </div> </div> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/BloqueMapa.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/BloqueMapa.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://nvitaciones.com");
const $$Regalos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Regalos;
  const { frase, beneficiario, banco, cuenta, tipo, mesas } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="bandejaRegalos" data-astro-cid-f4vxu3ot> ', " <h2 data-astro-cid-f4vxu3ot>Regalos</h2> <p data-astro-cid-f4vxu3ot>", "</p> ", " ", " ", ' </div>  <!-- <script>\n  import { gsap } from "gsap";\n  import { ScrollTrigger } from "gsap/ScrollTrigger";\n\n  gsap.registerPlugin(ScrollTrigger);\n  const mm = gsap.matchMedia();\n\n  mm.add("(min-width: 800px)", () => {\n    // desktop setup code here...\n    const tl = gsap.timeline({\n      scrollTrigger: {\n        trigger: "#regalo",\n        start: "top 70%",\n        end: "bottom 60%",\n      },\n    });\n    tl.from("#regalo", {\n      ease: "power2.out",\n      opacity: 0,\n      duration: 1,\n      x: -60,\n    });\n    tl.from("#transferencias", {\n      opacity: 0,\n      ease: "power2.out",\n      delay: 0.3,\n    });\n    tl.from("#transferencias > * ", {\n      ease: "power2.out",\n      opacity: 0,\n      stagger: 0.2,\n    });\n  });\n\n  mm.add("(max-width: 799px)", () => {\n    // mobile setup code here...\n    const tl = gsap.timeline({\n      scrollTrigger: {\n        trigger: "#regalo",\n        start: "top 80%",\n        end: "bottom 40%",\n        scrub: true,\n      },\n    });\n    tl.from("#regalo", {\n      ease: "power2.out",\n      opacity: 0,\n      y: 60,\n    });\n    tl.from("#transferencias", {\n      opacity: 0,\n      ease: "power2.out",\n      delay: 0.3,\n    });\n    tl.from("#transferencias > * ", {\n      ease: "power2.out",\n      opacity: 0,\n      stagger: 0.2,\n    });\n  });\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:wallet-giftcard", "size": 40, "data-astro-cid-f4vxu3ot": true }), unescapeHTML(frase), tipo.includes("mesa") && Array.isArray(mesas) && mesas.length > 0 && renderTemplate`<div id="regalo" data-astro-cid-f4vxu3ot> <h3 data-astro-cid-f4vxu3ot>Mesa de regalos</h3> ${mesas.map((mesa) => renderTemplate`${renderComponent($$result, "Anchor", $$Anchor, { "url": mesa.url, "id": "estilo", "clases": "large", "conBorde": false, "redondo": true, "sombra": false, "tema": "primario", "texto": mesa.titulo, "data-astro-cid-f4vxu3ot": true })}`)} </div>`, tipo.includes("lluvia") && renderTemplate`<div id="lluvia" data-astro-cid-f4vxu3ot> <h3 data-astro-cid-f4vxu3ot>Lluvia de sobres</h3> <p data-astro-cid-f4vxu3ot>
Preferimos que los presentes que deseen hacernos sean en efectivo, los
          cuales podrán colocar en un sobre
</p> </div>`, tipo.includes("transferencias") && beneficiario && banco && cuenta && renderTemplate`<div id="transferencias" data-astro-cid-f4vxu3ot> <h3 data-astro-cid-f4vxu3ot>Transferencias:</h3> <p data-astro-cid-f4vxu3ot>
Si prefieres hacer una transferencia, puedes hacerlo a la siguiente
          cuenta bancaria:
</p> <ul data-astro-cid-f4vxu3ot> <li data-astro-cid-f4vxu3ot> <b data-astro-cid-f4vxu3ot>Beneficiario</b>: ${beneficiario} </li> <li data-astro-cid-f4vxu3ot> <b data-astro-cid-f4vxu3ot>Banco</b>: ${banco} </li> <li data-astro-cid-f4vxu3ot> <b data-astro-cid-f4vxu3ot>Cuenta</b>: ${cuenta} </li> </ul> </div>`);
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/Regalos.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://nvitaciones.com");
const $$Itinerario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Itinerario;
  const { listado } = Astro2.props;
  const base = "/";
  const urlPatron = `url("${base}/patron-fondo.png")`;
  const $$definedVars = defineStyleVars([{ urlPatron }]);
  return renderTemplate(_a || (_a = __template(["", '<section class="grid pantalla" id="riel" data-astro-cid-gsjbyhnd', "> <ol data-astro-cid-gsjbyhnd", "> ", ' </ol> </section>  <!-- \n<script>\n  import gsap from "gsap";\n  import ScrollTrigger from "gsap/ScrollTrigger";\n\n  gsap.registerPlugin(ScrollTrigger);\n\n  const li = gsap.utils.toArray(" ol li");\n  const riel = document.querySelector("#riel");\n\n  gsap.to(li, {\n    xPercent: -100 * (li.length - 1),\n    ease: "none",\n    scrollTrigger: {\n      trigger: riel,\n      pin: true,\n      start: "center center center",\n      end: "+=3000",\n      scrub: 1,\n        snap: {\n          snapTo: 1 / (li.length - 1),\n          duration: 0.7,\n          delay: 0.6,\n          ease: "power1.inOut",\n        },\n      markers: true,\n    },\n  });\n</script> -->'])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), listado.map((item, index) => renderTemplate`<li data-astro-cid-gsjbyhnd${addAttribute($$definedVars, "style")}> <h4 data-astro-cid-gsjbyhnd${addAttribute($$definedVars, "style")}>${item.titulo}</h4> <p data-astro-cid-gsjbyhnd${addAttribute($$definedVars, "style")}>${item.lugar}</p> <p data-astro-cid-gsjbyhnd${addAttribute($$definedVars, "style")}>${item.hora}</p> </li>`));
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Itinerario.astro", void 0);

const $$Astro$3 = createAstro("https://nvitaciones.com");
const $$Padres = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Padres;
  const { mama, papa, fotopapas } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="padres"> <div class="bande"> <span>CON LA BENDICIÓN DE</span> <div class="conte"> <ul class="padre"> ${mama && renderTemplate`<li> <h3>Mi Madre</h3> ${mama} </li>`} ${papa && renderTemplate`<li> <h3>Mi Padre</h3> ${papa} </li>`} ${fotopapas ? renderTemplate`<div class="padre"> <img${addAttribute(fotopapas, "src")} alt="Foto de los padres de la quinceañera"> </div>` : ""} </ul> </div> </div> </div>`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Padres.astro", void 0);

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { base } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer> <p>Invitación desarrollada y diseñada por:</p> <a href="https://nvitaciones.com" target="_blank"> <img${addAttribute(`/nvita-logo.svg`, "src")} alt="invitaciones digitales para bodas, quince años y eventos" class="logo"> </a><ul><a href="https://nvitaciones.com" target="_blank"></a><li><a href="https://nvitaciones.com" target="_blank"></a><a href="https://www.instagram.com/nvitaciones/" target="_blank"> <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </a> </li> <li> <a href="https://www.facebook.com/nvitaciones" target="_blank"> <svg width="24" height="24" viewBox="0 0 24 24"> <g clip-path="url(#clip0_10_119)"> <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black"></path> </g> <defs> <clipPath id="clip0_10_119"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg> </a> </li> <li> <a href="https://www.tiktok.com/@nvitaciones" target="_blank"> <svg viewBox="0 0 333335 333336"> <g transform="matrix(1.04763,0,0,1.04763,-5865.43,-4511.92)"> <path d="M322918,48738.3L322918,278056C322918,302103 303394,321626 279347,321626L50029.8,321626C25982.7,321626 6459.5,302103 6459.5,278056L6459.5,48738.3C6459.5,24691.2 25982.7,5168 50029.8,5168L279347,5168C303394,5168 322918,24691.2 322918,48738.3ZM205297,47974.4L205297,47975.7L170541,47974.4L170541,190383C177619,280854 75190.8,247444 104557,191288C109310,182201 117984,177286 133986,174649L133986,136005C65478.1,146916 58600.9,220507 77572.5,251119C106108,297163 205992,290097 205839,197248L205839,126110C225247,137782 241903,144046 260935,142172L260935,104115C228126,102010 209262,81823.2 205297,47974.4Z"></path> </g> </svg> </a> </li> </ul> <p>© 2022 - ${(/* @__PURE__ */ new Date()).getFullYear()} Todos los derechos reservados</p> </footer>`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Padrinos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Padrinos;
  const { nombres } = Astro2.props;
  return renderTemplate`${nombres && nombres.length > 0 && renderTemplate`${maybeRenderHead()}<div id="padres"><div class="bande"><h3>Padrinos</h3><div class="conte"><ul class="padre">${nombres.map((nombre) => renderTemplate`<li>${nombre}</li>`)}</ul></div></div></div>`}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/Padrinos.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  if (!slug) {
    throw new Error("Slug no proporcionado");
  }
  Astro2.response.headers.set("Cache-Control", "s-maxage=10, stale-while-revalidate");
  const owner = "claudiomonzoni";
  const repo = "nvite-home";
  const branch = "master";
  const withParam = (url, key, val) => url + (url.includes("?") ? "&" : "?") + `${key}=${encodeURIComponent(val)}`;
  const cacheBust = Date.now().toString();
  const toRawUrl = (maybePath) => {
    if (!maybePath) return void 0;
    try {
      new URL(maybePath);
      return maybePath;
    } catch {
    }
    const p = maybePath.startsWith("/") ? maybePath : `/${maybePath}`;
    const base2 = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/public${p}`;
    return withParam(base2, "v", cacheBust);
  };
  let mdxUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/src/content/quince/${slug}.mdx`;
  mdxUrl = withParam(mdxUrl, "v", cacheBust);
  const headers = {};
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(mdxUrl, { headers });
  if (!res.ok) {
    return Astro2.redirect("/404");
  }
  const mdxRaw = await res.text();
  const parsed = matter(mdxRaw);
  const fm = parsed.data;
  const quince = {
    data: {
      version: fm.version ?? "",
      draft: !!fm.draft,
      titulo: fm.titulo ?? slug,
      whatsapp: fm.whatsapp ?? "",
      email: fm.email ?? "",
      quinceanera: fm.quinceanera ?? "",
      padres: {
        mama: fm?.padres?.mama ?? "",
        papa: fm?.padres?.papa ?? "",
        fotopapas: toRawUrl(fm?.padres?.fotopapas) ?? ""
      },
      padrinos: Array.isArray(fm?.padrinos) ? fm.padrinos : [],
      fecha: fm.fecha ? new Date(fm.fecha) : /* @__PURE__ */ new Date(),
      frase_amor: fm.frase_amor ?? "",
      ceremonia: {
        hora: fm?.ceremonia?.hora ?? "",
        lugar: fm?.ceremonia?.lugar ?? "",
        lat: fm?.ceremonia?.lat ?? "",
        lng: fm?.ceremonia?.lng ?? ""
      },
      recepcion: {
        hora: fm?.recepcion?.hora ?? "",
        lugar: fm?.recepcion?.lugar ?? "",
        lat: fm?.recepcion?.lat ?? "",
        lng: fm?.recepcion?.lng ?? ""
      },
      itinerario: Array.isArray(fm?.itinerario) ? fm.itinerario : [],
      cover: toRawUrl(fm.cover) ?? "",
      audioMusica: toRawUrl(fm.audioMusica) ?? "",
      galeria: Array.isArray(fm?.galeria) ? fm.galeria.map((p) => toRawUrl(p)) : [],
      imagenesSolitarias: Array.isArray(fm?.imagenesSolitarias) ? fm.imagenesSolitarias.map((p) => toRawUrl(p)) : [],
      frase_regalos: fm.frase_regalos ?? "",
      regalos: Array.isArray(fm?.regalos) ? fm.regalos : [],
      tipoRegalos: Array.isArray(fm?.tipoRegalos) ? fm.tipoRegalos : [],
      beneficiario: fm.beneficiario ?? "",
      banco: fm.banco ?? "",
      cuenta: fm.cuenta ?? "",
      progresoPorcentaje: typeof fm.progresoPorcentaje === "number" ? fm.progresoPorcentaje : 20,
      progresoFrase: fm.progresoFrase ?? "¡Ya casi completamos la lista de invitados!",
      progresoMostrarSiempre: fm.progresoMostrarSiempre ?? true,
      consideraciones: Array.isArray(fm?.consideraciones) ? fm.consideraciones : [],
      vestimenta: fm.vestimenta ?? "",
      coloresVestimenta: Array.isArray(fm?.coloresVestimenta) ? fm.coloresVestimenta : [],
      paleta: fm.paleta ?? "base",
      theme: fm.theme ?? { name: "base" },
      content: parsed.content ?? ""
    }
  };
  const base = new URL(Astro2.url.pathname, Astro2.site);
  const imagenesSolitarias = quince.data.imagenesSolitarias ?? [];
  const galeria = quince.data.galeria ?? [];
  const mesas = (quince.data.regalos ?? []).filter(
    (m) => typeof m?.url === "string" && m.url && typeof m?.titulo === "string" && m.titulo
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Invitación de quince de ${quince.data.quinceanera}`, "url": base.toString(), "cover": quince.data.cover, "paleta": quince.data.paleta, "theme": quince.data.theme }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, { "nombres": quince.data.quinceanera, "fecha": quince.data.fecha, "cover": quince.data.cover, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Encabezados", $$Encabezados, { "texto": "Mis 15 años" })} ${maybeRenderHead()}<section class="grid pantalla"> ${renderComponent($$result2, "Padres", $$Padres, { "mama": quince.data.padres.mama, "papa": quince.data.padres.papa, "fotopapas": quince.data.padres.fotopapas })} ${renderComponent($$result2, "Padrinos", $$Padrinos, { "nombres": quince.data.padrinos })} </section> ${quince.data.version === "Lux" && quince.data.audioMusica && renderTemplate`<section class="grid contenido"> ${renderComponent($$result2, "AudioPlayer", $$Audio, { "src": quince.data.audioMusica })} </section>`} <section class="grid contenido"> <div class="conte-cartas"> ${renderComponent($$result2, "Cartas", $$Cartas, { "icono": "mdi:list-status", "titulo": "Detalles", "array": quince.data.consideraciones })} ${renderComponent($$result2, "Cartas", $$Cartas, { "icono": "mdi:clothes-hanger", "titulo": "Dress code", "codigo": quince.data.vestimenta })} ${renderComponent($$result2, "Cartas", $$Cartas, { "icono": "mdi:clipboard-text-date-outline", "titulo": "Sugerencia de tonos", "tonos": quince.data.coloresVestimenta })} </div> </section> <section class="grid contenido"> ${renderComponent($$result2, "Frase", $$Frase, { "frase": quince.data.frase_amor })} </section>  ${imagenesSolitarias[0] && renderTemplate`${renderComponent($$result2, "FotoSolitaria", $$FotoSolitaria, { "arriba": true, "gradientePorciento": 50, "src": imagenesSolitarias[0] })}`}<section class="grid contenido fondo-mitad"> <!-- <ParrafosLibres
    texto="Te compartimos la ubicación, te esperamos en la ceremonia religiosa y en
      la fiesta de XV años, ¡No faltes!"
  /> --> <div id="zigzag"> ${renderComponent($$result2, "BloqueMapa", $$BloqueMapa, { "encabezado": "Ceremonia", "dir": quince.data.ceremonia.lugar, "horario": quince.data.ceremonia.hora, "lat": quince.data.ceremonia.lat, "lng": quince.data.ceremonia.lng, "mapName": "mapa1" })} ${renderComponent($$result2, "BloqueMapa", $$BloqueMapa, { "encabezado": "Recepción", "dir": quince.data.recepcion.lugar, "horario": quince.data.recepcion.hora, "lat": quince.data.recepcion.lat, "lng": quince.data.recepcion.lng, "mapName": "mapa2" })} </div> </section>  ${imagenesSolitarias[1] && renderTemplate`${renderComponent($$result2, "FotoSolitaria", $$FotoSolitaria, { "arriba": false, "gradientePorciento": 40, "src": imagenesSolitarias[1] })}`}<section class="grid contenido"> ${renderComponent($$result2, "Contador", $$Contador, { "fecha": quince.data.fecha.toISOString().split("T")[0] })} </section> ${quince.data.version === "Lux" && renderTemplate`<section class="grid pantalla"> ${renderComponent($$result2, "ProgresoInvitados", $$ProgresoInvitados, { "email": quince.data.email ?? "nvitacionluxquince@nvitaciones.com", "porcentajeMostrarInvitados": quince.data.progresoPorcentaje ?? 20, "frase": quince.data.progresoFrase ?? "¡Ya casi completamos la lista de invitados!", "mostrarSiempre": quince.data.progresoMostrarSiempre ?? true })} </section>

${renderComponent($$result2, "Itinerario", $$Itinerario, { "listado": quince.data.itinerario })}`}<section class="grid pantalla"> ${renderComponent($$result2, "SilderGsap", $$SilderGsap, {}, { "default": async ($$result3) => renderTemplate`${galeria && galeria.map((src) => renderTemplate`<img${addAttribute(src, "src")}${addAttribute(`Galería de ${quince.data.quinceanera || "XV Años"}`, "alt")} loading="eager">`)}` })} </section> <section class="grid contenido"> ${renderComponent($$result2, "Regalos", $$Regalos, { "tipo": quince.data.tipoRegalos, "mesas": mesas, "frase": quince.data.frase_regalos, "beneficiario": quince.data.beneficiario, "banco": quince.data.banco, "cuenta": quince.data.cuenta })} </section> <section class="grid contenido"> ${renderComponent($$result2, "MensajeVip", $$MensajeVip, {})} </section> ${(() => {
    switch (quince.data.version) {
      case "Lux":
      case "Clasica":
        return renderTemplate`${renderComponent($$result2, "Confirmacion", null, { "whatsapp": quince.data.whatsapp, "dias_antes": 15, "version": quince.data.version, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/Confirmacion", "client:component-export": "default" })}`;
      case "Esencial":
        return renderTemplate`<section> ${renderComponent($$result2, "ConfirmacionBasica", null, { "whatsapp": quince.data.whatsapp, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/quince/ConfirmacionBasica", "client:component-export": "default" })} </section>`;
      default:
        return null;
    }
  })()}<section class="grid contenido"> ${renderComponent($$result2, "Footer", $$Footer, { "ruta": base })} </section> ` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/quince/[slug].astro", void 0);
const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/quince/[slug].astro";
const $$url = "/quince/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
