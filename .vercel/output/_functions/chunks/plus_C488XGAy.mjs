import { m as createAstro, n as createComponent, o as renderTemplate, p as renderComponent, q as maybeRenderHead, s as addAttribute, F as Fragment } from './astro/server_DrqvMMza.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_DngXTjJ3.mjs';
import { i as invitadosData } from './invitados_DVaZk3LI.mjs';
/* empty css                        */

const $$Astro = createAstro("https://www.nvita.me");
const $$Plus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Plus;
  const base = "/bodas/nvita-plus";
  const url = Astro2.url.host;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel de administraci\xF3n", "data-astro-cid-cb7dbzsv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="barra" data-astro-cid-cb7dbzsv> <img${addAttribute(`/nvita-logo.svg`, "src")} alt="Invitaciones digitales" id="logo" data-astro-cid-cb7dbzsv> <p data-astro-cid-cb7dbzsv>Invitaciones digitales nvita.me</p> </div> <div class="grid contenido" data-astro-cid-cb7dbzsv> <section id="panel" data-astro-cid-cb7dbzsv> <h2 data-astro-cid-cb7dbzsv>Panel de invitados</h2> <div id="explicalo" data-astro-cid-cb7dbzsv> <p data-astro-cid-cb7dbzsv>Copia las invitaciones y marca a los invitados confirmados.</p> <p class="alerta" data-astro-cid-cb7dbzsv> <b data-astro-cid-cb7dbzsv>Importante:</b> La información no estará sicronizada entre distintos dispositivos,<b data-astro-cid-cb7dbzsv> te recomendamos usar un solo dispositivo</b>, ya sea tu celular o computadora para llevar el control.
</p> <ul data-astro-cid-cb7dbzsv> <li id="color-invitado" data-astro-cid-cb7dbzsv>Invitación copiada</li> <li id="color-confirmado" data-astro-cid-cb7dbzsv>Invitado confirmado</li> </ul> </div> <div id="invitados" data-astro-cid-cb7dbzsv> ${invitadosData.map((invitado, id) => renderTemplate`<li${addAttribute(id, "data-id")} data-astro-cid-cb7dbzsv> <h3 data-astro-cid-cb7dbzsv>${invitado.nombre}</h3> <p class="info" data-astro-cid-cb7dbzsv>Id: ${id} | Pases: ${invitado.pases}</p> <div class="btnes"${addAttribute(id, "data-id")} data-astro-cid-cb7dbzsv> <button id="copiar"${addAttribute(`https://${url}${base}?id=${id}`, "value")} data-astro-cid-cb7dbzsv> <img${addAttribute(`/copy.png`, "src")} alt="copiar" data-astro-cid-cb7dbzsv> Copiar invitación </button> <button id="confirmo" data-astro-cid-cb7dbzsv> <img${addAttribute(`/read.png`, "src")} alt="confirmo" data-astro-cid-cb7dbzsv> Asistecia confirmada</button> <button id="reset" data-astro-cid-cb7dbzsv>Limpiar</button> </div> </li>`)} </div> </section> </div> ` })}  ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-cb7dbzsv": true })}`;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/quince/panel/plus.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/pages/quince/panel/plus.astro";
const $$url = "/quince/panel/plus";

export { $$Plus as default, $$file as file, $$url as url };
