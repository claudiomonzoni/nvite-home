import { a as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import { $ as $$PanelInvitados } from '../../chunks/panelInvitados_CVSjLx-P.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Registro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Registro de usuario - Panel de administraci\xF3n", "data-astro-cid-ypwmuq3t": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="ingreso" data-astro-cid-ypwmuq3t> <div class="izq" data-astro-cid-ypwmuq3t> <div class="bandeja" data-astro-cid-ypwmuq3t> <img src="/nvita-logo.svg" alt="Nvita invitaciones digitales" id="logo" data-astro-cid-ypwmuq3t> <h1 data-astro-cid-ypwmuq3t>Registro de clientes</h1> <form data-authForm action="../api/registro.json" data-astro-cid-ypwmuq3t> <label for="email" data-astro-cid-ypwmuq3t>Email</label> <input type="email" name="email" id="email" placeholder="Agrega un email valido" data-astro-cid-ypwmuq3t> <label for="password" data-astro-cid-ypwmuq3t>Contaseña</label> <input type="password" name="password" id="password" autocomplete="password" placeholder="Agrega una contraseñá segura" data-astro-cid-ypwmuq3t> <label for="tipoInvitacion" data-astro-cid-ypwmuq3t>Tipo Invitacion</label> <select name="tipoInvitacion" id="tipoInvitacion" data-astro-cid-ypwmuq3t> <option value="boda" data-astro-cid-ypwmuq3t>Boda</option> <option value="quince" data-astro-cid-ypwmuq3t>Xv años</option> <option value="cumples" data-astro-cid-ypwmuq3t>Cumpleaños</option> </select> <label for="ruta" data-astro-cid-ypwmuq3t>Ruta</label> <input type="text" name="ruta" placeholder="Agrega una /juanyjuana/" data-astro-cid-ypwmuq3t> <button data-astro-cid-ypwmuq3t>Registrate</button> </form> <p data-astro-cid-ypwmuq3t>Ya tienes cuenta? <a href="/panel/ingresar" data-astro-cid-ypwmuq3t>Ingresar</a></p> </div> </div> <div class="der" data-astro-cid-ypwmuq3t> <img src="/panel-ingreso.webp" alt="panel registro de clientes" data-astro-cid-ypwmuq3t> </div> </div> ` })} `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/registro.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/registro.astro";
const $$url = "/panel/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
