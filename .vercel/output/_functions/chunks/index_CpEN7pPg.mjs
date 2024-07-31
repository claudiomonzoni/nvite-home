import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, s as addAttribute, F as Fragment } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DngXTjJ3.mjs';
import { i as invitadosData } from './invitados_DIUx8Fhx.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.nvita.me");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const base = "/bodas/nvita-plus";
  const url = Astro2.url.host;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de administraci\xF3n", "data-astro-cid-fr7lkljg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="barra" data-astro-cid-fr7lkljg> <img${addAttribute(`/nvita-logo.svg`, "src")} alt="Invitaciones digitales" id="logo" data-astro-cid-fr7lkljg> <p data-astro-cid-fr7lkljg>Invitaciones digitales nvita.me</p> </div> <div class="grid contenido" data-astro-cid-fr7lkljg> <section id="panel" data-astro-cid-fr7lkljg> <h2 data-astro-cid-fr7lkljg>Panel de invitados</h2> <div id="explicalo" data-astro-cid-fr7lkljg> <p data-astro-cid-fr7lkljg>Copia las invitaciones y marca o edita a los invitados.</p> <ul data-astro-cid-fr7lkljg> <li id="color-invitado" data-astro-cid-fr7lkljg>Invitación copiada</li> <li id="color-confirmado" data-astro-cid-fr7lkljg>Invitado confirmado</li> </ul> </div> <div id="invitados" data-astro-cid-fr7lkljg> ${invitadosData.map((invitado, id) => renderTemplate`<li${addAttribute(id, "data-id")} data-astro-cid-fr7lkljg> <h3 data-astro-cid-fr7lkljg>${invitado.nombre}</h3> <p class="info" data-astro-cid-fr7lkljg>Id: ${id} | Pases: ${invitado.pases}</p> <div class="btnes"${addAttribute(id, "data-id")} data-astro-cid-fr7lkljg> <button id="copiar"${addAttribute(`https://${url}${base}?id=${id}`, "value")} data-astro-cid-fr7lkljg> <img${addAttribute(`/copy.png`, "src")} alt="copiar" data-astro-cid-fr7lkljg> Copiar invitación </button> <button id="confirmo" data-astro-cid-fr7lkljg> <img${addAttribute(`/read.png`, "src")} alt="confirmo" data-astro-cid-fr7lkljg> Asistecia confirmada</button> <button id="editar" data-astro-cid-fr7lkljg>Editar</button> </div> </li>`)} </div> </section> </div> ` })}  ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-fr7lkljg": true })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/panel/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/panel/index.astro";
const $$url = "/panel";

export { $$Index as default, $$file as file, $$url as url };
