import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, g as renderComponent } from '../chunks/astro/server_DBH30GPw.mjs';
import 'kleur/colors';
import { N as NvitaAuth } from '../chunks/config_B1_1FYaz.mjs';
import { $ as $$PanelInvitados } from '../chunks/panelInvitados_DxikxS0j.mjs';
import 'clsx';
import { $ as $$Icon } from '../chunks/Icon_Dh-ZoP-B.mjs';
import { d as db, U as Usuario } from '../chunks/_astro_db_BHQ6WkRG.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.nvita.me");
const $$Invitado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Invitado;
  const { invitadoData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class="invitado"> <h3>${invitadoData.nombre} Id (borrar en prod): ${invitadoData.id}</h3> <p class="info">Mesa: ${invitadoData.mesa} | Pases: ${invitadoData.pases}</p> <li>Whatsapp: ${invitadoData.numeroWhats}</li> <li>Confirmado: ${invitadoData.confirmado}</li> <li>VIP: ${invitadoData.vip}</li> <li>Enviada: ${invitadoData.InvitacionEnviada}</li> <li>No asiste: ${invitadoData.noAsiste}</li> <li>Tipo: ${invitadoData.tipoInvitacion}</li> <button data-edit${addAttribute(invitadoData.id, "data-id")}>editar</button> <button data-delete${addAttribute(invitadoData.id, "data-id")}>borrar</button> </div> </article> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Invitado.astro", void 0);

const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { inputId, checked, titulo, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <input type="checkbox"${addAttribute(checked, "checked")} class=""${addAttribute(`check-${inputId}`, "id")}${spreadAttributes(rest)}> <div aria-hidden="true"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bag", "size": 16 })} </div> <label${addAttribute(`check-${inputId}`, "for")}>${titulo}</label> </div>`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Checkbox.astro", void 0);

const $$Dialog = createComponent(async ($$result, $$props, $$slots) => {
  const usuarioEmail = NvitaAuth.currentUser?.email;
  const usuarios = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
  const usuarioId = usuarios[0].id;
  return renderTemplate`${maybeRenderHead()}<dialog> <div class="formulario"> <form id="agregar-formu"${addAttribute(usuarioId, "data-ref")}> <h2>Agrega un invitado a tu panel</h2> <label for="nombre">Nombre del invitado</label> <input type="text" name="nombre" placeholder="Invitado, familiar o grupal"> <label for="pases">Numero de pases</label> <input type="number" name="pases" placeholder="Asignar numero de pases"> <label for="mesa">Numero de mesa</label> <input type="number" name="mesa" placeholder="Asignar numero de mesa (opcional)"> <label for="whatsapp">Numero de whatsapp</label> <input type="number" name="numeroWhats" placeholder="Donde enviar la invitacion"> <label for="confirmado">¿Ya confirmo sus asistencia?</label> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "confirmado", "titulo": "Confirmado" })} <label for="vip">¿Es invitado importante?</label> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Invitado importante", "name": "vip" })} <label for="InvitacionEnviada">¿Ya envio invitacion?</label> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Enviada", "name": "InvitacionEnviada" })} <label for="noAsiste">Confirmo que no asistirá</label> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "No asistir\xE1", "name": "noAsiste" })} <label for="tipoInvitacion">Tipo de invitación</label> <select name="tipoInvitacion" id="tipoInvitacion"> <option value="Familiar">Familiar</option> <option value="Individual">Individual</option> <option value="Grupal">Grupal</option> </select> <input type="submit" value="Agregar invitación"> </form> </div> <button id="cerrar-dialog">Cerrar</button> </dialog> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Dialog.astro", void 0);

const $$Astro = createAstro("https://www.nvita.me");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const usuario = NvitaAuth.currentUser?.uid;
  const usuarioEmail = NvitaAuth.currentUser?.email;
  const request = await fetch(`${Astro2.url.origin}/api/getInvitados.json`);
  const invitadosData = await request.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Panel de administraci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2> ${usuario && renderTemplate`<p>Bienvenido ${usuarioEmail}</p>`} </h2> <ul> <!-- <Invitado invitadoData={invitadosData[0]} /> --> ${invitadosData.map((invi) => renderTemplate`<li>${renderComponent($$result2, "Invitado", $$Invitado, { "invitadoData": invi })}</li>`)} </ul> <button id="agregar-invitado">Agregar invitado</button> ${renderComponent($$result2, "Dialog", $$Dialog, {})} <li>UI</li> <li>Mostrar invitados, formulario de agregarlos con un icono +</li> <li>Cada invitado con icono de editar y borrar</li> <li>Cada invitado deberá poder confirmar desde la invitacion </li> <li>Cada usurio de invitación podrá tambien editar estatus de confirmación</li> ` })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/pages/panel/index.astro";
const $$url = "/panel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
