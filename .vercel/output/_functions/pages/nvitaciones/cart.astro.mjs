import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, e as addAttribute, b as renderTemplate, h as renderScript } from '../../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { a as getProductPrice, g as getTotalCartItems } from '../../chunks/cart_BIVM58yS.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CB1oRdTX.mjs';
import { $ as $$Btn, a as $$Nav } from '../../chunks/Nav_C5b82xcF.mjs';
/* empty css                                   */
import { $ as $$Layout } from '../../chunks/Layout_CXKQFWHh.mjs';
import { $ as $$Footer } from '../../chunks/Footer_Ahr7FuTG.mjs';
import { $ as $$Icon } from '../../chunks/Icon_DJmXbCaH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$CartItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CartItem;
  const { cartItem } = Astro2.props;
  const { data } = cartItem.product;
  const finalPrice = await getProductPrice(cartItem.product);
  return renderTemplate`${maybeRenderHead()}<li class="cart-item" data-astro-cid-boo3crcm> ${renderComponent($$result, "Image", $$Image, { "src": data.images[0], "alt": data.name, "height": 150, "width": 150, "data-astro-cid-boo3crcm": true })} <div class="cart-item-details" data-astro-cid-boo3crcm> <div class="cart-item-info" data-astro-cid-boo3crcm> <h2 data-astro-cid-boo3crcm>${data.name}</h2> <p class="price" data-astro-cid-boo3crcm>${finalPrice}</p> </div> <div class="cart-button-wrapper" data-astro-cid-boo3crcm> ${renderComponent($$result, "Btn", $$Btn, { "data-cart": true, "data-action": "decrement", "data-productid": data.id, "aria-label": `Remove one ${data.name} from cart`, "liga": "#", "texto": "", "clases": "btn-oscuro", "claro": false, "icono": "mdi:minus", "data-astro-cid-boo3crcm": true })} <p data-quantity${addAttribute(data.id, "data-productId")} class="quantity" data-astro-cid-boo3crcm>${cartItem.quantity}</p> ${renderComponent($$result, "Btn", $$Btn, { "data-cart": true, "data-action": "increment", "data-productid": data.id, "aria-label": `Add one ${data.name} to cart`, "liga": "#", "texto": "", "clases": "btn-oscuro", "claro": false, "icono": "mdi:plus", "data-astro-cid-boo3crcm": true })} </div> </div> </li> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Pagos/CartItem.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  const cartCookie = Astro2.cookies.get("cartItems")?.value;
  const totalCartItems = await getTotalCartItems(
    cartCookie ? JSON.parse(cartCookie) : []
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito de Compras - Nvitaciones", "data-astro-cid-jn275obp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid contenido" data-astro-cid-jn275obp> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-jn275obp": true })} <div class="cart-section" data-astro-cid-jn275obp> <div class="cart-header" data-astro-cid-jn275obp> <h1 data-astro-cid-jn275obp>Tu Carrito</h1> </div> ${totalCartItems.length === 0 && renderTemplate`<div class="empty-cart" data-astro-cid-jn275obp> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:cart-off", "width": "50", "height": "50", "data-astro-cid-jn275obp": true })} <p data-astro-cid-jn275obp>Tu carrito está vacío</p> <a href="/" class="btn primary" data-astro-cid-jn275obp>Explorar Invitaciones</a> </div>`} ${totalCartItems.length > 0 && renderTemplate`<div class="cart-content" data-astro-cid-jn275obp> <ul class="cart-list" data-astro-cid-jn275obp> ${totalCartItems.map((cartItem) => renderTemplate`${renderComponent($$result2, "CartItem", $$CartItem, { "cartItem": cartItem, "data-astro-cid-jn275obp": true })}`)} </ul> <div class="cart-actions" data-astro-cid-jn275obp> <div class="cart-summary" data-astro-cid-jn275obp> <p class="total-items" data-astro-cid-jn275obp>${totalCartItems.length} ${totalCartItems.length === 1 ? "Nvitaci\xF3n" : "Nvitaciones"}</p> </div> <div class="cart-buttons" data-astro-cid-jn275obp> ${renderComponent($$result2, "Btn", $$Btn, { "liga": "#", "texto": "Vaciar carrito", "clases": "btn-oscuro", "claro": false, "blank": false, "icono": "mdi:delete", "id": "delete-cart-btn", "data-astro-cid-jn275obp": true })} ${renderComponent($$result2, "Btn", $$Btn, { "liga": "/nvitaciones/checkout", "texto": "Proceder al pago", "clases": "btn-claro", "claro": false, "blank": false, "icono": "mdi:arrow-right", "data-astro-cid-jn275obp": true })} </div> </div> </div>`} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-jn275obp": true })} ` })}  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/cart.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/cart.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/cart.astro";
const $$url = "/nvitaciones/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
