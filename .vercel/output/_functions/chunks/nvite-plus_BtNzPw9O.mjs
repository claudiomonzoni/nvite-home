import { m as createAstro, n as createComponent, z as defineStyleVars, o as renderTemplate, s as addAttribute, q as maybeRenderHead, F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DrqvMMza.mjs';
import { a as $$Image } from './_astro_assets_rgm5ZIVA.mjs';
import 'react/jsx-runtime';
import 'react';
import { $ as $$Encabezados, a as $$ParrafosLibres, b as $$Cartas, c as $$Frase, d as $$BloqueMapa, e as $$Contador, f as $$BloqueVenta } from './BloqueVenta_CvUXkNNW.mjs';
import { $ as $$Galeria, a as $$Regalos } from './Regalos_BN9SVoEV.mjs';
import './Footer_BRiM-VfL.mjs';
/* empty css                                                                  */
import 'clsx';
import 'kleur/colors';
/* empty css                                                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.nvita.me");
const $$Itinerario = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Itinerario;
  const { listado } = Astro2.props;
  const base = "/";
  const urlPatron = `url("${base}/patron-fondo.png")`;
  const $$definedVars = defineStyleVars([{ urlPatron }]);
  return renderTemplate(_a || (_a = __template(["", '<section class="grid pantalla" id="riel" data-astro-cid-hkkimome', "> <ol data-astro-cid-hkkimome", "> ", ' </ol> </section>  <!-- \n<script>\n  import gsap from "gsap";\n  import ScrollTrigger from "gsap/ScrollTrigger";\n\n  gsap.registerPlugin(ScrollTrigger);\n\n  const li = gsap.utils.toArray(" ol li");\n  const riel = document.querySelector("#riel");\n\n  gsap.to(li, {\n    xPercent: -100 * (li.length - 1),\n    ease: "none",\n    scrollTrigger: {\n      trigger: riel,\n      pin: true,\n      start: "center center center",\n      end: "+=3000",\n      scrub: 1,\n        snap: {\n          snapTo: 1 / (li.length - 1),\n          duration: 0.7,\n          delay: 0.6,\n          ease: "power1.inOut",\n        },\n      markers: true,\n    },\n  });\n</script> -->'])), maybeRenderHead(), addAttribute($$definedVars, "style"), addAttribute($$definedVars, "style"), listado.map((item, index) => renderTemplate`<li data-astro-cid-hkkimome${addAttribute($$definedVars, "style")}> <h4 data-astro-cid-hkkimome${addAttribute($$definedVars, "style")}>${item.titulo}</h4> <p data-astro-cid-hkkimome${addAttribute($$definedVars, "style")}>${item.lugar}</p> <p data-astro-cid-hkkimome${addAttribute($$definedVars, "style")}>${item.hora}</p> </li>`));
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Itinerario.astro", void 0);

const $$Astro = createAstro("https://www.nvita.me");
const $$Audio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Audio;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="rola" data-astro-cid-wdanr5el> <h3 data-astro-cid-wdanr5el>Escucha la <b data-astro-cid-wdanr5el>canción</b> de nuestra boda</h3> <audio controls autoplay data-astro-cid-wdanr5el> <!-- <source src="horse.ogg"  type="audio/ogg"> --> <source${addAttribute(`${src}.mp3`, "src")} type="audio/mpeg" data-astro-cid-wdanr5el>
Tu dispositivo no soporta el audio
</audio> </div> `;
}, "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Audio.astro", void 0);

const frontmatter = {
  "version": "plus",
  "titulo": "Nvite Plus muestra",
  "extracto": "Muestra de la invitación de bodas nvite plus",
  "descripcion": "Muestra de la invitación de bodas nvite plus, la más completa de las invitaciones que te ofrecemos.",
  "slug": "nvita-plus",
  "whatsapp": 8488493900,
  "novios": "Elena & Marcos",
  "fecha": "2025-03-24T00:00:00.000Z",
  "vestimenta": "Formal casual",
  "frase_amor": "De vez en cuando, justo en medio de una vida ordinaria, el amor nos regala un cuento de hadas.",
  "beneficiario": "Elena Ramirez",
  "banco": "Banco Santander",
  "cuenta": 123456789,
  "consideraciones": ["No vestir de blanco", "Favor de no llevar bebes"],
  "ceremonia": {
    "lat": 17.665128,
    "lang": -101.597448,
    "hora": 960,
    "lugar": "<b>Iglesia de la Santa Cruz</b>, Calle Paseo de los Pelicanos 40883, Ixtapa Gro. (frente a la Moraleja)"
  },
  "recepcion": {
    "lat": 17.661152,
    "lang": -101.603728,
    "hora": 1080,
    "lugar": "<b>Hotel SunScape Ixtapa </b>, Blvd. Paseo Ixtapa S/N-A, 40884 Zihuatanejo, Gro Blvd. Paseo Ixtapa S/N-A, 40884 Zihuatanejo, Gro."
  },
  "iterario": [{
    "titulo": "Ceremonia Religiosa",
    "lugar": "Iglesa de la Santa Cruz, Ixtapa Gro.",
    "hora": "16:00"
  }, {
    "titulo": "Recepción",
    "lugar": "Salón de eventos Hotel SunScape Ixtapa.",
    "hora": "18:00"
  }, {
    "titulo": "Mariachi en vivo",
    "lugar": "Salón de eventos Hotel SunScape Ixtapa.",
    "hora": "20:00"
  }, {
    "titulo": "Baile de los novios",
    "lugar": "Salón de eventos Hotel SunScape Ixtapa",
    "hora": "22:30"
  }, {
    "titulo": "Cena y Brindis",
    "lugar": "Salón de eventos Hotel SunScape Ixtapa",
    "hora": "23:00"
  }, {
    "titulo": "Cierre del evento",
    "lugar": "Salón de eventos Hotel SunScape Ixtapa",
    "hora": "3:00"
  }]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Encabezados, {
      texto: "Nuestra Boda"
    }), "\n", createVNode($$ParrafosLibres, {
      texto: "Daremos el “sí quiero”, seguiremos este emocionante viaje juntos y nos\r\nencantaría que nos acompañes a celebrar la gran fiesta de nuestra boda."
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode($$Audio, {
        src: "/bodas/love-music"
      })
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode("div", {
        class: "conte-cartas",
        children: [createVNode($$Cartas, {
          icono: "/bodas/fecha-icono.svg",
          titulo: "Fecha de nuestra boda",
          children: createVNode("p", {
            children: frontmatter.fecha
          })
        }), createVNode($$Cartas, {
          icono: "/bodas/detalles-icono.svg",
          titulo: "Detalles",
          array: frontmatter.consideraciones,
          children: createVNode("p", {
            children: "qiuueueu"
          })
        }), createVNode($$Cartas, {
          icono: "/bodas/formal-icono.svg",
          titulo: "Código de vestimenta",
          children: createVNode("p", {
            children: frontmatter.vestimenta
          })
        })]
      })
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode($$Frase, {
        frase: frontmatter.frase_amor
      })
    }), "\n", createVNode("section", {
      class: "grid pantalla",
      children: createVNode($$Galeria, {
        carpeta: "nvitaPlus"
      })
    }), "\n", createVNode($$Encabezados, {
      texto: "El Lugar"
    }), "\n", createVNode("section", {
      class: "grid contenido fondo-mitad",
      children: [createVNode($$ParrafosLibres, {
        texto: "Te compartimos la ubicación, te esperamos en la ceremonia religiosa y en\r\nla recepción de nuestra boda"
      }), createVNode("div", {
        id: "zigzag",
        children: [createVNode($$BloqueMapa, {
          encabezado: "Ceremonia",
          dir: frontmatter.ceremonia.lugar,
          horario: frontmatter.ceremonia.hora,
          lat: frontmatter.ceremonia.lat,
          lng: frontmatter.ceremonia.lang,
          mapName: "mapa1"
        }), createVNode($$BloqueMapa, {
          encabezado: "Recepción",
          dir: frontmatter.recepcion.lugar,
          horario: frontmatter.recepcion.hora,
          lat: frontmatter.recepcion.lat,
          lng: frontmatter.recepcion.lang,
          mapName: "mapa2"
        })]
      })]
    }), "\n", createVNode($$Encabezados, {
      texto: "Itinerario"
    }), "\n", createVNode($$Itinerario, {
      listado: frontmatter.iterario
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode($$Regalos, {
        frase: "El regalo más importante será tu presencia, te agradecemos si aparte nos deseas hacer un regalo en este día tan especial.",
        beneficiario: frontmatter.beneficiario,
        banco: frontmatter.banco,
        cuenta: frontmatter.cuenta
      })
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode($$Contador, {
        fecha: frontmatter.fecha
      })
    }), "\n", createVNode("section", {
      children: createVNode("astro-client-only", {
        whatsapp: frontmatter.whatsapp,
        dias_antes: 7,
        version: frontmatter.version,
        "client:only": "react",
        "client:display-name": "Confirmacion",
        "client:component-path": "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/Confirmacion",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$BloqueVenta, {
      costo: "1290",
      stripe: "https://buy.stripe.com/5kA8yN0VK2rxgF27su",
      version: frontmatter.version
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/bodas/nvite-plus.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/bodas/nvite-plus.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/bodas/nvite-plus.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
