import { i as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CohHI9gX.mjs';
import 'clsx';

const frontmatter = {
  "version": "Lux",
  "draft": false,
  "titulo": "Cloe Guadalupe Uraga Millan",
  "whatsapp": "7551009248",
  "email": "yunuelgerman@gmail.com",
  "quinceanera": "Cloe Guadalupe Uraga Millan",
  "fecha": "2026-03-21T00:00:00.000Z",
  "frase_amor": "Con Fe, Amor y Esperanza en el corazón, doy gracias a Dios por estos quince años de vida y te invito a ser parte de un día que guardaré para siempre en mi memoria. ",
  "padres": {
    "mama": "Madre de la Quinceañera",
    "papa": "Padre de la Quinceañera"
  },
  "padrinos": ["María Elena González Martínez", "José Luis Ramírez Torres", "Ana Patricia Hernández Sánchez"],
  "ceremonia": {
    "hora": "18:00",
    "lugar": "Parroquia Santa Cruz y la Virgen del Rosario, ubicada entre calles Paseo de los Pelicanos y Calle la Salitrera, Sección Residencial III, Ixtapa, Guerrero.",
    "lat": "17.6649452",
    "lng": "-101.5999765"
  },
  "recepcion": {
    "hora": "19:00",
    "lugar": "Salón de fiestas \"Bambú\", ubicado en Calle Palo Rojo número 15 y 17, Supermanzana XIX, Colonia el Hujal, Zihuatanejo, Guerrero.",
    "lat": "17.6519837",
    "lng": "-101.5405459"
  },
  "itinerario": [{
    "titulo": "Ceremonia religiosa",
    "lugar": "Parroquia de la Santa Cruz Ixtapa ",
    "hora": "18:00"
  }, {
    "titulo": "Recepción",
    "lugar": "Salón de fiestas Bambú",
    "hora": "19:00"
  }, {
    "titulo": "Baile de la Quinceañera",
    "hora": "21:00"
  }],
  "cover": "/quince/covers/cloe-guadalupe/cover.webp",
  "audioMusica": "/quince/audios/cloe-guadalupe/audioMusica.mp3",
  "galeria": ["/quince/galeria/cloe-guadalupe/galeria/0.webp", "/quince/galeria/cloe-guadalupe/galeria/1.webp"],
  "imagenesSolitarias": ["/quince/solitarias/cloe-guadalupe/imagenesSolitarias/0.png", "/quince/solitarias/cloe-guadalupe/imagenesSolitarias/1.png"],
  "regalos": [],
  "tipoRegalos": ["lluvia", "transferencias"],
  "beneficiario": "Nombre del beneficiario",
  "banco": "Banco Muestra",
  "cuenta": "123456789",
  "progresoPorcentaje": 80,
  "progresoMostrarSiempre": false,
  "consideraciones": ["El color azul queda reservado exclusivamente para la quinceañera."],
  "vestimenta": "Formal",
  "coloresVestimenta": [],
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

const url = "src/content/quince/cloe-guadalupe.mdx";
const file = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/cloe-guadalupe.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/claud/OneDrive/Escritorio/NvitacionesWeb/nvite-home/src/content/quince/cloe-guadalupe.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
