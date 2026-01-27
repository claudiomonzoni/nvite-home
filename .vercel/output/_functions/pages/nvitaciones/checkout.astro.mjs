import { c as createAstro, a as createComponent, r as renderComponent, h as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CXKQFWHh.mjs';
import { g as getTotalCartItems } from '../../chunks/cart_BIVM58yS.mjs';
import Stripe from 'stripe';
import { a as $$Nav } from '../../chunks/Nav_C5b82xcF.mjs';
import { $ as $$Footer } from '../../chunks/Footer_Ahr7FuTG.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://nvitaciones.com");
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const PUBLIC_STRIPE_KEY = "pk_live_51PDuDtBMuPTZvmW8AAUpaDk7o1ScXSQFLfnXliApYZGnDbmZVTWBngHTlGUByIhmyVCLORVl1ZOhDHDuSS2v2G5P00Os88zbBv";
  const stripe = new Stripe("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");
  const { origin } = Astro2.url;
  const cartCookies = Astro2.cookies.get("cartItems")?.value;
  const totalCartItems = await getTotalCartItems(
    cartCookies ? JSON.parse(cartCookies) : []
  );
  if (totalCartItems.length === 0) {
    return Astro2.redirect("/");
  }
  const lineItems = totalCartItems.map((item) => ({
    price: item.product.data.default_price,
    quantity: item.quantity
  }));
  const checkoutSession = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    mode: "payment",
    allow_promotion_codes: true,
    line_items: lineItems,
    return_url: `${origin}/nvitaciones/success?session_id={CHECKOUT_SESSION_ID}`
    // automatic_tax: { enabled: true },
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout - Nvitaciones", "data-astro-cid-2qg4csh4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid contenido" data-astro-cid-2qg4csh4> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-2qg4csh4": true })} <div class="checkout-section" data-astro-cid-2qg4csh4> <div class="checkout-header" data-astro-cid-2qg4csh4> <h2 data-astro-cid-2qg4csh4>Comprar ahora</h2> </div> <div class="checkout-wrapper" data-astro-cid-2qg4csh4> <div id="loading" class="loading-container" data-astro-cid-2qg4csh4> <div class="spinner" data-astro-cid-2qg4csh4></div> <p data-astro-cid-2qg4csh4>Cargando checkout...</p> </div> <div id="error-message" class="error-message" style="display: none;" data-astro-cid-2qg4csh4> <p data-astro-cid-2qg4csh4>Hubo un error al cargar el checkout. Por favor, intenta de nuevo.</p> <a href="/cart" class="button" data-astro-cid-2qg4csh4>Volver al carrito</a> </div> <div id="checkout" class="checkout-container"${addAttribute(PUBLIC_STRIPE_KEY, "data-stripe-key")}${addAttribute(checkoutSession.client_secret, "data-client-secret")} data-astro-cid-2qg4csh4></div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2qg4csh4": true })} ` })}  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/checkout.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/checkout.astro", void 0);
const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/checkout.astro";
const $$url = "/nvitaciones/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
