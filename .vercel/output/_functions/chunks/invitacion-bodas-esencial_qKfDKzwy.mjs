import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CohHI9gX.mjs';
import 'clsx';

const frontmatter = {
  "version": "Esencial",
  "draft": false,
  "titulo": "invitacion-bodas-esencial",
  "novios": "Armando & Julia",
  "ellaIniciales": "A",
  "elIniciales": "J",
  "fecha": "2025-12-27T00:00:00.000Z",
  "whatsapp": "1778389492",
  "email": "claudiomonzoni@hotmail.com",
  "frase_amor": "Nuestro amor merece una gran celebración y queremos que seas parte de ella",
  "padres": {},
  "cover": "/bodas/covers/invitacion-bodas-esencial/cover.webp",
  "galeria": ["/bodas/galeria/invitacion-bodas-esencial/galeria/0.webp", "/bodas/galeria/invitacion-bodas-esencial/galeria/1.webp", "/bodas/galeria/invitacion-bodas-esencial/galeria/2.webp", "/bodas/galeria/invitacion-bodas-esencial/galeria/3.webp"],
  "imagenesSolitarias": ["/bodas/solitarias/invitacion-bodas-esencial/imagenesSolitarias/0.webp"],
  "ceremonia": {
    "hora": "6:00 P.M.",
    "lugar": "Templo de San Francisco",
    "lat": "19.4335142",
    "lng": "-99.159201"
  },
  "recepcion": {
    "hora": "8:00 P.M.",
    "lugar": "Gran Salón del Valle",
    "lat": "19.3986281",
    "lng": "-99.1677996"
  },
  "itinerario": [],
  "vestimenta": "Formal Casual",
  "coloresVestimenta": ["#6B644C", "#FFFFFF", "#212121"],
  "consideraciones": ["Llegar puntual", "No llevar bebes a la recepción", "Ir con ganas de bailar mucho"],
  "tipoRegalo": ["lluvia", "transferencias"],
  "mesaRegalos": [],
  "beneficiario": "Francisco Maciel",
  "banco": "Bancomer",
  "cuenta": "188399420",
  "progresoMostrarSiempre": false,
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

const url = "src/content/bodas/invitacion-bodas-esencial.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/bodas/invitacion-bodas-esencial.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/bodas/invitacion-bodas-esencial.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
