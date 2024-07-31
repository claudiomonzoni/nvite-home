import { m as createAstro, n as createComponent, o as renderTemplate, q as maybeRenderHead, s as addAttribute, p as renderComponent, z as defineStyleVars, y as unescapeHTML, u as renderSlot, t as renderHead, B as spreadAttributes, F as Fragment } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { $ as $$Picture } from './_astro_assets_rgm5ZIVA.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const $$Astro$4 = createAstro("https://www.nvita.me");
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Btn;
  const { liga, texto, claro, blank } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(liga, "href")}${addAttribute(claro ? "btn-claro" : "btn-oscuro", "class")}${addAttribute(blank ? "_blank" : "", "target")} data-astro-cid-5dcumwjq>${texto}</a> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Btn.astro", void 0);

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="banner azulBG" data-astro-cid-kggsjsm4> <div class="der" data-astro-cid-kggsjsm4> <div class="bande" data-astro-cid-kggsjsm4> <div class="lista" data-astro-cid-kggsjsm4> <h2 data-astro-cid-kggsjsm4>Nvita Basic</h2> <ul data-astro-cid-kggsjsm4> <li data-astro-cid-kggsjsm4>Detalles del evento</li> <li data-astro-cid-kggsjsm4>Cuenta regresiva</li> <li data-astro-cid-kggsjsm4>Datos de tu evento</li> <li data-astro-cid-kggsjsm4>Mapas de ubicación</li> <li data-astro-cid-kggsjsm4>Frase animada</li> <li data-astro-cid-kggsjsm4>Formulario de confirmación sencilla</li> </ul> ${renderComponent($$result, "Btn", $$Btn, { "liga": "/bodas/nvita-basic", "texto": "Ver invitaci\xF3n", "claro": true, "data-astro-cid-kggsjsm4": true })} ${renderComponent($$result, "Btn", $$Btn, { "liga": "https://buy.stripe.com/9AQ5mBdIwaY374s6os", "texto": "$740", "claro": false, "data-astro-cid-kggsjsm4": true })} </div> <div class="lista" data-astro-cid-kggsjsm4> <h2 data-astro-cid-kggsjsm4>Nvita Bodas</h2> <ul data-astro-cid-kggsjsm4> <li data-astro-cid-kggsjsm4><b data-astro-cid-kggsjsm4>Panel de invitados</b></li> <li data-astro-cid-kggsjsm4><b data-astro-cid-kggsjsm4>Nombre del invitado</b></li> <li data-astro-cid-kggsjsm4>Detalles del evento</li> <li data-astro-cid-kggsjsm4>Cuenta regresiva</li> <li data-astro-cid-kggsjsm4>Datos de tu evento</li> <li data-astro-cid-kggsjsm4>Mapas de ubicación</li> <li data-astro-cid-kggsjsm4>Galería de imágenes</li> <li data-astro-cid-kggsjsm4>Sugerencia de regalos</li> <li data-astro-cid-kggsjsm4>Frase animada</li> <li data-astro-cid-kggsjsm4>Formulario de confirmación</li> </ul> ${renderComponent($$result, "Btn", $$Btn, { "liga": "/bodas/nvita-bodas?id=2", "texto": "Ver invitaci\xF3n", "claro": true, "data-astro-cid-kggsjsm4": true })} ${renderComponent($$result, "Btn", $$Btn, { "liga": "https://buy.stripe.com/7sIbKZfQE5DJ1K8eUX", "texto": "$990", "claro": false, "data-astro-cid-kggsjsm4": true })} </div> <div class="lista" data-astro-cid-kggsjsm4> <h2 data-astro-cid-kggsjsm4>Nvita Plus</h2> <ul data-astro-cid-kggsjsm4> <li data-astro-cid-kggsjsm4><b data-astro-cid-kggsjsm4>Panel de invitados</b></li> <li data-astro-cid-kggsjsm4>Música ambiental</li> <li data-astro-cid-kggsjsm4><b data-astro-cid-kggsjsm4>Nombre del invitado</b></li> <li data-astro-cid-kggsjsm4>Detalles del evento</li> <li data-astro-cid-kggsjsm4>Cuenta regresiva</li> <li data-astro-cid-kggsjsm4>Datos de tu evento</li> <li data-astro-cid-kggsjsm4>Mapas de ubicación</li> <li data-astro-cid-kggsjsm4>Galería de imágenes</li> <li data-astro-cid-kggsjsm4>Sugerencia de regalos</li> <li data-astro-cid-kggsjsm4>Frase animada</li> <li data-astro-cid-kggsjsm4><b data-astro-cid-kggsjsm4>Itinerario</b></li> <li data-astro-cid-kggsjsm4>Formulario de confirmación</li> </ul> ${renderComponent($$result, "Btn", $$Btn, { "liga": "/bodas/nvita-plus?id=1", "texto": "Ver invitaci\xF3n", "claro": true, "data-astro-cid-kggsjsm4": true })} ${renderComponent($$result, "Btn", $$Btn, { "liga": "https://buy.stripe.com/5kA8yN0VK2rxgF27su", "texto": "$1290", "claro": false, "data-astro-cid-kggsjsm4": true })} </div> </div> </div> <div class="izq" data-astro-cid-kggsjsm4> <img src="novios-cover-invitacion-digital-nvite.webp" alt="Invitaciones de bodas" data-astro-cid-kggsjsm4> </div> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Banner.astro", void 0);

