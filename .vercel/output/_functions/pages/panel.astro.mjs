import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate, h as renderScript, s as spreadAttributes, F as Fragment } from '../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { N as NvitaAuth } from '../chunks/config_B1_1FYaz.mjs';
import { $ as $$PanelInvitados } from '../chunks/panelInvitados_4LcgaSf_.mjs';
import { $ as $$Icon } from '../chunks/Icon_DJmXbCaH.mjs';
/* empty css                                 */
import 'clsx';
import { d as db, U as Usuario, I as Invitados } from '../chunks/_astro_db_evviQCJ5.mjs';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://nvitaciones.com");
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Menu;
  const { tipo, ruta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-kerefpl2> <ul data-astro-cid-kerefpl2> <a${addAttribute(Astro2.url.origin, "href")} data-astro-cid-kerefpl2><img src="/nvita-logo-panel.svg" alt="nvitaciones" id="logo" data-astro-cid-kerefpl2></a> <li data-astro-cid-kerefpl2>${tipo} de ${ruta}</li> <li data-astro-cid-kerefpl2> <form data-authForm action="../api/salir.json" method="POST" data-astro-cid-kerefpl2> <button type="submit" class="btn-claro" data-astro-cid-kerefpl2> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:logout", "size": 20, "data-astro-cid-kerefpl2": true })} Salir
</button> </form> </li> </ul> </nav> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/Menu.astro", void 0);

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$Invitado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Invitado;
  const { invitadoData, ruta, tipo } = Astro2.props;
  const urlWA = `${Astro2.url.origin}/${tipo}/${ruta}?id=${invitadoData.id}%26uid=${invitadoData.usuarioId}`;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`invitado-card ${invitadoData.confirmado ? "confirmado" : ""} ${invitadoData.noAsiste ? "NoAsiste" : ""} ${invitadoData.InvitacionEnviada ? "enviada" : ""}`, "class")} data-astro-cid-gylq4iwg> <div class="status-indicator" data-astro-cid-gylq4iwg> ${invitadoData.confirmado ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:check-circle", "size": 24, "title": "Confirmado", "data-astro-cid-gylq4iwg": true })}` : invitadoData.noAsiste ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:calendar-remove", "size": 24, "title": "No asiste", "data-astro-cid-gylq4iwg": true })}` : invitadoData.InvitacionEnviada ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:send", "size": 24, "title": "Invitaci\xF3n enviada", "data-astro-cid-gylq4iwg": true })}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:send-outline", "size": 24, "title": "Invitaci\xF3n no enviada", "data-astro-cid-gylq4iwg": true })}`} </div> <div class="invitado-header" data-astro-cid-gylq4iwg> <h2 data-astro-cid-gylq4iwg> ${invitadoData.nombre} ${invitadoData.vip && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:crown", "size": 20, "class": "vip-icon", "title": "Invitado VIP", "data-astro-cid-gylq4iwg": true })}`} </h2> </div> <div class="invitado-content" data-astro-cid-gylq4iwg> <div class="info-section" data-astro-cid-gylq4iwg> <div class="info-primary" data-astro-cid-gylq4iwg> <p class="info-item" data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:ticket", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>${Math.round(parseFloat(invitadoData.pases))} pases</span> </p> ${invitadoData.mesa && renderTemplate`<p class="info-item" data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:table-furniture", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>Mesa ${invitadoData.mesa}</span> </p>`} </div> <div class="status-section" data-astro-cid-gylq4iwg> ${invitadoData.numeroWhats ? renderTemplate`<p class="info-item" data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>${invitadoData.numeroWhats}</span> </p>` : renderTemplate`<p class="info-item warning" data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>Sin WhatsApp</span> </p>`} <div class="status-indicators" data-astro-cid-gylq4iwg> ${invitadoData.confirmado && renderTemplate`<span class="status-tag confirmed" data-astro-cid-gylq4iwg>Confirmado</span>`} ${invitadoData.noAsiste && renderTemplate`<span class="status-tag no-asiste" data-astro-cid-gylq4iwg>No asiste</span>`} ${invitadoData.InvitacionEnviada && renderTemplate`<span class="status-tag sent" data-astro-cid-gylq4iwg>Enviada</span>`} <span class="status-tag type" data-astro-cid-gylq4iwg>${invitadoData.tipoInvitacion}</span> </div> </div> </div> <div class="actions-section" data-astro-cid-gylq4iwg> <div class="edit-actions" data-astro-cid-gylq4iwg> <button class="btn-icon" data-edit${addAttribute(invitadoData.uuid, "data-id")}${addAttribute(invitadoData.usuarioId, "data-uid")} data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:account-edit-outline", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>Editar</span> </button> <button class="btn-icon delete" data-delete${addAttribute(invitadoData.uuid, "data-id")} data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "borrar", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>Borrar</span> </button> </div> <div class="share-actions" data-astro-cid-gylq4iwg> ${invitadoData.numeroWhats && renderTemplate`<a href="#" class="btn-action whatsapp" id="enviarwa"${addAttribute(invitadoData.numeroWhats, "data-wa")}${addAttribute(urlWA, "data-copiarwa")} data-astro-cid-gylq4iwg> <span data-astro-cid-gylq4iwg>Enviar: </span> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:whatsapp", "size": 20, "data-astro-cid-gylq4iwg": true })} </a>`} <a href="#" class="btn-action copy" id="copiar"${addAttribute(`${Astro2.url.origin}/${tipo}/${ruta}?id=${invitadoData.uuid}&uid=${invitadoData.usuarioId}`, "data-copiar")} data-astro-cid-gylq4iwg> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:content-copy", "size": 20, "data-astro-cid-gylq4iwg": true })} <span data-astro-cid-gylq4iwg>Copiar enlace</span> </a> </div> </div> </div> </article> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/Invitado.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/Invitado.astro", void 0);

const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { inputId, checked, titulo, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="check" data-astro-cid-hrgqdgu7> <input type="checkbox"${addAttribute(checked, "checked")} class=""${addAttribute(`check-${inputId}`, "id")}${spreadAttributes(rest)} data-astro-cid-hrgqdgu7> <!-- <div aria-hidden="true">
    <Icon name="bag" size={16} />
  </div> --> <label${addAttribute(`check-${inputId}`, "for")} data-astro-cid-hrgqdgu7>${titulo}</label> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/Checkbox.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$AgregarInvitado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AgregarInvitado;
  const usuarioEmail = NvitaAuth.currentUser?.email;
  await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
  const { usuarioId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog id="agrega-invitado-dialog"${addAttribute(usuarioId, "data-ref")} data-astro-cid-5f75fwlu> <div class="formulario" data-astro-cid-5f75fwlu> <h2 data-astro-cid-5f75fwlu>Agregar invitado</h2> <form id="agregar-formu" data-astro-cid-5f75fwlu> <label for="nombre" data-astro-cid-5f75fwlu>Nombre del invitado
<input type="text" name="nombre" placeholder="Nombre que aparecerá en la invitación" required data-astro-cid-5f75fwlu> </label> <label for="pases" data-astro-cid-5f75fwlu>Numero de pases
<input type="number" name="pases" required placeholder="Asignar numero de pases" data-astro-cid-5f75fwlu> </label> <label for="mesa" data-astro-cid-5f75fwlu>Numero de mesa
<input type="number" name="mesa" placeholder="Asignar numero de mesa (opcional)" data-astro-cid-5f75fwlu> </label> <label for="whatsapp" data-astro-cid-5f75fwlu>Numero de whatsapp
<input type="tel" name="numeroWhats" placeholder="Numero de whatsapp del invitado" data-astro-cid-5f75fwlu> </label> <label for="tipoInvitacion" data-astro-cid-5f75fwlu>Tipo de invitación</label> <select name="tipoInvitacion" id="tipoInvitacion" data-astro-cid-5f75fwlu> <option value="Familiar" data-astro-cid-5f75fwlu>Familiar</option> <option value="Individual" data-astro-cid-5f75fwlu>Individual</option> <option value="Grupal" data-astro-cid-5f75fwlu>Grupal</option> </select> <div id="check" data-astro-cid-5f75fwlu> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "confirmado", "titulo": "Ya confirmo su asistencia", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "vip", "titulo": "Invitado importante", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "InvitacionEnviada", "titulo": "Invitaci\xF3n enviada", "data-astro-cid-5f75fwlu": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "noAsiste", "titulo": "No asistir\xE1", "data-astro-cid-5f75fwlu": true })} </div> <div id="mensaje-vip-container" class="mensaje-vip-container" style="display: none;" data-astro-cid-5f75fwlu> <label for="mensajePersonalizado" data-astro-cid-5f75fwlu>Mensaje personalizado para invitado VIP</label> <textarea name="mensajePersonalizado" placeholder="Escribe un mensaje especial para este invitado VIP" rows="3" data-astro-cid-5f75fwlu></textarea> </div> <input type="submit" value="Agregar invitación" data-astro-cid-5f75fwlu> </form> </div> <a href="#" id="cerrar-dialog" data-astro-cid-5f75fwlu>X</a> </dialog> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/AgregarInvitado.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/AgregarInvitado.astro", void 0);

