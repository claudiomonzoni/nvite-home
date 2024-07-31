import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, y as unescapeHTML, z as defineStyleVars, s as addAttribute, u as renderSlot, C as defineScriptVars, p as renderComponent } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                   */
/* empty css                                                                      */
/* empty css                                                              */
/* empty css                                                             */
/* empty css                                                            */
/* empty css                                                                  */
/* empty css                                                                */
/* empty css                                                                   */

const $$Astro$7 = createAstro("https://www.nvita.me");
const $$Encabezados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Encabezados;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="titulo" data-astro-cid-qmfzridu> ${texto == "Nuestra Boda" ? renderTemplate`<svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-qmfzridu> <path d="M47.3846 17.0297C47.7949 17.4823 48 18.0198 48 18.6422C48 19.2645 47.7949 19.802 47.3846 20.2546L39.4406 28.232C39.0303 28.6846 38.5082 28.9109 37.8741 28.9109C37.2401 28.9109 36.7179 28.6846 36.3077 28.232L33.1189 25.0637C32.6713 24.611 32.4476 24.0736 32.4476 23.4512C32.4476 22.8289 32.6713 22.2914 33.1189 21.8388C33.5664 21.4239 34.0979 21.2164 34.7133 21.2164C35.3287 21.2164 35.8601 21.4239 36.3077 21.8388L37.8741 23.4229L44.1958 17.0297C44.6434 16.6148 45.1748 16.4074 45.7902 16.4074C46.4056 16.4074 46.9371 16.6148 47.3846 17.0297ZM20.8671 39.4342L15.2727 34.2857C12.5874 31.834 10.2844 29.6464 8.36364 27.7228C6.44289 25.7992 4.85781 23.9887 3.60839 22.2914C2.35897 20.5941 1.44522 18.9533 0.867133 17.3692C0.289044 15.785 0 14.1254 0 12.3904C0 8.84488 1.17483 5.89345 3.52448 3.53607C5.87413 1.17869 8.80186 0 12.3077 0C14.2471 0 16.0932 0.405469 17.8462 1.21641C19.5991 2.02735 21.1096 3.18718 22.3776 4.6959C23.6457 3.18718 25.1562 2.02735 26.9091 1.21641C28.662 0.405469 30.5082 0 32.4476 0C35.6177 0 38.2751 0.97124 40.4196 2.91372C42.5641 4.8562 43.8974 7.12871 44.4196 9.73126C43.6737 9.42951 42.8904 9.24092 42.0699 9.16549C41.2494 9.09005 40.4103 9.05233 39.5524 9.05233C36.3823 9.05233 33.4732 10.3442 30.8252 12.9279C28.1772 15.5116 26.8531 18.7459 26.8531 22.6308C26.8531 24.4413 27.2448 26.2801 28.028 28.1471C28.8112 30.0141 29.9114 31.5323 31.3287 32.7016C30.62 33.3428 29.697 34.1631 28.5594 35.1627C27.4219 36.1622 26.4429 37.0391 25.6224 37.7935L23.8322 39.4342C23.4219 39.8114 22.9277 40 22.3496 40C21.7716 40 21.2774 39.8114 20.8671 39.4342Z" fill="#8C6363" data-astro-cid-qmfzridu></path> </svg>` : renderTemplate`<svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-qmfzridu> <path d="M14.5 0C6.48357 0 0 6.4165 0 14.35C0 25.1125 14.5 41 14.5 41C14.5 41 29 25.1125 29 14.35C29 6.4165 22.5164 0 14.5 0ZM14.5 19.475C11.6414 19.475 9.32143 17.179 9.32143 14.35C9.32143 11.521 11.6414 9.225 14.5 9.225C17.3586 9.225 19.6786 11.521 19.6786 14.35C19.6786 17.179 17.3586 19.475 14.5 19.475Z" fill="#864E4E" data-astro-cid-qmfzridu></path> </svg>`} <br data-astro-cid-qmfzridu> <h2 data-astro-cid-qmfzridu>${texto}</h2> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Encabezados.astro", void 0);

const $$Astro$6 = createAstro("https://www.nvita.me");
const $$ParrafosLibres = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ParrafosLibres;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid contenido" data-astro-cid-ha2k3z5z> <p class="parrafos-libres" data-astro-cid-ha2k3z5z>${unescapeHTML(texto)}</p> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/ParrafosLibres.astro", void 0);

