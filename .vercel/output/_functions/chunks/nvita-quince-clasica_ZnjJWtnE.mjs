import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CohHI9gX.mjs';
import 'clsx';

const frontmatter = {
  "version": "Clasica",
  "draft": false,
  "titulo": "nvita-quince-clasica",
  "whatsapp": "1828482912",
  "email": "nvitacionclasicaquince@nvitaciones.com",
  "quinceanera": "María Elena Olvera Martínez",
  "fecha": "2026-04-04T00:00:00.000Z",
  "frase_amor": "Será un día muy especial y quiero que nos acompañen a celebrarlo",
  "padres": {
    "mama": "Elena Martínez Alejo",
    "papa": "Mario Olvera"
  },
  "ceremonia": {
    "hora": "6:00 P.M.",
    "lugar": "<b>Iglesia de la Santa Cruz</b>, Calle Paseo de los Pelicanos 40883, Ixtapa Gro. (frente a la Moraleja)",
    "lat": "17.665128",
    "lng": "-101.597448"
  },
  "recepcion": {
    "hora": "8:00 P.M.",
    "lugar": "<b>Hotel SunScape Ixtapa </b>, Blvd. Paseo Ixtapa S/N-A, 40884 Zihuatanejo, Gro Blvd. Paseo Ixtapa S/N-A, 40884 Zihuatanejo, Gro.",
    "lat": "17.661152",
    "lng": "-101.603728"
  },
  "itinerario": [],
  "cover": "/quince/covers/nvita-quince-clasica/cover.webp",
  "galeria": ["/quince/galeria/nvita-quince-clasica/galeria/0.webp", "/quince/galeria/nvita-quince-clasica/galeria/1.webp", "/quince/galeria/nvita-quince-clasica/galeria/2.webp", "/quince/galeria/nvita-quince-clasica/galeria/3.webp"],
  "imagenesSolitarias": ["/quince/solitarias/nvita-quince-clasica/imagenesSolitarias/0.webp", "/quince/solitarias/nvita-quince-clasica/imagenesSolitarias/1.webp"],
  "frase_regalos": "Tu presencia ya me alegrará, si además me quieres dar un regalo más",
  "regalos": [],
  "tipoRegalos": ["lluvia", "transferencias"],
  "beneficiario": "Nombre del beneficiario",
  "banco": "HSBC",
  "cuenta": "18238348292",
  "progresoPorcentaje": 15,
  "progresoFrase": "Cargando XV años, solo faltas, ayúdanos a llegar al 100%",
  "progresoMostrarSiempre": true,
  "consideraciones": ["Agradeceré tu puntualidad", "No llevar bebes", "Mujeres no vestir de rosa"],
  "vestimenta": "Formal casual",
  "coloresVestimenta": ["#2C3E50", "#E74C3C", "#ECF0F1"],
  "paleta": "invierno",
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

const url = "src/content/quince/nvita-quince-clasica.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/nvita-quince-clasica.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/nvita-quince-clasica.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