const $$EditarInvitado = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<dialog id="editar-invitado-dialog" data-astro-cid-lcr66qxt> <div class="formulario" data-astro-cid-lcr66qxt> <h2 data-astro-cid-lcr66qxt>Editar invitado</h2> <form id="editar-formu" data-astro-cid-lcr66qxt> <label for="nombre" data-astro-cid-lcr66qxt>
Nombre del invitado
<input type="text" name="nombre" required placeholder="Nombre que aparecerá en la invitación" data-astro-cid-lcr66qxt> </label> <label for="pases" data-astro-cid-lcr66qxt>
Número de pases
<input type="number" name="pases" required placeholder="Asignar numero de pases" data-astro-cid-lcr66qxt> </label> <label for="mesa" data-astro-cid-lcr66qxt>
Número de mesa
<input type="number" name="mesa" placeholder="Asignar numero de mesa (opcional)" data-astro-cid-lcr66qxt> </label> <label for="whatsapp" data-astro-cid-lcr66qxt>
Número de WhatsApp
<input type="tel" name="numeroWhats" placeholder="Numero de whatsapp del invitado" data-astro-cid-lcr66qxt> </label> <label for="tipoInvitacion" data-astro-cid-lcr66qxt>Tipo de invitación</label> <select name="tipoInvitacion" id="tipoInvitacion" data-astro-cid-lcr66qxt> <option value="Familiar" data-astro-cid-lcr66qxt>Familiar</option> <option value="Individual" data-astro-cid-lcr66qxt>Individual</option> <option value="Grupal" data-astro-cid-lcr66qxt>Grupal</option> </select> <div class="check" data-astro-cid-lcr66qxt> ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "name": "confirmado", "titulo": "\xBFYa confirmo sus asistencia?", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Invitado importante", "name": "vip", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "Invitaci\xF3n enviada", "name": "InvitacionEnviada", "data-astro-cid-lcr66qxt": true })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "checked": false, "inputId": Math.random(), "titulo": "No asistir\xE1", "name": "noAsiste", "data-astro-cid-lcr66qxt": true })} </div> <div id="mensaje-vip-container" class="mensaje-vip-container" style="display: none;" data-astro-cid-lcr66qxt> <label for="mensajePersonalizado" data-astro-cid-lcr66qxt>Mensaje personalizado para invitado VIP</label> <textarea name="mensajePersonalizado" placeholder="Escribe un mensaje especial para este invitado VIP" rows="3" data-astro-cid-lcr66qxt></textarea> </div> <input type="submit" value="Editar invitado" data-astro-cid-lcr66qxt> </form> </div> <a href="#" id="cerrar-dialog-editar" data-astro-cid-lcr66qxt>X</a> </dialog>  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/EditarInvitado.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/PanelInvitados/EditarInvitado.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  if (!NvitaAuth.currentUser) {
    alert("No est\xE1s autenticado. Por favor, inicia sesi\xF3n.");
    throw new Error("Usuario no autenticado. Por favor, inicia sesi\xF3n.");
  }
  const usuarioEmail = NvitaAuth.currentUser.email;
  if (!usuarioEmail) {
    console.error("El usuario no est\xE1 autenticado.");
    throw new Error("Usuario no autenticado. Por favor, inicia sesi\xF3n.");
  }
  let invitadosData = [];
  let tipoInvitacion = null;
  let ruta = null;
  try {
    var usuarios = await db.select().from(Usuario).where(eq(Usuario.email, usuarioEmail));
    if (usuarios.length === 0) {
      throw new Error(`No se encontr\xF3 un usuario con el email: ${usuarioEmail}`);
    }
    tipoInvitacion = usuarios[0].tipo;
    ruta = usuarios[0].ruta;
    invitadosData = await db.select().from(Invitados).where(eq(Invitados.usuarioId, usuarios[0].id)).orderBy(desc(Invitados.id));
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    invitadosData = [];
  }
  const usuarioId = usuarios[0].id;
  return renderTemplate`${renderComponent($$result, "Layout", $$PanelInvitados, { "title": "Panel de administraci\xF3n", "data-astro-cid-fr7lkljg": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Menu", $$Menu, { "tipo": tipoInvitacion, "ruta": ruta, "data-astro-cid-fr7lkljg": true })} ${maybeRenderHead()}<section class="grid contenido" data-astro-cid-fr7lkljg> <div id="hero" data-astro-cid-fr7lkljg> <div class="barra-progreso-container" data-astro-cid-fr7lkljg> <h3 data-astro-cid-fr7lkljg>Progreso de confirmaciones de tu Nvitacion</h3> <div class="barra-progreso" data-astro-cid-fr7lkljg> <div class="barra"${addAttribute(`--progress: ${invitadosData.length > 0 ? Math.round(
    invitadosData.filter(
      (inv) => inv.confirmado && !inv.noAsiste
    ).length / invitadosData.length * 100
  ) : 0}%`, "style")} data-astro-cid-fr7lkljg></div> </div> <p class="porcentaje-texto" data-astro-cid-fr7lkljg> <span class="porcentaje" data-astro-cid-fr7lkljg>${invitadosData.length > 0 ? Math.round(
    invitadosData.filter(
      (inv) => inv.confirmado && !inv.noAsiste
    ).length / invitadosData.length * 100
  ) : 0}%</span> de Nvitaciones confirmadas,
<span class="confirmados" data-astro-cid-fr7lkljg>${invitadosData.reduce(
    (sum, inv) => inv.confirmado && !inv.noAsiste ? sum + parseInt(inv.pases || "0") : sum,
    0
  )}</span> pases confirmados,
<span class="pendientes" data-astro-cid-fr7lkljg>${invitadosData.reduce(
    (sum, inv) => !inv.confirmado ? sum + parseInt(inv.pases || "0") : sum,
    0
  )}</span> pases por confirmar
</p> </div> <div class="estadisticas" data-astro-cid-fr7lkljg> <div class="stat-item" data-astro-cid-fr7lkljg> <span class="stat-numero" data-astro-cid-fr7lkljg>${invitadosData.length}</span> <span class="stat-label" data-astro-cid-fr7lkljg>Total de invitaciones</span> </div> <div class="stat-item" data-astro-cid-fr7lkljg> <span class="stat-numero" data-astro-cid-fr7lkljg> ${invitadosData.reduce((sum, inv) => {
    const pases = Math.round(parseFloat(inv.pases || "0"));
    return sum + (inv.noAsiste ? 0 : pases);
  }, 0)} </span> <span class="stat-label" data-astro-cid-fr7lkljg>Total de pases asignados</span> </div> <div class="stat-item" data-astro-cid-fr7lkljg> <span class="stat-numero" data-astro-cid-fr7lkljg>${invitadosData.filter((inv) => inv.confirmado).length}</span> <span class="stat-label" data-astro-cid-fr7lkljg>Invitaciones confirmadas</span> </div> <div class="stat-item" data-astro-cid-fr7lkljg> <span class="stat-numero" data-astro-cid-fr7lkljg>${invitadosData.filter((inv) => inv.noAsiste).length}</span> <span class="stat-label" data-astro-cid-fr7lkljg>No asisten</span> </div> <div class="stat-item" data-astro-cid-fr7lkljg> <span class="stat-numero" data-astro-cid-fr7lkljg>${invitadosData.filter((inv) => inv.InvitacionEnviada).length}</span> <span class="stat-label" data-astro-cid-fr7lkljg>Invitaciones enviadas</span> </div> </div> <div class="conteFiltros" data-astro-cid-fr7lkljg> <input id="search-input" type="text" placeholder="Buscar invitado por nombre..." class="buscador" data-astro-cid-fr7lkljg> <div class="filtros" data-astro-cid-fr7lkljg> <div class="filtros-estado" data-astro-cid-fr7lkljg> <button class="filtro-btn activo" data-estado="todos" data-astro-cid-fr7lkljg>Todos</button> <button class="filtro-btn" data-estado="enviada" data-astro-cid-fr7lkljg>Enviada</button> <button class="filtro-btn" data-estado="confirmado" data-astro-cid-fr7lkljg>Confirmada</button> <button class="filtro-btn" data-estado="NoAsiste" data-astro-cid-fr7lkljg>No asiste</button> <button class="filtro-btn" data-estado="noEnviada" data-astro-cid-fr7lkljg>Falta por enviar</button> </div> </div> </div> </div> <ul id="invitados-list" data-astro-cid-fr7lkljg> ${invitadosData.length > 0 ? invitadosData.map((invitado) => renderTemplate`<li class="invitado-item"${addAttribute(invitado.nombre.toLowerCase(), "data-nombre")}${addAttribute(
    invitado.confirmado ? "confirmado" : invitado.noAsiste ? "NoAsiste" : invitado.InvitacionEnviada ? "enviada" : "noEnviada",
    "data-estado"
  )} data-astro-cid-fr7lkljg> ${renderComponent($$result2, "Invitado", $$Invitado, { "invitadoData": invitado, "ruta": ruta, "tipo": tipoInvitacion, "data-astro-cid-fr7lkljg": true })} </li>`) : renderTemplate`<p data-astro-cid-fr7lkljg>
No tienes invitados aún. Usa el botón de abajo para agregar uno.
</p>`} </ul> ${usuarioId ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fr7lkljg": true }, { "default": async ($$result3) => renderTemplate` <button id="agregar-invitado" data-astro-cid-fr7lkljg> ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:account-plus-outline", "size": 25, "data-astro-cid-fr7lkljg": true })} Agregar invitado
</button> ${renderComponent($$result3, "AgregarInvitado", $$AgregarInvitado, { "usuarioId": usuarioId, "data-astro-cid-fr7lkljg": true })} ${renderComponent($$result3, "EditarInvitado", $$EditarInvitado, { "data-astro-cid-fr7lkljg": true })} ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fr7lkljg": true }, { "default": async ($$result3) => renderTemplate`${console.error("No se encontr\xF3 el ID del usuario.")}` })}`} </section>  ` })} ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/panel/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/panel/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/panel/index.astro";
const $$url = "/panel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
