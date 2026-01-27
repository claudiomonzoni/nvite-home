import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, F as Fragment } from '../../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CXKQFWHh.mjs';
import Stripe from 'stripe';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://nvitaciones.com");
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const sessionId = Astro2.url.searchParams.get("session_id");
  if (!sessionId) {
    return Astro2.redirect("/");
  }
  const stripe = new Stripe("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");
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items.data.price.product"]
  });
  if (!session || !session.customer_details) {
    return Astro2.redirect("/");
  }
  const { name, email } = session.customer_details;
  const productos = session.line_items.data.map((item) => item.price.product);
  const productosUnicos = Object.values(
    Object.fromEntries(
      productos.map((p) => {
        const product = p;
        return [product.id, product];
      })
    )
  );
  Astro2.cookies.delete("cartItems");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "¡Compra Exitosa! - Nvitaciones", "data-astro-cid-a2qegojj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="success-container" data-astro-cid-a2qegojj> <div class="success-card" data-astro-cid-a2qegojj> <img src="/nvita-logo.svg" alt="gracias por tu compra" class="logo" data-astro-cid-a2qegojj> <h2 data-astro-cid-a2qegojj>¡Gracias por tu compra, ${name}!</h2> <p class="cart-info chirris" data-astro-cid-a2qegojj>
Tu numero de compra es: ${session.metadata.reservation_number} </p> <p class="cart-info chirris" data-astro-cid-a2qegojj>
Por favor, guarda tu numero de compra para futuras consultas
</p> <p data-astro-cid-a2qegojj>Hemos enviado el recibo a ${email}</p> <h3 data-astro-cid-a2qegojj>Siguiente paso</h3> <p class="cart-info" data-astro-cid-a2qegojj> <b data-astro-cid-a2qegojj>Completa el formulario</b> de datos de tu evento para que podamos
        personalizar tu Nvitación.
</p> ${productosUnicos.map(
    (producto) => typeof producto === "object" && producto !== null && "metadata" in producto && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-a2qegojj": true }, { "default": async ($$result3) => renderTemplate`${producto.metadata?.Tipo?.toLowerCase() === "web" && renderTemplate`<p data-astro-cid-a2qegojj><b data-astro-cid-a2qegojj>Formulario Nvitaciones Web:</b> https://tally.so/r/nGBDOZ</p>`}${producto.metadata?.Tipo?.toLowerCase() === "pdf" && renderTemplate`<p data-astro-cid-a2qegojj><b data-astro-cid-a2qegojj>Formulario Nvitaciones PDF:</b> https://tally.so/r/mK2OyA</p>`}` })}`
  )} <p class="chirris" data-astro-cid-a2qegojj> <b data-astro-cid-a2qegojj>Tip:</b> guarda el enlace del formulario en tus favoritos para acceder fácilmente.
</p> <p class="chirris borde" data-astro-cid-a2qegojj> <b data-astro-cid-a2qegojj>Nota:</b> Si pagaste por medio de OXXO, tu pago se reflejará en un plazo de 24 a 48 horas y el establecimiento aplica un cargo de servicio.
</p> <p class="cart-info" data-astro-cid-a2qegojj>
Cualquier duda, puedes contactarnos por WhatsApp al número
<a href="https://wa.me/+527551132468" target="_blank" data-astro-cid-a2qegojj><b data-astro-cid-a2qegojj>755.1132.468</b></a> </p> <br data-astro-cid-a2qegojj> <a href="/" class="success-btn" data-astro-cid-a2qegojj>Volver al inicio</a> </div> </div> ` })} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/success.astro", void 0);
const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/nvitaciones/success.astro";
const $$url = "/nvitaciones/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
