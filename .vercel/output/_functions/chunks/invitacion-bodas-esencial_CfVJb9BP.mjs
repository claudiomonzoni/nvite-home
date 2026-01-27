import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CohHI9gX.mjs';
import 'clsx';

const frontmatter = {
  "version": "Esencial",
  "draft": false,
  "titulo": "invitacion-bodas-esencial",
  "whatsapp": "1832849244",
  "email": "nvitacionclasicaquince@nvitaciones.com",
  "quinceanera": "Verónica Ortiz Gómez",
  "fecha": "2026-07-25T00:00:00.000Z",
  "frase_amor": "Agradezco de todo corazón que estén conmigo para celebrar mi paso a una nueva etapa.",
  "padres": {
    "mama": "Alfonso Ortiz",
    "papa": "Ana Luz Gómez"
  },
  "ceremonia": {
    "hora": "5:00 P.M.",
    "lugar": "Catedral de San Ildefonso",
    "lat": "20.9174764",
    "lng": "-89.5281858"
  },
  "recepcion": {
    "hora": "7:00 P.M.",
    "lugar": "Kaovi",
    "lat": "20.9173856",
    "lng": "-89.5281862"
  },
  "itinerario": [],
  "cover": "/quince/covers/invitacion-bodas-esencial/cover.webp",
  "galeria": ["/quince/galeria/invitacion-bodas-esencial/galeria/0.webp", "/quince/galeria/invitacion-bodas-esencial/galeria/1.webp"],
  "imagenesSolitarias": ["/quince/solitarias/invitacion-bodas-esencial/imagenesSolitarias/0.webp"],
  "frase_regalos": "Tu presencia ya me alegrará, si además quieres hacerme un regalo",
  "regalos": [],
  "tipoRegalos": ["lluvia"],
  "progresoMostrarSiempre": false,
  "consideraciones": ["llegar puntual", "No llevar bebes", "Llevar muchas ganas de bailar"],
  "vestimenta": "Casual / Formal",
  "coloresVestimenta": ["#ffffff", "#000000", "#ff0000"],
  "paleta": "base",
  "theme": {
    "name": "base",
    "colors": {},
    "typography": {}
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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

const url = "src/content/quince/invitacion-bodas-esencial.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/invitacion-bodas-esencial.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/invitacion-bodas-esencial.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
