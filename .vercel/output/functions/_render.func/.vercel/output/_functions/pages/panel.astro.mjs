import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderSlot, u as unescapeHTML, g as renderComponent, F as Fragment } from '../chunks/astro/server_DTIqAvw5.mjs';
import 'kleur/colors';
import { N as NvitaAuth } from '../chunks/config_B1_1FYaz.mjs';
import { $ as $$PanelInvitados } from '../chunks/panelInvitados_CVSjLx-P.mjs';
import { $ as $$Icon } from '../chunks/Icon_02EJuZbd.mjs';
/* empty css                                 */
import 'clsx';
import { d as db, U as Usuario, I as Invitados } from '../chunks/_astro_db_BHQ6WkRG.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://www.nvitaciones.com");
const $$Boton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Boton;
  const { texto, claro, clases, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(clases, "class:list")}${spreadAttributes(rest)} data-astro-cid-jpqhprzd>${renderSlot($$result, $$slots["default"])} ${unescapeHTML(texto)}</button> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/comunes/Boton.astro", void 0);

const $$Astro$2 = createAstro("https://www.nvitaciones.com");
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Menu;
  const { tipo, ruta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-kerefpl2> <ul data-astro-cid-kerefpl2> <a${addAttribute(Astro2.url.origin, "href")} data-astro-cid-kerefpl2><img src="/nvita-logo-panel.svg" alt="nvitaciones" id="logo" data-astro-cid-kerefpl2></a> <li data-astro-cid-kerefpl2>${tipo} de ${ruta}</li> <li data-astro-cid-kerefpl2> <form data-authForm action="../api/salir.json" data-astro-cid-kerefpl2> ${renderComponent($$result, "Boton", $$Boton, { "texto": "Salir", "clases": "btn-claro", "claro": false, "data-astro-cid-kerefpl2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:logout", "size": 20, "data-astro-cid-kerefpl2": true })} ` })} </form> </li> </ul> </nav> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Menu.astro", void 0);

const $$Astro$1 = createAstro("https://www.nvitaciones.com");
const $$Invitado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Invitado;
  const { invitadoData, ruta, tipo } = Astro2.props;
  const urlWA = `${Astro2.url.origin}/${tipo}/${ruta}?id=${invitadoData.id}%26uid=${invitadoData.usuarioId}`;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`${invitadoData.confirmado ? "confirmado" : ""} ${invitadoData.noAsiste ? "NoAsiste" : ""} ${invitadoData.InvitacionEnviada ? "enviada" : ""}`, "class")} data-astro-cid-gylq4iwg> <div class="invitado" data-astro-cid-gylq4iwg> <h2 data-astro-cid-gylq4iwg> ${invitadoData.nombre} </h2> <div class="relevantes" data-astro-cid-gylq4iwg> <ul data-astro-cid-gylq4iwg> ${invitadoData.vip ? renderTemplate`<li class="vip" data-astro-cid-gylq4iwg> ${" "} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:heart", "size": 25, "data-astro-cid-gylq4iwg": true })} Invitación importante
</li>` : ""} <li data-astro-cid-gylq4iwg>Pases asignados: ${invitadoData.pases}</li> ${invitadoData.mesa ? renderTemplate`<li data-astro-cid-gylq4iwg>No. de mesa asignada: ${invitadoData.mesa}</li>` : ""} <li data-astro-cid-gylq4iwg> <button data-edit${addAttribute(invitadoData.id, "data-id")}${addAttribute(invitadoData.usuarioId, "data-uid")} data-astro-cid-gylq4iwg>${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-edit-outline", "size": 20, "data-astro-cid-gylq4iwg": true })}Editar</button> <button data-delete${addAttribute(invitadoData.id, "data-id")} data-astro-cid-gylq4iwg>${renderComponent($$result, "Icon", $$Icon, { "name": "borrar", "size": 20, "data-astro-cid-gylq4iwg": true })}Borrar</button> </li> </ul> </div> <ul id="info" data-astro-cid-gylq4iwg> ${invitadoData.numeroWhats ? renderTemplate`<li data-astro-cid-gylq4iwg> <b data-astro-cid-gylq4iwg>Whatsapp:</b> ${invitadoData.numeroWhats} </li>` : renderTemplate`<li data-astro-cid-gylq4iwg> <b data-astro-cid-gylq4iwg>Agregar</b> numero de Whatsapp
</li>`} ${invitadoData.confirmado ? renderTemplate`<li data-astro-cid-gylq4iwg> <b data-astro-cid-gylq4iwg>Confirmada</b> la asistencia
</li>` : ""} ${invitadoData.noAsiste ? renderTemplate`<li data-astro-cid-gylq4iwg>
Confirmo que <b data-astro-cid-gylq4iwg>no asiste</b> </li>` : ""} ${invitadoData.InvitacionEnviada ? renderTemplate`<li data-astro-cid-gylq4iwg>
Invitacion <b data-astro-cid-gylq4iwg>Enviada</b> </li>` : ""} <li data-astro-cid-gylq4iwg>Invitación <b data-astro-cid-gylq4iwg> ${invitadoData.tipoInvitacion} </b></li> </ul> </div> <div class="control" data-astro-cid-gylq4iwg> ${invitadoData.numeroWhats ? renderTemplate`<a href="#" id="enviarwa"${addAttribute(invitadoData.numeroWhats, "data-wa")}${addAttribute(urlWA, "data-copiarwa")} data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "size": 20, "data-astro-cid-gylq4iwg": true })} Enviar invitación
</a>` : ""} <a href="#" id="copiar"${addAttribute(`${Astro2.url.origin}/${tipo}/${ruta}?id=${invitadoData.id}&uid=${invitadoData.usuarioId}`, "data-copiar")} data-astro-cid-gylq4iwg>${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:content-copy", "size": 20, "data-astro-cid-gylq4iwg": true })} Copiar invitación</a> </div> </article>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Invitado.astro", void 0);

const $$Astro = createAstro("https://www.nvitaciones.com");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { inputId, checked, titulo, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="check" data-astro-cid-hrgqdgu7> <input type="checkbox"${addAttribute(checked, "checked")} class=""${addAttribute(`check-${inputId}`, "id")}${spreadAttributes(rest)} data-astro-cid-hrgqdgu7> <!-- <div aria-hidden="true">
    <Icon name="bag" size={16} />
  </div> --> <label${addAttribute(`check-${inputId}`, "for")} data-astro-cid-hrgqdgu7>${titulo}</label> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/Checkbox.astro", void 0);

const $$AgregarInvitado = createComponent(async ($$result, $$props, $$slots) => {
  const usuarioEmail = NvitaAuth.currentUser?.email;
  const usuarios = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
  const usuarioId = usuarios[0].id;
  usuarios[0].tipo;
  usuarios[0].ruta;
  return renderTemplate`${maybeRenderHead()}<dialog id="agrega-invitado-dialog"${addAttribute(usuarioId, "data-ref")} data-astro-cid-5f75fwlu> <div class="formulario" data-astro-cid-5f75fwlu> <h2 data-astro-cid-5f75fwlu>Agrega un invitado a tu panel</h2> <form id="agregar-formu" data-astro-cid-5f75fwlu> <label for="nombre" data-astro-cid-5f75fwlu>Nombre del invitado
