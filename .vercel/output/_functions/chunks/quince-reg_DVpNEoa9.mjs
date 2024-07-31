import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DrqvMMza.mjs';
import { a as $$Image } from './_astro_assets_rgm5ZIVA.mjs';
import { $ as $$Encabezados } from './Encabezados_CASzv5Ml.mjs';
import { $ as $$ParrafosLibres, a as $$Cartas, b as $$Frase, c as $$BloqueMapa, d as $$Contador, e as $$BloqueVenta } from './BloqueVenta_-EpT17nV.mjs';
import { $ as $$Galeria, a as $$Regalos } from './Regalos_CiSCHUu3.mjs';
import 'react/jsx-runtime';
import 'react';
import './Footer_DoCATsMP.mjs';
import 'clsx';

const frontmatter = {
  "version": "reg",
  "titulo": "Nvita regular muestra",
  "extracto": "Muestra de la invitación de Xv años nvita regular",
  "descripcion": "Muestra de la invitación de quince años nvita regular, la más vendida de las invitaciones que te ofrecemos.",
  "slug": "nvita-quince-reg",
  "whatsapp": 8488493900,
  "novios": "Elena & Marcos",
  "fecha": "2025-03-24T00:00:00.000Z",
  "vestimenta": "Formal Elegante",
  "frase_amor": "Desde pequeña esperabas con ansias este día, imaginabas compartirlo con todas las personas que amas. Por fin llegó el día y es tal y como lo soñaste.",
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
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Encabezados, {
      texto: "Mis XV años"
    }), "\n", createVNode($$ParrafosLibres, {
      texto: "El anhelo de todo padre es ver a su hija transformarse de una niña feliz a una mujer segura de sí. Y más orgulloso no podría estar y por eso contigo quiero celebra."
    }), "\n", createVNode("section", {
      class: "grid contenido",
      children: createVNode("div", {
        class: "conte-cartas",
        children: [createVNode($$Cartas, {
          icono: "/quince/fecha-icono.svg",
          titulo: "Fecha de mis XV años",
          children: createVNode("p", {
            children: frontmatter.fecha
          })
        }), createVNode($$Cartas, {
          icono: "/quince/detalles-icono.svg",
          titulo: "Detalles",
          array: frontmatter.consideraciones,
          children: createVNode("p", {
            children: "qiuueueu"
          })
        }), createVNode($$Cartas, {
          icono: "/quince/formal-icono.svg",
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
        texto: "Te compartimos la ubicación, te esperamos en la ceremonia religiosa y en\r\nla fiesta de XV años"
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
        "client:component-path": "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/components/quince/Confirmacion",
        "client:component-export": "default",
        "client:component-hydration": true
      })
    }), "\n", createVNode($$BloqueVenta, {
      costo: "990",
      stripe: "https://buy.stripe.com/7sIbKZfQE5DJ1K8eUX",
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

const url = "src/content/quince/quince-reg.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/quince/quince-reg.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/nvite.me/Landing/src/content/quince/quince-reg.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
