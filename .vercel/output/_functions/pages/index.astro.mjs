import { c as createAstro, a as createComponent, r as renderComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate, h as renderScript } from '../chunks/astro/server_CohHI9gX.mjs';
import 'kleur/colors';
import { b as $$CaracteristicasGrid, a as $$MostrarNvitaciones, $ as $$Caracteristicas, c as $$BannerGeneral } from '../chunks/MostrarNvitaciones_DxDywmCR.mjs';
import { a as $$Nav, $ as $$Btn } from '../chunks/Nav_C5b82xcF.mjs';
import { $ as $$Icon } from '../chunks/Icon_DJmXbCaH.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_CXKQFWHh.mjs';
import { $ as $$Footer } from '../chunks/Footer_Ahr7FuTG.mjs';
import 'clsx';
import { $ as $$Testimonios } from '../chunks/Testimonios_Dmm3V4u6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nvitaciones.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-bbe6dxrz": true })} ${maybeRenderHead()}<section class="grid contenido" data-astro-cid-bbe6dxrz> <div id="hero" data-astro-cid-bbe6dxrz> <div class="izq anime" data-astro-cid-bbe6dxrz> <div class="bandeja anime" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>Invitaciones de bodas y Xv años</span> modernas y elegantes
</h1> <p data-astro-cid-bbe6dxrz>${unescapeHTML(description)}</p> <div class="cta" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Btn", $$Btn, { "liga": "#nvitaciones", "texto": "Ver invitaciones", "claro": false, "clases": "btn-oscuro", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:chevron-double-down", "size": 25, "data-astro-cid-bbe6dxrz": true })} ` })} <p data-astro-cid-bbe6dxrz>Tu evento inicia con las Nvitaciones</p> </div> <!-- <Btn liga="#formu" texto="Contáctanos" claro={true} /> --> </div> </div> <div class="der anime" data-astro-cid-bbe6dxrz> <!-- <Picture src={cover} alt="Invitaciones digitales para eventos" />
        --> <picture data-astro-cid-bbe6dxrz> <source srcset="/invitaciones-digitales-cover-nvitacines.webp" media="(min-width: 479px)" data-astro-cid-bbe6dxrz> <source srcset="/invitaciones-digitales-cover-nvitacines-cel.webp" media="(max-width: 479px)" data-astro-cid-bbe6dxrz> <img src="/invitaciones-digitales-cover-nvitacines.webp" alt="nvitaciones digitales para eventos bodas y quince años" data-astro-cid-bbe6dxrz> </picture> </div> </div> </section> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Hero.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="conte" data-astro-cid-z6gx6xcw> <h2 data-astro-cid-z6gx6xcw>Dudas más frecuentes</h2> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Cómo invito a mi boda, XV años o evento?</summary> <div data-astro-cid-z6gx6xcw>
