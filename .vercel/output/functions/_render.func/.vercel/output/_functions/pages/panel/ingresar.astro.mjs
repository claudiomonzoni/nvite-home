import { a as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DBH30GPw.mjs';
import 'kleur/colors';
import { $ as $$PanelInvitados } from '../../chunks/panelInvitados_DxikxS0j.mjs';
export { renderers } from '../../renderers.mjs';

const $$Ingresar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Ingreso a panel de invitador" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Ingresa a tu panel de invitados</h1> <form data-authForm action="../api/ingresar.json"> <label for="email">Email</label> <input type="email" name="email" id="email" placeholder="Agrega un email valido"> <label for="password">Contaseña</label> <input type="password" name="password" id="password" autocomplete="password" placeholder="Agrega una contraseñá segura"> <button>Ingresa</button> </form> <p>Aún no tienes cuenta? <a href="/panel/registro">Registrate</a></p> ` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/ingresar.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/ingresar.astro";
const $$url = "/panel/ingresar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ingresar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
