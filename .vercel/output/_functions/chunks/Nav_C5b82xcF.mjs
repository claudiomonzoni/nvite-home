import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, g as renderSlot, u as unescapeHTML, r as renderComponent, b as renderTemplate, h as renderScript, F as Fragment } from './astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DJmXbCaH.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Btn;
  const { liga, texto, claro, blank, clases, rel, icono, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(liga, "href")}${addAttribute(clases, "class:list")}${addAttribute(blank ? "_blank" : "", "target")}${spreadAttributes(rest)}${addAttribute(rel, "rel")} data-astro-cid-5dcumwjq>${icono ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icono, "size": 25, "data-astro-cid-5dcumwjq": true })}` : ""} ${renderSlot($$result, $$slots["default"])} ${unescapeHTML(texto)}</a> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Btn.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nav;
  const url = Astro2.url.pathname;
  let cartItemsCount = 0;
  if (Astro2.cookies.has("cartItems")) {
    const cookie = Astro2.cookies.get("cartItems")?.value;
    cartItemsCount = JSON.parse(cookie).length;
  }
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" data-astro-cid-dmqpwcec> <div class="grid contenido" data-astro-cid-dmqpwcec> <div class="nav-content" data-astro-cid-dmqpwcec> <a href="/" class="logo-container" data-astro-cid-dmqpwcec> <img src="/nvita-logo.svg" alt="Nvita invitaciones digitales" id="logo" data-astro-cid-dmqpwcec> </a> <div class="menu-items" data-astro-cid-dmqpwcec> <ul data-astro-cid-dmqpwcec> ${url === "/terminos-condiciones" ? renderTemplate`<li data-astro-cid-dmqpwcec> <a href="/" class="selected" data-astro-cid-dmqpwcec>
Regresar
</a> </li>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate` <li data-astro-cid-dmqpwcec> <a href="/bodas"${addAttribute(url == "/bodas/" ? "selected" : "none", "class")} data-astro-cid-dmqpwcec>
Bodas
</a> </li> <li data-astro-cid-dmqpwcec> <a href="/invitaciones-quince"${addAttribute(url == "/invitaciones-quince/" ? "selected" : "none", "class")} data-astro-cid-dmqpwcec>
XV años
</a> </li> ${url === "/" ? renderTemplate`<li data-astro-cid-dmqpwcec> <a href="#faq" data-astro-cid-dmqpwcec>FAQ</a> </li>` : ""}<li data-astro-cid-dmqpwcec> ${renderComponent($$result2, "Btn", $$Btn, { "liga": "https://wa.link/kex8vd", "texto": "755113 2468", "clases": "btn-whatsapp panel-home", "claro": false, "blank": true, "rel": "nofollow", "data-astro-cid-dmqpwcec": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "whatsapp", "size": 22, "data-astro-cid-dmqpwcec": true })} ` })} </li> ` })}`} </ul> </div> <li id="carrito" data-astro-cid-dmqpwcec> <a href="/nvitaciones/cart" aria-label="Ir al carrito" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Icon", $$Icon, { "name": "solar:cart-large-minimalistic-outline", "width": "32", "height": "32", "data-astro-cid-dmqpwcec": true })} <span id="cart-count"${addAttribute(["count", [{ hidden: cartItemsCount === 0 }]], "class:list")} data-astro-cid-dmqpwcec> ${cartItemsCount > 0 ? cartItemsCount : ""} </span> </a> </li> </div> </div> </nav>  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Nav.astro", void 0);

export { $$Btn as $, $$Nav as a };