const $$Astro$3 = createAstro("https://www.nvita.me");
const $$Caracteristicas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Caracteristicas;
  const { encabezado, texto, icono, fondo } = Astro2.props;
  let { colorBg } = Astro2.props;
  const url = `url("${fondo}")`;
  colorBg ? colorBg : colorBg = "#ffd9b0";
  const $$definedVars = defineStyleVars([{ url, colorBg }]);
  return renderTemplate`${maybeRenderHead()}<div class="carcateristicas" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}> <div class="icono" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}><img${addAttribute(icono, "src")}${addAttribute(encabezado, "alt")} data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}></div> <div class="conte" data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}> <h3 data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}>${encabezado}</h3> <p data-astro-cid-iocpc6zy${addAttribute($$definedVars, "style")}>${unescapeHTML(texto)}</p> </div> </div> <!-- buscare en globales  --> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Caracteristicas.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <a href="/" data-astro-cid-dmqpwcec><img src="nvita-logo.svg" alt="Nvita invitaciones digitales" id="logo" data-astro-cid-dmqpwcec></a> <ul data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="#bodas" class="selected" data-astro-cid-dmqpwcec>Bodas</a></li> <li data-astro-cid-dmqpwcec><a href="#quince" data-astro-cid-dmqpwcec>XV años</a></li> <li data-astro-cid-dmqpwcec>Cumpleaños</li> <li data-astro-cid-dmqpwcec>Eventos</li> <!-- <li><a href="/xvanos">XV años</a></li>
        <li><a href="/cumples">Cumpleaños</a></li>
        <li><a href="/eventos">Eventos</a></li> --> </ul> </nav> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Nav.astro", void 0);

const cover = new Proxy({"src":"/_astro/invitaciones-digitales-cover-nviteme.c1Dya-TQ.webp","width":1600,"height":1596,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/assets/home/invitaciones-digitales-cover-nviteme.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://www.nvita.me");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { encabezado, description, fondo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="grid contenido" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-bbe6dxrz": true })} <div id="hero" data-astro-cid-bbe6dxrz> <div class="izq anime" data-astro-cid-bbe6dxrz> <div class="bandeja anime" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz> <span id="nvitePalabras" data-astro-cid-bbe6dxrz>nvita</span>ciones <span id="digitales" data-astro-cid-bbe6dxrz>digitales</span> </h1> <p data-astro-cid-bbe6dxrz>${unescapeHTML(description)}</p> ${renderComponent($$result, "Btn", $$Btn, { "liga": "#bodas", "texto": "Invitacion de bodas", "claro": false, "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Btn", $$Btn, { "liga": "#formu", "texto": "Cont\xE1ctanos", "claro": true, "data-astro-cid-bbe6dxrz": true })} </div> </div> <div class="der anime" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Picture", $$Picture, { "src": cover, "alt": "Invitaciones de bodas", "data-astro-cid-bbe6dxrz": true })} </div> </div> </section>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="canonical"', '><link rel="sitemap" href="/sitemap-index.xml"><title>Invitaciones digitales - bodas, 15 a\xF1os, cumplea\xF1os y m\xE1s.</title>', '</head> <!-- Hotjar Tracking Code for Sitio 5048561 (falta el nombre) -->  <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16632688949"><\/script>  <!-- Google Tag Manager -->  <!-- End Google Tag Manager --> <!-- Meta Pixel Code -->  <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1273625593615900&ev=PageView&noscript=1"></noscript> <!-- End Meta Pixel Code --> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRMMJ7K2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> ', " </body>  </html>"])), addAttribute(title, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Invitaciones digitales</p> <a href="https://nvita.me" target="_blank" data-astro-cid-sz7xmlte> <img class="logo" src="/nvita-logo.svg" alt="invitaciones digitales para bodas, quince años y eventos" data-astro-cid-sz7xmlte> </a> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/nvitaciones/" target="_blank" aria-label="Visita y suscribete al instagram de nvite" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" data-astro-cid-sz7xmlte><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-sz7xmlte></path></svg> </a> </li> <li data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/nvitaciones" target="_blank" aria-label="Visita y suscribete al facebook de nvite" data-astro-cid-sz7xmlte> <svg width="24" height="24" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <g clip-path="url(#clip0_10_119)" data-astro-cid-sz7xmlte> <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="black" data-astro-cid-sz7xmlte></path> </g> <defs data-astro-cid-sz7xmlte> <clipPath id="clip0_10_119" data-astro-cid-sz7xmlte> <rect width="24" height="24" fill="white" data-astro-cid-sz7xmlte></rect> </clipPath> </defs> </svg> </a> </li> <li data-astro-cid-sz7xmlte> <a href="https://www.tiktok.com/@www.nvita.me" target="_blank" aria-label="Visita y suscribete al tiktok de nvite" data-astro-cid-sz7xmlte> <svg viewBox="0 0 333335 333336" data-astro-cid-sz7xmlte> <g transform="matrix(1.04763,0,0,1.04763,-5865.43,-4511.92)" data-astro-cid-sz7xmlte> <path d="M322918,48738.3L322918,278056C322918,302103 303394,321626 279347,321626L50029.8,321626C25982.7,321626 6459.5,302103 6459.5,278056L6459.5,48738.3C6459.5,24691.2 25982.7,5168 50029.8,5168L279347,5168C303394,5168 322918,24691.2 322918,48738.3ZM205297,47974.4L205297,47975.7L170541,47974.4L170541,190383C177619,280854 75190.8,247444 104557,191288C109310,182201 117984,177286 133986,174649L133986,136005C65478.1,146916 58600.9,220507 77572.5,251119C106108,297163 205992,290097 205839,197248L205839,126110C225247,137782 241903,144046 260935,142172L260935,104115C228126,102010 209262,81823.2 205297,47974.4Z" data-astro-cid-sz7xmlte></path> </g> </svg> </a> </li> </ul> <small data-astro-cid-sz7xmlte>© 2024 - ${(/* @__PURE__ */ new Date()).getFullYear()} Todos los derechos reservados</small> <br data-astro-cid-sz7xmlte> <a href="https://www.facebook.com/ott8o" target="_blank" data-astro-cid-sz7xmlte> <img src="/otto-logo.svg" alt="otto ui design" id="otto" data-astro-cid-sz7xmlte> </a> </footer> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Footer.astro", void 0);

const $$BannerQuince = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="banner" id="quince" data-astro-cid-s5xlac72> <div class="izq" data-astro-cid-s5xlac72> <img src="quince/quince-banner.webp" alt="Invitaciones de Quince XV años" data-astro-cid-s5xlac72> </div> <div class="der" data-astro-cid-s5xlac72> <div class="bande" data-astro-cid-s5xlac72> <h2 data-astro-cid-s5xlac72><span data-astro-cid-s5xlac72>Próximamente</span> invitaciones de XV años</h2> <p data-astro-cid-s5xlac72>
Estamos trabajando duro para traerte las mejores invitaciones que podemos
      hacerte para tu fiesta de quince años.
</p> </div> </div> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/BannerQuince.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1722444172,"icons":{"flecha-der":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.5\" stroke-width=\"37.27\" d=\"m18.635 18.635 86.916 86.916-86.916 86.916\"/>"},"flecha-izq":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.5\" stroke-width=\"37.27\" d=\"m105.551 192.467-86.916-86.916 86.916-86.916\"/>"},"mapa":{"body":"<path fill=\"#484F8C\" d=\"M25 .625C11.56.625.625 11.56.625 25S11.56 49.375 25 49.375 49.375 38.44 49.375 25 38.44.625 25 .625Zm5.625 30-18.75 7.5 7.5-18.75 18.75-7.5-7.5 18.75Z\"/>","width":50,"height":50},"usuario":{"body":"<path fill=\"#484F8C\" d=\"M37.583 11.525H0v5.763h37.583v-5.763Zm0-11.525H0v5.763h37.583V0ZM23.917 23.05H0v5.763h23.917V23.05ZM60.1 17.086 45.577 29.302l-7.243-6.108-4.818 4.063 12.061 10.2 19.339-16.309-4.818-4.062Z\"/>","width":65,"height":38}},"width":125,"height":212}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://www.nvita.me");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Galeriaslide = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid pantalla-der-especial" data-astro-cid-beb6jkze> <div id="galeriaHome" data-astro-cid-beb6jkze> <div class="izq" data-astro-cid-beb6jkze> <div id="sliderH" data-astro-cid-beb6jkze> ${renderComponent($$result, "Icon", $$Icon, { "name": "usuario", "size": 80, "data-astro-cid-beb6jkze": true })} <h2 data-astro-cid-beb6jkze>Portada de invitación</h2> <p data-astro-cid-beb6jkze>
Tus invitaciones estarán personalizadas con tu nombre y el de tu
          pareja así como con el nombre de tus invitados y sus pases
</p> </div> <div id="control" data-astro-cid-beb6jkze> <a href="#" id="btnIzq" class="btn" data-astro-cid-beb6jkze> ${renderComponent($$result, "Icon", $$Icon, { "name": "flecha-izq", "data-astro-cid-beb6jkze": true })}</a> <a href="#" id="brnDer" class="btn" data-astro-cid-beb6jkze>${renderComponent($$result, "Icon", $$Icon, { "name": "flecha-der", "data-astro-cid-beb6jkze": true })}</a> </div> </div> <div class="der" data-astro-cid-beb6jkze> <div id="sliderI" data-astro-cid-beb6jkze> <div class="ima resaltar" data-astro-cid-beb6jkze> <img src="/homegal/cover.webp" alt="cover invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/musica.webp" alt="musica invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/frase.webp" alt="frase invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/mapa.webp" alt="mapa invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/itinerario.webp" alt="itinerario invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/regalos.webp" alt="regalos invitaciones" data-astro-cid-beb6jkze> </div> <div class="ima" data-astro-cid-beb6jkze> <img src="/homegal/confirmacion.webp" alt="confirmacion invitaciones" data-astro-cid-beb6jkze> </div> </div> </div> </div> </div>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/Galeriaslide.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <Layout title="Invitaciones de bodas, 15 años, fiestas y eventos digitales."> -->${renderComponent($$result, "Layout", $$Layout, { "title": "Invitaciones de bodas, 15 a\xF1os, cumplea\xF1os y eventos digitales, personalizadas, con confirmaci\xF3n de asistencia y faciles de enviar." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "encabezado": "<span>Nvita</span>ciones digitales", "description": "<b>f\xE1ciles de enviar, convenientes </br> y personalizadas</b>, tu mejor opci\xF3n para hacer invitaciones. Adem\xE1s te damos un panel de control con todos tus invitados. ", "fondo": "fondo-cover-nviteme-invitaciones-digitales.webp" })} ${maybeRenderHead()}<div class="grid contenido" id="choro"> <h2>Nuestra experiencia</h2> <p>Somos una pequeña empresa con base en Ixtapa Zihuatanejo con más de 20 años de experiencia en el desarrollo de sitios web en México, Usa y Suiza, quisimos poner todo nuestro conocimiento al servicio de tu evento con <b>invitaciones digitales de alta calidad </b>y confianza.</p> <p> <b>Sabemos lo importante que es para ti ese día y queremos ayudarte a que sea espectacular.</b> </p> </div> <section class="grid contenido"> <div class="cartaBase baseA"> <div class="cartasBaseImagenes"> <div class="bloqueImg"> <img src="/muestra-invitacion-digital-nvite-celular.webp" alt="invitacion digital celular"> </div> <div class="bloqueImg"> <img src="/muestra-invitacion-digital-nvite-escritorio.webp" alt="invitacion digital celular"> </div> </div> <div class="cartaBaseTxt"> <h2>Tu invitación digital en cualquier pantalla</h2> <p>
Diseñadas para verse en celulares o monitores de computadoras, <b>tus invitaciones se verán geniales</b> donde sea que las vean, invitaciones rapidas y con toda la información
          de tu evento.
</p> <p>
Además, podrás usar tus invitaciones también como <b>página web de tu evento</b> </p> </div> </div> <div class="flex"> <div class="cartaBase2"> <h2>Invitaciones personalizadas</h2> <p>
Tu invitados <b>se sentirán especiales al leer sus nombres</b>, cada
          invitación tiene un numero de identificación relacionado con tu
          invitado y los pases que le asignes.
</p> <img id="decor" src="/decoracion-muestra-invitacion-digital-nvite.webp" alt="decoracion invitacion"> <img src="/muestra-invitacion-digital-nvite-personalizada.webp" alt="invitacion personalizada"> </div> <div class="cartaBase2"> <h2>Recibe confirmación de tu invitación</h2> <p>
Sabemos lo importante que es para ti que tus invitados confirmen su
          asistencia, así que <b>podrán confirmarte directamente a tu whatsapp</b> su asitencia y cuantos pases planean usar.
</p> <img src="/muestra-invitacion-digital-nvite-confirmacion-whatsapp.webp" alt="invitacion con confirmación de asistencia"> </div> </div> <!-- carcateristicas --> <div id="conteCaracteristicas"> ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "mapas", "texto": "Tus invitados no se perderan.", "icono": "/ico-nvite-mapa.svg", "fondo": "/fondo-nvite-caracteristicas.png" })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "regalos", "texto": "Sugiere que te gustar\xEDa de regalo.", "icono": "/ico-nvite-regalos.svg", "fondo": "/fondo-nvite-caracteristicas-2.png" })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "detalles", "texto": "Agrega las considerciones de tu evento.", "icono": "/ico-nvite-detalles.svg", "fondo": "fondo-nvite-caracteristicas-3.png" })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "galer\xEDa", "texto": "Agrega hasta 6 fotos.", "icono": "/ico-nvite-fotos.svg", "fondo": "fondo-nvite-caracteristicas-4.png" })} </div> </section> ${renderComponent($$result2, "Galeriaslide", $$Galeriaslide, {})} <div id="bodas" class="grid pantalla-der"> ${renderComponent($$result2, "Banner", $$Banner, {})} </div> <div id="bodas" class="grid pantalla-izq"> ${renderComponent($$result2, "BannerQuince", $$BannerQuince, {})} </div> <section class="grid contenido"> <div id="conteCaracteristicas"> ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "1: contacto", "texto": "Resolvemos tus dudas y te guiamos <b>personalmente en el proceso</b>.", "icono": "/ico-nvite-recibes.svg", "fondo": "/fondo-nvite-caracteristicas.png", "colorBg": "#FFF1E1", ";": true })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "2: pago", "texto": "Paga en <b>  Oxxo o con tu tarjeta bancaria. </b>", "icono": "/ico-nvite-pago.svg", "fondo": "/fondo-nvite-caracteristicas-2.png" })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "3: datos", "texto": "<b>Un dise\xF1ador te cont\xE1cta </b> para iniciar con tu invitaci\xF3n.", "icono": "/ico-nvite-datos.svg", "fondo": "fondo-nvite-caracteristicas-3.png", "colorBg": "#FFF1E1", ";": true })} ${renderComponent($$result2, "Caracteristicas", $$Caracteristicas, { "encabezado": "4: entrega", "texto": "Listos para invitar a familia y amigos.", "icono": "/ico-nvite-entrega.svg", "fondo": "fondo-nvite-caracteristicas-4.png" })} </div> </section> ` })} <section class="grid contenido"> <div class="flex"> <div class="cartaBase2 fondo-formu"> <div class="bande"> <h2>Obtén tu invitación</h2> <p> <b>Contáctanos</b>, para resolver tus dudas o iniciar el proceso para
          que obtengas tu invitación.
