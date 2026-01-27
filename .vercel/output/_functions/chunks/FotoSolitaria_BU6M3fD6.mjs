import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, r as renderComponent, b as renderTemplate, h as renderScript, l as defineScriptVars } from './astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_DJmXbCaH.mjs';
/* empty css                          */
import 'clsx';

const $$Astro$3 = createAstro("https://nvitaciones.com");
const $$Anchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Anchor;
  const { clases, conBorde, redondo, sombra, tema, url, texto, icono, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute([
    "btn",
    clases,
    tema,
    { "con-borde": conBorde, redondo, sombra }
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-bq4mi2ud> ${icono && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icono, "size": 22, "data-astro-cid-bq4mi2ud": true })}`} ${texto} </a> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/Anchor.astro", void 0);

const $$Astro$2 = createAstro("https://nvitaciones.com");
const $$ProgresoInvitados = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProgresoInvitados;
  const { porcentajeMostrarInvitados, mostrarSiempre, frase, email } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="progreso-invitados" class="progreso-invitados"${addAttribute(email, "data-email")}${addAttribute(porcentajeMostrarInvitados, "data-porcentaje-minimo")}${addAttribute(mostrarSiempre, "data-mostrar-siempre")}${addAttribute(frase, "data-frase")}> <div class="contenido"> <h2 id="frase-titulo"></h2> <p class="porcentaje"> <span class="numero" id="porcentaje-numero">0%</span> <span class="texto">de invitados han confirmado</span> </p> <div class="estadisticas"> <div class="barra-progreso"> <div class="barra" id="barra-progreso"></div> </div> <p class="detalles"> <span class="confirmados" id="pases-confirmados">0</span> de <span class="total" id="total-pases">0</span> pases confirmados
</p> </div> ${renderComponent($$result, "Anchor", $$Anchor, { "url": "#Confirmacion-comun", "id": "confirmacion-btn-progreso", "icono": "solar:check-read-outline", "clases": "large", "conBorde": false, "redondo": false, "sombra": false, "tema": "primario", "texto": "confirmar asistencia" })} </div> </div> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/ProgresoInvitados.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/ProgresoInvitados.astro", void 0);

const $$MensajeVip = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mensaje-vip-container" data-astro-cid-m7aan6ic> <div class="mensaje-vip" data-astro-cid-m7aan6ic> <span class="etiqueta-vip" data-astro-cid-m7aan6ic>invitado especial</span> <div class="mensaje-contenido" data-astro-cid-m7aan6ic> <p class="mensaje-texto" data-astro-cid-m7aan6ic></p> </div> </div> </div> ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/MensajeVip.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/MensajeVip.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://nvitaciones.com");
const $$Contador = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contador;
  const { fecha } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="contador"> <div class="bande"> <p id="falta">Nuestro Evento es en:</p> <div class="tiempo-container"> <div class="tiempo-item"> <div id="dias-numero" class="numero"></div> <p id="dias-texto">d\xEDas</p> </div> <div class="tiempo-item"> <div id="horas-numero" class="numero"></div> <p>horas</p> </div> <div class="tiempo-item"> <div id="minutos-numero" class="numero"></div> <p>minutos</p> </div> <div class="tiempo-item"> <div id="segundos-numero" class="numero"></div> <p>segundos</p> </div> </div> </div> </div> <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js" type="text/javascript"><\/script> <script>(function(){', `
  function calcularTiempoRestante(fechaObjetivo) {
    try {
      const [year, month, day] = fechaObjetivo.split('-').map(num => parseInt(num));
      const targetDate = new Date(year, month - 1, day);
      const now = new Date();
      
      const diffTime = targetDate.getTime() - now.getTime();
      
      if (diffTime <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
      }

      const dias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      return { dias, horas, minutos, segundos };
    } catch (error) {
      console.error('Error calculating time:', error);
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
  }

  function actualizarContador() {
    const tiempo = calcularTiempoRestante(fecha);
    
    document.getElementById("dias-numero").innerHTML = tiempo.dias;
    document.getElementById("horas-numero").innerHTML = tiempo.horas;
    document.getElementById("minutos-numero").innerHTML = tiempo.minutos;
    document.getElementById("segundos-numero").innerHTML = tiempo.segundos;
    
    const faltaElement = document.getElementById("falta");
    const diasTexto = document.getElementById("dias-texto");

    if (tiempo.dias <= 0 && tiempo.horas <= 0 && tiempo.minutos <= 0 && tiempo.segundos <= 0) {
      faltaElement.innerHTML = "\xA1Felicidades!";
      return;
    }

    if (tiempo.dias === 1) {
      diasTexto.innerHTML = "d\xEDa";
      faltaElement.innerHTML = "Solo falta:";
    } else {
      diasTexto.innerHTML = "d\xEDas";
      faltaElement.innerHTML = "D\xEDas para el Evento:";
    }
  }

  actualizarContador();
  const intervalo = setInterval(actualizarContador, 1000); // Actualizar cada segundo
  document.addEventListener('astro:before-swap', () => clearInterval(intervalo));
})();<\/script>`])), maybeRenderHead(), defineScriptVars({ fecha }));
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/bodas/Contador.astro", void 0);

const $$Astro = createAstro("https://nvitaciones.com");
const $$FotoSolitaria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FotoSolitaria;
  const { arriba, src, gradientePorciento } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`solita ${arriba ? "gradiente-arriba" : "gradiente-abajo"}`, "class")}${addAttribute(`--grad-p: ${gradientePorciento ?? 20}%`, "style")} data-astro-cid-rfljnenk> <img${addAttribute(src, "src")} alt="Imagen de invitaciones.com" width="500" height="500" data-astro-cid-rfljnenk> </div>  ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/FotoSolitaria.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/comunes/FotoSolitaria.astro", void 0);

export { $$Anchor as $, $$FotoSolitaria as a, $$Contador as b, $$ProgresoInvitados as c, $$MensajeVip as d };