<input type="text" name="nombre" placeholder="Nombre que aparecerá en la invitación" required data-astro-cid-5f75fwlu> </label> <label for="pases" data-astro-cid-5f75fwlu>Numero de pases
<input type="number" name="pases" required placeholder="Asignar numero de pases" data-astro-cid-5f75fwlu> </label> <label for="mesa" data-astro-cid-5f75fwlu>Numero de mesa
<input type="number" name="mesa" placeholder="Asignar numero de mesa (opcional)" data-astro-cid-5f75fwlu> </label> <label for="whatsapp" data-astro-cid-5f75fwlu>Numero de whatsapp
<input type="tel" name="numeroWhats" placeholder="Numero de whatsapp del invitado" data-astro-cid-5f75fwlu> </label> <label for="tipoInvitacion" data-astro-cid-5f75fwlu>Tipo de invitación</label> <select name="tipoInvitacion" id="tipoInvitacion" data-astro-cid-5f75fwlu> <option value="Familiar" data-astro-cid-5f75fwlu>Familiar</option> <option value="Individual" data-astro-cid-5f75fwlu>Individual</option> <option value="Grupal" data-astro-cid-5f75fwlu>Grupal</option> </select> <div id="check" data-astro-cid-5f75fwlu> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "confirmado", "titulo": "Ya confirmo su asistencia", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "vip", "titulo": "Invitado importante", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "InvitacionEnviada", "titulo": "Invitaci\xF3n enviada", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "noAsiste", "titulo": "No asistir\xE1", "data-astro-cid-5f75fwlu": true })} </div> <input type="submit" value="Agregar invitación" data-astro-cid-5f75fwlu> </form> </div> <a href="#" id="cerrar-dialog" data-astro-cid-5f75fwlu>X</a> </dialog>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/AgregarInvitado.astro", void 0);

