import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { $ as $$PanelInvitados } from '../../chunks/panelInvitados_4LcgaSf_.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Ingresar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Ingreso a panel de invitador", "data-astro-cid-mwaobxyy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="ingreso" data-astro-cid-mwaobxyy> <div class="izq" data-astro-cid-mwaobxyy> <div class="bandeja" data-astro-cid-mwaobxyy> <img src="/nvita-logo.svg" alt="Nvita invitaciones digitales" id="logo" data-astro-cid-mwaobxyy> <h1 data-astro-cid-mwaobxyy>Ingresa a tu panel de invitados</h1> <p data-astro-cid-mwaobxyy>Administra, edita y agrega invitados a tu evento.</p> <form data-authForm action="../api/ingresar.json" data-astro-cid-mwaobxyy> <label for="email" data-astro-cid-mwaobxyy>Email
<input type="email" name="email" id="email" placeholder="Agrega un email valido" data-astro-cid-mwaobxyy> </label> <label for="password" data-astro-cid-mwaobxyy>Contaseña
<input type="password" name="password" id="password" autocomplete="password" placeholder="Agrega una contraseñá segura" data-astro-cid-mwaobxyy> </label> <button data-astro-cid-mwaobxyy>Ingresa</button> </form> </div> </div> <div class="der" data-astro-cid-mwaobxyy> <img src="/panel-ingreso.webp" alt="ingresar a panel nvita" data-astro-cid-mwaobxyy> </div> </div> ` })} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/panel/ingresar.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/panel/ingresar.astro";
const $$url = "/panel/ingresar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ingresar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
