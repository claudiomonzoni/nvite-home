import { a as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DBH30GPw.mjs';
import 'kleur/colors';
import { $ as $$PanelInvitados } from '../../chunks/panelInvitados_C-MCRp18.mjs';
export { renderers } from '../../renderers.mjs';

const $$Registro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Registro de usuario - Panel de administraci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Registrate en Nvita</h1> <form data-authForm action="../api/registro.json"> <label for="email">Email</label> <input type="email" name="email" id="email" placeholder="Agrega un email valido"> <label for="password">Contaseña</label> <input type="password" name="password" id="password" autocomplete="password" placeholder="Agrega una contraseñá segura"> <label for="tipoInvitacion">Tipo Invitacion</label> <select name="tipoInvitacion" id="tipoInvitacion"> <option value="boda">Boda</option> <option value="quince">Xv años</option> <option value="cumples">Cumpleaños</option> </select> <label for="ruta">Ruta</label> <input type="text" name="ruta" placeholder="Agrega una /juanyjuana/"> <button>Registrate</button> </form> <p>Ya tienes cuenta? <a href="/panel/ingresar">Ingresar</a></p> ` })}`;
}, "/mnt/c/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/registro.astro", void 0);

const $$file = "/mnt/c/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/registro.astro";
const $$url = "/panel/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
