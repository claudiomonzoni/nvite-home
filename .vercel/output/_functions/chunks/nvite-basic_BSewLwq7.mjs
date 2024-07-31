import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DrqvMMza.mjs';
import { a as $$Image } from './_astro_assets_rgm5ZIVA.mjs';
import 'react/jsx-runtime';
import 'react';
import { $ as $$Encabezados, a as $$ParrafosLibres, b as $$Cartas, c as $$Frase, d as $$BloqueMapa, e as $$Contador, f as $$BloqueVenta } from './BloqueVenta_CvUXkNNW.mjs';
import './Footer_BRiM-VfL.mjs';
import 'clsx';

const frontmatter = {
  "version": "basic",
  "titulo": "Nvite Basic muestra",
  "extracto": "Muestra de la invitación de bodas nvite básica",
  "descripcion": "Muestra de la invitación de bodas nvite básica, la más básica de las invitaciones que te ofrecemos.",
  "slug": "nvita-basic",
  "whatsapp": 8488493900,
  "novios": "Elena & Marcos",
  "fecha": "2025-03-25T00:00:00.000Z",
  "vestimenta": "Formal casual",
  "frase_amor": "De vez en cuando, justo en medio de una vida ordinaria, el amor nos regala un cuento de hadas.",
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
  }
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
        "client:display-name": "ConfirmacionBasica",
        "client:component-path": "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/bodas/ConfirmacionBasica",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$BloqueVenta, {
      costo: "740",
      stripe: "https://buy.stripe.com/9AQ5mBdIwaY374s6os",
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

const url = "src/content/bodas/nvite-basic.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/bodas/nvite-basic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/bodas/nvite-basic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