const $$Astro$5 = createAstro("https://www.nvita.me");
const $$Cartas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cartas;
  const { icono, titulo, array } = Astro2.props;
  const urlPatron = 'url("/bodas/patron-fondo.png")';
  const $$definedVars = defineStyleVars([{ urlPatron }]);
  return renderTemplate`${maybeRenderHead()}<div class="carta" data-astro-cid-6dxtgyfs${addAttribute($$definedVars, "style")}> <img${addAttribute(icono, "src")}${addAttribute(titulo, "alt")} data-astro-cid-6dxtgyfs${addAttribute($$definedVars, "style")}> <h3 class="overlay" data-astro-cid-6dxtgyfs${addAttribute($$definedVars, "style")}>${titulo}</h3> ${array ? array.map((item) => renderTemplate`<li data-astro-cid-6dxtgyfs${addAttribute($$definedVars, "style")}>${item}</li>`) : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Cartas.astro", void 0);

const $$Astro$4 = createAstro("https://www.nvita.me");
const $$Frase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Frase;
  const { frase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="frase" data-astro-cid-emyua3mt> ${frase} </p>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Frase.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://www.nvita.me");
const $$Mapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mapa;
  const { lat, lng, mapName } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' data-astro-cid-w7undofb></div>  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin=""> <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script> <script>(function(){', '\n    var map = L.map(mapName).setView([lat, lng], 17);\n    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {\n      maxZoom: 27,\n \n    }).addTo(map);\n    var circle = L.circle([lat, lng], {\n      color: "red",\n      fillColor: "#E76128",\n      fillOpacity: 0.5,\n      radius: 30,\n    }).addTo(map);\n\n    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\nif (isMobile) {\n\n  map.dragging.disable();\n}\n    map.scrollWheelZoom.disable();\n  })();</script>'])), maybeRenderHead(), addAttribute(mapName, "id"), defineScriptVars({ lat, lng, mapName }));
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Mapa.astro", void 0);

const $$Astro$2 = createAstro("https://www.nvita.me");
const $$BloqueMapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BloqueMapa;
  const { encabezado, dir, lat, lng, mapName, horario } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bloqueMapa" data-astro-cid-rm2hf5iu> <div class="izq" data-astro-cid-rm2hf5iu> ${renderComponent($$result, "Mapa", $$Mapa, { "lat": lat, "lng": lng, "mapName": mapName, "data-astro-cid-rm2hf5iu": true })} </div> <div class="der" data-astro-cid-rm2hf5iu> <div class="bandeja" data-astro-cid-rm2hf5iu> <h3 data-astro-cid-rm2hf5iu>${encabezado}</h3> <time datetime="{horario}" data-astro-cid-rm2hf5iu> <svg viewBox="0 0 37 37" fill="none" data-astro-cid-rm2hf5iu> <path d="M18.4815 0C8.2695 0 0 8.288 0 18.5C0 28.712 8.2695 37 18.4815 37C28.712 37 37 28.712 37 18.5C37 8.288 28.712 0 18.4815 0ZM24.5865 27.2135L16.65 19.2585V9.25H20.35V17.7415L27.2135 24.605L24.5865 27.2135Z" fill="#864E4E" data-astro-cid-rm2hf5iu></path> </svg> ${horario}</time> <address data-astro-cid-rm2hf5iu><svg viewBox="0 0 29 41" fill="ffffff" data-astro-cid-rm2hf5iu> <path d="M14.5 0C6.48357 0 0 6.4165 0 14.35C0 25.1125 14.5 41 14.5 41C14.5 41 29 25.1125 29 14.35C29 6.4165 22.5164 0 14.5 0ZM14.5 19.475C11.6414 19.475 9.32143 17.179 9.32143 14.35C9.32143 11.521 11.6414 9.225 14.5 9.225C17.3586 9.225 19.6786 11.521 19.6786 14.35C19.6786 17.179 17.3586 19.475 14.5 19.475Z" fill="#864E4E" data-astro-cid-rm2hf5iu></path> </svg> ${unescapeHTML(dir)}</address> </div> </div> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/BloqueMapa.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Contador = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contador;
  const { fecha } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="demo" data-astro-cid-nv4qft6o></div> <div id="contador" data-astro-cid-nv4qft6o> <p id="falta" data-astro-cid-nv4qft6o>Solo faltan:</p> <div id="numero" data-astro-cid-nv4qft6o>12</div> <p id="dias" data-astro-cid-nv4qft6o>d\xEDas</p> </div>  <script>(function(){', `
const Quincemas = new Date();
const QuinceDias = Quincemas.setDate(Quincemas.getDate() + 15);

// Set the date we're counting down to
const countDownDate = new Date(fecha).getTime();

// Update the count down every 1 second
const cuenta = function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now
    
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      // Output the result in an element with id="demo"
  document.getElementById("numero").innerHTML = days;
  
  // If the count down is over, write some text 
  if (distance < 0) {
        document.getElementById("numero").innerHTML = "0";
      document.getElementById("demo").innerHTML = "Gracias por ser parte de nuestra boda";
    }

    if (days == 1) {
        document.getElementById("dias").innerHTML = "Dia";
        document.getElementById("falta").innerHTML = "Solo falta";
    }
   
};
cuenta()

})();<\/script>`])), maybeRenderHead(), defineScriptVars({ fecha }));
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Contador.astro", void 0);

const $$Astro = createAstro("https://www.nvita.me");
const $$BloqueVenta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BloqueVenta;
  const { costo, version, stripe } = Astro2.props;
  Astro2.url.host;
  const tipos = ["plus", "bodas", "basic"];
  return renderTemplate`${maybeRenderHead()}<div class="grid contenido" data-astro-cid-rn46qyh6> <div class="flex" id="bloqueventas" data-astro-cid-rn46qyh6> <div class="info" data-astro-cid-rn46qyh6> <h3 data-astro-cid-rn46qyh6><span data-astro-cid-rn46qyh6>Compra: nvita</span>ción de Boda ${version}</h3> <a href="https://nvita.me" class="btn" data-astro-cid-rn46qyh6> Regresar</a> <a${addAttribute(stripe, "href")} class="btn-claro" target="_blank" data-astro-cid-rn46qyh6>Comprar $${costo}</a> </div> <div id="version" data-astro-cid-rn46qyh6> <h4 data-astro-cid-rn46qyh6>Ver más versiones</h4> ${tipos.map((tipo) => tipo !== version ? renderTemplate`<a${addAttribute(`https://nvita.me/bodas/nvita-${tipo}?id=2`, "href")} class="btn" data-astro-cid-rn46qyh6>
nvita ${tipo} </a>` : null)} </div> </div> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/BloqueVenta.astro", void 0);

export { $$Encabezados as $, $$ParrafosLibres as a, $$Cartas as b, $$Frase as c, $$BloqueMapa as d, $$Contador as e, $$BloqueVenta as f };