</p> <small>Usa el formulario para hablar con nuestra asistente de <b>whatsapp</b></small> </div> <div id="formu"> <form> <!-- <h3>
          <img src="/whatsapp.png" alt="logo whatsapp">
         <b>whatsapp</b></h3> --> <p><b>Aida</b>, nuestra asistente,resolverá tus dudas 😊</p> <label for="nombre">Nombre</label> <input type="text" id="nombre" placeholder="Tu nombre"> <label for="fecha">Fecha del evento</label> <input type="date" name="fecha" id="fecha"> <label for="email">Email</label> <input type="email" name="email" id="email" placeholder="agrega un email valido"> <a href="#" id="empezar" class="desactivado"><img src="/whatsapp.png" alt="logo whatsapp"> Hola <b>Aida</b></a> <!-- <button type="submit" id="empezar" class="desactivado">Empezemos</button> --> </form> </div> </div> <div class="cartaBase2 cartaBase3"> <div class="bande-2"> <h2>¿Qué recibo?</h2> <p>
Además de tus <b>invitaciones personalizadas</b>, *tendrás acceso a un <b>panel de invitados</b> donde podrás copiar las ligas de cada invitado y marcar a los confirmados,
<b>ten mejor control</b> de lo más importante de tu evento, tus invitados.
</p> <small>*No aplica en la versión "basic"</small> ${renderComponent($$result, "Btn", $$Btn, { "liga": "/bodas/panel/plus", "texto": "Ver panel de invitados", "claro": false, "blank": true })} </div> <img src="/nvite-panel-invitados.webp" alt="panel de invitados nvita.me"> </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