Enviar las invitaciones es muy fácil, puedes enviar por WhatsApp, correo electrónico o compartir el enlace de tu invitación en tus redes sociales, si tu Nvitación es web Clásica o Lux, tienes acceso a un panel de invitados donde con un solo clic invitas o un botón para copiar y pegar el enlace de cada invitado, si es PDF, te damos el archivo y simplemente lo envías por WhatsApp a tus invitados <br data-astro-cid-z6gx6xcw> </div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Cómo saber cuántos invitados van a mi boda?</summary> <div data-astro-cid-z6gx6xcw>
Te damos las herramientas para que puedas gestionar tus invitados. En las invitaciones web (Lux y clásicas), tienes acceso al panel de invitados donde podrás ver el % de invitados que han confirmado su asistencia así como los que te faltan por invitar, los que no han confirmado o rechazaron la invitación.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Cómo hacer invitaciones que confirmen asistencia?</summary> <div data-astro-cid-z6gx6xcw>
Todas las invitaciones, incluidas las PDF, tienen un enlace de confirmación de asistencia, dando así la opción de confirmar la asistencia de tus invitados.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Invitaciones personalizadas para cada invitado?</summary> <div data-astro-cid-z6gx6xcw>
Así es, puedes personalizar tus invitaciones para cada invitado, con su nombre y pases creando una experiencia única y personal para tu evento, en las Nvitaciones Lux, puedes enviar <b data-astro-cid-z6gx6xcw>mensajes personales</b> a tus invitados especiales como tus padres, abuelos o amigos de toda la vida.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Mi invitación es a mi gusto?</summary> <div data-astro-cid-z6gx6xcw>
Tu invitación (solo versión web clásica y Lux) es con los detalles y fotos de tu evento, los datos de tus invitados y el diseño que tú elijas. Pero además, puedes elegir entre 3 patrones de colores, agregar la canción que amas, si muestras o no el porcentaje de invitados o a partir de qué porcentaje de invitados confirmados se muestre esa información".
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Cuánto tiempo estará disponible la invitación en línea?</summary> <div data-astro-cid-z6gx6xcw>
Desde la entrega de la invitación, estará disponible hasta una semana después del evento. El tiempo máximo de disponibilidad es de un año y una semana desde la entrega. Puedes adquirir tu invitación hasta con un año y una semana de anticipación.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Qué garantías tengo al comprar?</summary> <div data-astro-cid-z6gx6xcw>
Te garantizamos que tus invitaciones funcionarán en smartphones, tabletas y computadoras, y estarán disponibles desde el momento de la entrega hasta una semana después del evento. <b data-astro-cid-z6gx6xcw>O te devolvemos tu dinero.</b> </div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Qué métodos de pago aceptan?</summary> <div data-astro-cid-z6gx6xcw>
Puedes pagar con tarjeta de crédito o débito a través de Stripe, una plataforma de pago segura, Google Pay. Si estás en México, también puedes pagar en cualquier sucursal OXXO.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>¿Cuál es su horario de atención?</summary> <div data-astro-cid-z6gx6xcw>
Lunes a viernes, de 9:00 a.m. a 6:00 p.m.
</div> </details> <details data-astro-cid-z6gx6xcw> <summary data-astro-cid-z6gx6xcw>Tengo más dudas, ¿cómo me contacto con ustedes?</summary> <div data-astro-cid-z6gx6xcw> <ul data-astro-cid-z6gx6xcw> <li data-astro-cid-z6gx6xcw>Puedes usar el formulario que está más abajo; es la forma más fácil y rápida de contactarnos. Cuéntanos tus dudas y con gusto te ayudaremos a resolverlas.</li> <li data-astro-cid-z6gx6xcw>WhatsApp: +52 1 755 113 2468</li> <li data-astro-cid-z6gx6xcw>Email: invitacionesnvita@gmail.com</li> </ul> </div> </details> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Faq.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="logos" data-astro-cid-tzrpxpba> <ul data-astro-cid-tzrpxpba> <li data-astro-cid-tzrpxpba> <img src="/logos/bodas.svg" alt="bodas.com" data-astro-cid-tzrpxpba> </li> <li data-astro-cid-tzrpxpba> <img src="/logos/mercadolibre.svg" alt="mercado libre" data-astro-cid-tzrpxpba> </li> <li data-astro-cid-tzrpxpba> <img src="/logos/etsy.svg" alt="etsy" data-astro-cid-tzrpxpba> </li> <li data-astro-cid-tzrpxpba> <img src="/logos/aw.svg" alt="weddings " data-astro-cid-tzrpxpba> </li> <li data-astro-cid-tzrpxpba> <img src="logos/weddingsco.svg" alt="er" data-astro-cid-tzrpxpba> </li> </ul> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/components/Logos.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <Layout title="Invitaciones de bodas, 15 años, fiestas y eventos digitales."> -->${renderComponent($$result, "Layout", $$Layout, { "title": "Invitaciones Elegantes y Modernas para Bodas, XV A\xF1os, Cumplea\xF1os | RSVP y control de Invitados", "description": "Invitaciones elegantes digitales en M\xE9xico. Env\xEDa por WhatsApp, confirma asistencias y gestiona tus invitados f\xE1cilmente con Nvitaciones." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "description": "Env\xEDa tu invitaci\xF3n personalizada y <b>conoce en tiempo real qui\xE9n va a tu boda o XV a\xF1os</b>." })} ${maybeRenderHead()}<div class="grid contenido"> ${renderComponent($$result2, "Logos", $$Logos, {})} <div id="choro"> <h2>Sin invitados <b>no hay fiesta</b> </h2> <p>
Pero invitarlos de la manera tradicional quita tiempo y es caro, <b>Nvitaciones te lo hace fácil</b>, invita en minutos y lleva el control de tus invitados
</p> </div> <!-- <Btn
            liga="#nvitaciones"
            texto="Ver Nvitaciones"
            clases="btn-bordes-oscuro "
            claro={false}
          >
            <Icon name="mdi:envelope-heart-outline" size={25} />
          </Btn>
          --> </div> ` })} <!-- <div class="grid contenido">
   <OfertaTiempo
     encabezado="<b>Aprovecha 15% </b>de descuento"
     texto="Oferta imperdible. <b>aplica el cupón: NVITAME15</b> a la hora de adquirir tu invitación de boda o 15 años (versión Lux)."
     small="Solo aplica para pagos en línea, <b>la oferta se acaba:</b>"
     horasValidez={25}
     img="/promo.webp"
     porcentaje={15}
   />
 </div> --> <!-- <section class="grid contenido">
      <div id="video">
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cV49wo2c5fU?si=c95LYo30Mkdnu-1b&controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
    <div id="videoCel">
      <iframe
        width="315"
        height="560"
        src="https://www.youtube.com/embed/UBu6HRRfCdA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  </section> --> ${renderComponent($$result, "CaracteristicasGrid", $$CaracteristicasGrid, { "matriz": [
    {
      imagen: "/home-invitaciones-digitales-caracteristicas-nvitaciones.webp",
      titulo: "Invita y <span>sorprende</span>",
      texto: "Invitaciones modernas con las herramientas que te dar\xE1n el control y la tranquilidad",
      txtbtn: "\xBFdudas?",
      icono: "mdi:account-question-outline",
      enlace: "#faq"
    },
    {
      imagen: "mdi:infinity",
      titulo: "Sin limites",
      texto: "Sin cargos extras por n\xFAmero de invitados",
      enlace: "#"
    },
    {
      imagen: "mdi:account-multiple-check-outline",
      texto: "Anima a los invitados mostrando los asistentes confirmados"
    },
    {
      imagen: "mdi:infinity-box",
      texto: "<span>Consulta</span> qui\xE9n s\xED va a tu fiesta"
    },
    {
      imagen: "mdi:infinity-box",
      texto: "<span>asigna</span> pases por invitaci\xF3n"
    }
  ] })} <div id="nvitaciones"> ${renderComponent($$result, "MostrarNvitaciones", $$MostrarNvitaciones, { "dondeEstoy": "home" })} </div> <div class="grid contenido"> <div id="conteCaracteristicas"> ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "Invita", "texto": "Agrega tus <b>invitados</b> de manera f\xE1cil.", "icono": "mdi:account-multiple-add-outline", "fondo": "/fondo-nvite-caracteristicas-3.png", "colorBg": "#FFF1E1" })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "r\xE1pido", "texto": "Env\xEDa tu invitaci\xF3n con un <b>solo clic.</b>", "icono": "mdi:message-fast-outline", "fondo": "/fondo-nvite-caracteristicas-2.png", "colorBg": "#FFF1E1" })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "\xFAtil", "texto": "<b>Organiza</b> todo en un solo lugar.", "icono": "mdi:sticker-check-outline", "fondo": "/fondo-nvite-caracteristicas-4.png", "colorBg": "#FFF1E1" })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "\xFAnico", "texto": "Invitaciones con <b>estilo.</b>", "icono": "mdi:vector-bezier", "fondo": "/fondo-nvite-caracteristicas-4.png", "colorBg": "#FFF1E1" })} </div> </div> <!-- <Galeriaslide /> --> <div class="grid contenido"> ${renderComponent($$result, "BannerGeneral", $$BannerGeneral, { "encabezado": "Recibes con tu <b>invitaci\xF3n digital</b>", "texto": `
    <ul>
    <li><b>Trato personalizado.</b></li>
    <li>Tu invitaci\xF3n,<b> 2 d\xEDas h\xE1biles</b> despu\xE9s del env\xEDo de tus datos.</li>
    <li>
   <b>Panel de invitados</b>, controla tus invitaciones.
    </li>
    <li>
    Tu invitaci\xF3n en l\xEDnea hasta <b> 1 semana</b> despu\xE9s de terminado el evento.
    </li>
    <li><mark>Env\xEDos ilimitados.</mark></li>
       
        </ul>
        <small>*Panel de invitados no aplica en la versi\xF3n "basic"</small>
        <br>
        `, "tema": "terciario", "icono": "mdi:deal", "urlImagen": "../assets/home/gale/recibes.webp", "margenAbajo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Btn", $$Btn, { "liga": "#faq", "texto": "\xBFTienes m\xE1s dudas?", "clases": "btn-oscuro", "claro": true, "blank": false }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "mdi:comment-question-outline", "size": 25 })} ` })} ` })} </div> ${renderComponent($$result, "Testimonios", $$Testimonios, {})} <div class="grid contenido" id="faq"> ${renderComponent($$result, "Faq", $$Faq, {})} </div> <section class="grid contenido"> <div id="conteCaracteristicas"> ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "contacto", "texto": "te guiamos <b> en el proceso</b>.", "icono": "mdi:message-processing-outline", "fondo": "/fondo-nvite-caracteristicas.png", "colorBg": "#FFF1E1", ";": true })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "pago", "texto": "paga en <b>OXXO o con tu tarjeta bancaria. </b>", "icono": "mdi:payment", "fondo": "/fondo-nvite-caracteristicas-2.png", "colorBg": "#FFF1E1" })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "detalles", "texto": "Env\xEDanos los <b> detalles de tu evento. </b>", "icono": "mdi:connect-without-contact", "fondo": "fondo-nvite-caracteristicas-3.png", "colorBg": "#FFF1E1", ";": true })} ${renderComponent($$result, "Caracteristicas", $$Caracteristicas, { "encabezado": "entrega", "texto": "En <b>2 d\xEDas</b> o menos", "icono": "mdi:package-variant-closed-delivered", "fondo": "fondo-nvite-caracteristicas-4.png", "colorBg": "#FFF1E1" })} </div> </section> <section class="grid contenido" id="formulario"> <div class="flex"> <div class="fondo-formu"> <div class="bande"> <h2>Prueba tu Nvitación <br> sin compromiso</h2> <p> <b>¿Tienes dudas o pedidos especiales?</b> <br> contáctanos y hagamos
          que tu invitación sea perfecta <br>😊
</p> </div> <div id="formu"> <form> <!-- <h3>
          <img src="/whatsapp.png" alt="logo whatsapp">
          <b>whatsapp</b></h3> --> <label for="nombre">Nombre</label> <input type="text" id="nombre" placeholder="Tu nombre"> <label for="fecha">Fecha del evento</label> <input type="date" name="fecha" id="fecha"> <label for="evento">Tipo de evento</label> <select name="evento" id="evento"> <option value="Boda">Boda</option> <option value="Xv">XV años</option> <option value="Cumple">Cumpleaños</option> </select> ${renderComponent($$result, "Btn", $$Btn, { "liga": "#", "id": "empezar", "texto": "<b>Enviar</b> ahora", "clases": "desactivado, btn-oscuro", "claro": false, "blank": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:whatsapp" })} ` })} <!-- <button type="submit" id="empezar" class="desactivado">Empezemos</button> --> </form> </div> </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/index.astro", void 0);

const $$file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