const $$EditarInvitado = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<dialog id="editar-invitado-dialog" data-astro-cid-lcr66qxt> <div class="formulario" data-astro-cid-lcr66qxt> <form id="editar-formu" data-astro-cid-lcr66qxt> <h2 data-astro-cid-lcr66qxt>Edita al invitado</h2> <label for="nombre" data-astro-cid-lcr66qxt>Nombre del invitado</label> <input type="text" name="nombre" required placeholder="Nombre que aparecerá en la invitación" data-astro-cid-lcr66qxt> <label for="pases" data-astro-cid-lcr66qxt>Numero de pases</label> <input type="number" name="pases" required placeholder="Asignar numero de pases" data-astro-cid-lcr66qxt> <label for="mesa" data-astro-cid-lcr66qxt>Numero de mesa</label> <input type="number" name="mesa" placeholder="Asignar numero de mesa (opcional)" data-astro-cid-lcr66qxt> <label for="whatsapp" data-astro-cid-lcr66qxt>Numero de whatsapp</label> <input type="tel" name="numeroWhats" placeholder="Numero de whatsapp del invitado" data-astro-cid-lcr66qxt> <label for="tipoInvitacion" data-astro-cid-lcr66qxt>Tipo de invitación</label> <select name="tipoInvitacion" id="tipoInvitacion" data-astro-cid-lcr66qxt> <option value="Familiar" data-astro-cid-lcr66qxt>Familiar</option> <option value="Individual" data-astro-cid-lcr66qxt>Individual</option> <option value="Grupal" data-astro-cid-lcr66qxt>Grupal</option> </select> <div class="check" data-astro-cid-lcr66qxt> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "confirmado", "titulo": "\xBFYa confirmo sus asistencia?", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Invitado importante", "name": "vip", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Invitaci\xF3n enviada", "name": "InvitacionEnviada", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "No asistir\xE1", "name": "noAsiste", "data-astro-cid-lcr66qxt": true })} </div> <input type="submit" value="Editar invitado" data-astro-cid-lcr66qxt> </form> </div> <a href="#" id="cerrar-dialog-editar" data-astro-cid-lcr66qxt>X</a> </dialog>  `;
}, "C:/Users/claud/OneDrive/Escritorio/nvita/nvite-home/src/components/PanelInvitados/EditarInvitado.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const usuarioEmail = NvitaAuth.currentUser?.email;
  if (!usuarioEmail) {
    console.error("El usuario no est\xE1 autenticado.");
    throw new Error("Usuario no autenticado. Por favor, inicia sesi\xF3n.");
  }
  let invitadosData = null;
  let tipoInvitacion = null;
  let ruta = null;
  try {
    const usuarios = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
    if (usuarios.length === 0) {
      throw new Error(`No se encontr\xF3 un usuario con el email: ${usuarioEmail}`);
    }
    tipoInvitacion = usuarios[0].tipo;
    ruta = usuarios[0].ruta;
    invitadosData = await db.select().from(Invitados).where(eq(Invitados.usuarioId, usuarios[0].id));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    invitadosData = null;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Panel de administraci\xF3n", "data-astro-cid-fr7lkljg": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "tipo": tipoInvitacion, "ruta": ruta, "data-astro-cid-fr7lkljg": true })} ${maybeRenderHead()}<section class="grid contenido" data-astro-cid-fr7lkljg> <div id="hero" data-astro-cid-fr7lkljg> <h1 data-astro-cid-fr7lkljg>Invitaciones</h1> <ul data-astro-cid-fr7lkljg> <li data-astro-cid-fr7lkljg>Invitación <b class="enviada" data-astro-cid-fr7lkljg>Enviada</b></li> <li data-astro-cid-fr7lkljg>Asistencia <b class="confirmado" data-astro-cid-fr7lkljg>Confirmada</b></li> <li data-astro-cid-fr7lkljg>Confirmación de <b class="NoAsiste" data-astro-cid-fr7lkljg>No asistencia</b></li> </ul> </div> <ul data-astro-cid-fr7lkljg> ${invitadosData === null ? renderTemplate`<h2 data-astro-cid-fr7lkljg>Error al cargar los datos. Intente de nuevo más tarde.</h2>` : invitadosData.length > 0 ? invitadosData.map((invitado) => renderTemplate`<li data-astro-cid-fr7lkljg> ${renderComponent($$result2, "Invitado", $$Invitado, { "invitadoData": invitado, "ruta": ruta, "tipo": tipoInvitacion, "data-astro-cid-fr7lkljg": true })} </li>`) : renderTemplate`<p data-astro-cid-fr7lkljg>No tienes invitados aún. Usa el botón de abajo para agregar uno.</p>`} </ul> ${invitadosData !== null && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fr7lkljg": true }, { "default": ($$result3) => renderTemplate` <button id="agregar-invitado" data-astro-cid-fr7lkljg> ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:account-plus-outline", "size": 25, "data-astro-cid-fr7lkljg": true })} Agregar invitado
</button> ${renderComponent($$result3, "AgregarInvitado", $$AgregarInvitado, { "data-astro-cid-fr7lkljg": true })} ${renderComponent($$result3, "EditarInvitado", $$EditarInvitado, { "data-astro-cid-fr7lkljg": true })} ` })}`} </section> ` })} `;
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
