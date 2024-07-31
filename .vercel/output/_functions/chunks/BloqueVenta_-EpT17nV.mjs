import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, y as unescapeHTML, z as defineStyleVars, s as addAttribute, u as renderSlot, C as defineScriptVars, p as renderComponent } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                      */
/* empty css                                                              */
/* empty css                                                             */
/* empty css                                                            */
/* empty css                                                                  */
/* empty css                                                                */
/* empty css                                                                   */

const $$Astro$6 = createAstro("https://www.nvita.me");
const $$ParrafosLibres = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ParrafosLibres;
  const { texto } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid contenido" data-astro-cid-62tr5jns> <p class="parrafos-libres" data-astro-cid-62tr5jns>${unescapeHTML(texto)}</p> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/ParrafosLibres.astro", void 0);

const $$Astro$5 = createAstro("https://www.nvita.me");
const $$Cartas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Cartas;
  const { icono, titulo, array } = Astro2.props;
  const urlPatron = 'url("/quince/patron-fondo.png")';
  const $$definedVars = defineStyleVars([{ urlPatron }]);
  return renderTemplate`${maybeRenderHead()}<div class="carta" data-astro-cid-usgloln4${addAttribute($$definedVars, "style")}> <img${addAttribute(icono, "src")}${addAttribute(titulo, "alt")} data-astro-cid-usgloln4${addAttribute($$definedVars, "style")}> <h3 class="overlay" data-astro-cid-usgloln4${addAttribute($$definedVars, "style")}>${titulo}</h3> ${array ? array.map((item) => renderTemplate`<li data-astro-cid-usgloln4${addAttribute($$definedVars, "style")}>${item}</li>`) : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Cartas.astro", void 0);

const $$Astro$4 = createAstro("https://www.nvita.me");
const $$Frase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Frase;
  const { frase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="frase" data-astro-cid-txn2pwuq> ${frase} </p>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Frase.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://www.nvita.me");
const $$Mapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mapa;
  const { lat, lng, mapName } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' data-astro-cid-664duqr5></div>  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" crossorigin=""> <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script> <script>(function(){', '\n    var map = L.map(mapName).setView([lat, lng], 17);\n    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {\n      maxZoom: 27,\n \n    }).addTo(map);\n    var circle = L.circle([lat, lng], {\n      color: "red",\n      fillColor: "#E76128",\n      fillOpacity: 0.5,\n      radius: 30,\n    }).addTo(map);\n\n    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);\nif (isMobile) {\n\n  map.dragging.disable();\n}\n    map.scrollWheelZoom.disable();\n  })();</script>'])), maybeRenderHead(), addAttribute(mapName, "id"), defineScriptVars({ lat, lng, mapName }));
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Mapa.astro", void 0);

const $$Astro$2 = createAstro("https://www.nvita.me");
const $$BloqueMapa = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BloqueMapa;
  const { encabezado, dir, lat, lng, mapName, horario } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bloqueMapa" data-astro-cid-gyfzmagf> <div class="izq" data-astro-cid-gyfzmagf> ${renderComponent($$result, "Mapa", $$Mapa, { "lat": lat, "lng": lng, "mapName": mapName, "data-astro-cid-gyfzmagf": true })} </div> <div class="der" data-astro-cid-gyfzmagf> <div class="bandeja" data-astro-cid-gyfzmagf> <h3 data-astro-cid-gyfzmagf>${encabezado}</h3> <time datetime="{horario}" data-astro-cid-gyfzmagf> <svg viewBox="0 0 37 37" fill="none" data-astro-cid-gyfzmagf> <path d="M18.4815 0C8.2695 0 0 8.288 0 18.5C0 28.712 8.2695 37 18.4815 37C28.712 37 37 28.712 37 18.5C37 8.288 28.712 0 18.4815 0ZM24.5865 27.2135L16.65 19.2585V9.25H20.35V17.7415L27.2135 24.605L24.5865 27.2135Z" fill="#864E4E" data-astro-cid-gyfzmagf></path> </svg> ${horario}</time> <address data-astro-cid-gyfzmagf><svg viewBox="0 0 29 41" fill="ffffff" data-astro-cid-gyfzmagf> <path d="M14.5 0C6.48357 0 0 6.4165 0 14.35C0 25.1125 14.5 41 14.5 41C14.5 41 29 25.1125 29 14.35C29 6.4165 22.5164 0 14.5 0ZM14.5 19.475C11.6414 19.475 9.32143 17.179 9.32143 14.35C9.32143 11.521 11.6414 9.225 14.5 9.225C17.3586 9.225 19.6786 11.521 19.6786 14.35C19.6786 17.179 17.3586 19.475 14.5 19.475Z" fill="#864E4E" data-astro-cid-gyfzmagf></path> </svg> ${unescapeHTML(dir)}</address> </div> </div> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/BloqueMapa.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Contador = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contador;
  const { fecha } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="demo" data-astro-cid-ryydzx7t></div> <div id="contador" data-astro-cid-ryydzx7t> <p id="falta" data-astro-cid-ryydzx7t>Solo faltan:</p> <div id="numero" data-astro-cid-ryydzx7t>12</div> <p id="dias" data-astro-cid-ryydzx7t>d\xEDas</p> </div>  <script>(function(){', `
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
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Contador.astro", void 0);

const $$Astro = createAstro("https://www.nvita.me");
const $$BloqueVenta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BloqueVenta;
  const { costo, version, stripe } = Astro2.props;
  Astro2.url.host;
  const tipos = ["plus", "reg", "basic"];
  return renderTemplate`${maybeRenderHead()}<div class="grid contenido" data-astro-cid-mt222jmm> <div class="flex" id="bloqueventas" data-astro-cid-mt222jmm> <div class="info" data-astro-cid-mt222jmm> <h3 data-astro-cid-mt222jmm><span data-astro-cid-mt222jmm>Compra: nvita</span>ción de Xv años ${version}</h3> <a href="https://nvita.me" class="btn" data-astro-cid-mt222jmm> Regresar</a> <a${addAttribute(stripe, "href")} class="btn-claro" target="_blank" data-astro-cid-mt222jmm>Comprar $${costo}</a> </div> <div id="version" data-astro-cid-mt222jmm> <h4 data-astro-cid-mt222jmm>Ver más versiones</h4> ${tipos.map((tipo) => tipo !== version ? renderTemplate`<a${addAttribute(`https://nvita.me/quince/nvita-quince-${tipo}?id=2`, "href")} class="btn" data-astro-cid-mt222jmm>
nvita ${tipo} </a>` : null)} </div> </div> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/BloqueVenta.astro", void 0);

export { $$ParrafosLibres as $, $$Cartas as a, $$Frase as b, $$BloqueMapa as c, $$Contador as d, $$BloqueVenta as e };
