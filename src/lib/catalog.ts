/**
 * Catálogo que consumen el selector de temas, las muestras y el carrito.
 *
 * Este archivo declara QUÉ combinaciones existen; los componentes y estilos
 * de cada tema se implementan aparte. Crear un MDX no agrega su botón aquí.
 * El JSON importado conserva los datos comerciales y las muestras originales.
 *
 * Una combinación se identifica por: evento + paquete + tema.
 * Sus idiomas disponibles se declaran en `languages` y sus URLs en `muestra`.
 * No duplicar la misma combinación para agregar otro idioma: completar sus campos.
 */
import entries from '../pages/nvitaciones/nvitaciones.json';

// 1. TEMAS: al implementar uno nuevo, agregar aquí su identificador, por ejemplo
// 'jardin'. Después registrar sus combinaciones en `catalog` y su nombre en
// `designLabel`. Este tipo por sí solo no crea opciones ni implementa el diseño.
export type Design = 'base' | 'elegante' | 'brisa';

// 2. REGISTROS EXISTENTES: transforma cada entrada del JSON en una combinación.
// `existingCatalog` es un arreglo; `.map()` y `.flatMap()` son métodos de JavaScript.
const existingCatalog = entries.map(entry => {
  // Evento: la categoría del JSON debe corresponder a Bodas o Quince.
  const event = entry.categoria.toLowerCase() as 'bodas' | 'quince';
  // Paquete o versión comercial: Clásica -> clasica, Lux -> lux.
  // Para un paquete nuevo hay que ampliar este tipo, registrar su producto Base
  // y muestras en el JSON, y revisar el selector/precios/checkout que lo consumen.
  // El `as` describe el tipo; no valida ni crea paquetes en tiempo de ejecución.
  const packageId = entry.version.toLowerCase().replace('á', 'a') as 'clasica' | 'lux' | 'esencial';
  // Compatibilidad con el JSON actual: slug con "elegante" -> Elegante;
  // cualquier otro -> Base. No añadir un tema nuevo solo al JSON: esta regla
  // lo interpretaría como Base. Registrar la variante explícitamente más abajo
  // o ampliar tanto esta identificación como la búsqueda de Base siguiente.
  const design: Design = entry.slug.includes('elegante') ? 'elegante' : 'base';
  // Base debe existir en el MISMO evento y paquete. Su ID es el que se compra,
  // aunque el visitante elija otro tema. Clásica y Lux tienen productos distintos.
  const base = entries.find(candidate => candidate.categoria === entry.categoria &&
    candidate.version === entry.version && !candidate.slug.includes('elegante'))!;
  // Base/Elegante existentes se anuncian en ambos idiomas: el JSON debe tener
  // muestras es/en válidas. Si una combinación deja de soportar un idioma,
  // ajustar `languages` para esa combinación; no dejar una URL vacía anunciada.
  // legacyProductId: ID histórico usado para reconocer enlaces/carritos anteriores.
  // productId: producto Base para comprar. canonicalSlug: ficha comercial Base.
  return { ...entry, event, packageId, design, languages: ['es', 'en'] as string[], legacyProductId: entry.id as string | undefined,
    productId: base.id, canonicalSlug: base.slug };
});


// 3. VARIANTES ADICIONALES: AQUÍ se habilitan temas, paquetes e idiomas.
// flatMap conserva cada `item` y, si cumple la condición, añade otra variante.
// Estado actual: Brisa sobre Base Lux, en español, para bodas Y quince.
// El selector comercial compartido filtra estas variantes por evento e idioma.
//
// AJUSTES HABITUALES (aplicarlos solo cuando esas muestras estén listas):
// - Brisa también en Clásica: cambiar `item.packageId === 'lux'` por
//   `['lux', 'clasica'].includes(item.packageId)`.
// - Solo bodas: añadir `item.event === 'bodas' &&` a la condición.
// - También inglés: usar `languages: ['es', 'en']` y completar `muestra.en`,
//   por ejemplo `${item.muestra.en}&tema=brisa` para reutilizar la demo Base.
// - Si la disponibilidad difiere entre eventos/paquetes, declarar idiomas y
//   URLs por combinación; no habilitar todas con una condición demasiado amplia.
// - Otro tema: conservar `item` y añadir otro objeto al arreglo `[item, ...]`,
//   con su `design`, `slug`, `languages`, `muestra` e `imagenes` propios.
//   Reutilizar `productId` y `canonicalSlug` de Base mediante `...item`.
//
// Reutilizar Base con ?tema=... evita crear otro MDX por cada presentación.
// Si la muestra necesita datos diferentes, indicar su URL real y revisar el
// mapeo de muestras públicas en `demo-theme.ts` para resolver el tema correcto.
export const catalog = existingCatalog.flatMap(item => item.packageId === 'lux' && item.design === 'base'
  // `slug` identifica esta variante; no crea una ruta o tarjeta nueva por sí solo.
  ? [item, { ...item, slug: `${item.canonicalSlug}-brisa`, design: 'brisa' as Design,
      // Los temas nuevos no necesitan otro ID histórico ni otro producto Stripe.
      languages: ['es'], legacyProductId: undefined,
      // Estas URLs Base ya llevan ?id=...&uid=...; por eso se concatena con &.
      // Para URLs distintas, usar URL/searchParams en lugar de asumir que tienen ?.
      // Inglés queda vacío porque NO está habilitado en `languages`.
      muestra: { es: `${item.muestra.es}&tema=brisa`, en: '' },
      // Recurso representativo del catálogo; los botones actuales solo usan texto.
      imagenes: ['/temas/brisa/orilla.webp'] }]
  : [item]);

// 4. NOMBRES VISIBLES: agregar aquí el nombre/traducción de cada tema nuevo.
// No cambiar los identificadores persistidos (`design`) para traducir etiquetas.
export const designLabel = (design: Design, lang: string) =>
  design === 'elegante' ? (lang === 'en' ? 'Elegant' : 'Elegante') : design === 'brisa' ? 'Brisa' : 'Base';

// 5. COMPRA: con tema busca el producto Base + diseño exactos.
// Sin tema reconoce el ID histórico, para migrar selecciones anteriores.
// El carrito guarda productId/design/quantity; checkout lleva el tema en metadata.
export function findCombination(productId: string, design?: string) {
  if (design !== undefined) {
    return catalog.find(item => item.productId === productId && item.design === design);
  }
  return catalog.find(item => item.legacyProductId === productId);
}

// 6. PREVIEW: genera la URL que InvitationSelector.astro guarda en `data-url`.
// El botón se genera automáticamente al encontrar la combinación del paquete
// e idioma; al pulsarlo, `choose()` pone esta URL en el src del iframe.
export function previewUrl(item: typeof catalog[number], lang: string) {
  // Evitar ofrecer una muestra en un idioma que la combinación no soporta.
  if (!item.languages.includes(lang === 'en' ? 'en' : 'es')) throw new Error('Design preview unavailable in this language');
  const url = new URL(item.muestra[lang === 'en' ? 'en' : 'es'], 'https://nvitaciones.com');
  // set() añade o reemplaza parámetros sin duplicarlos, preservando id/uid.
  url.searchParams.set('lang', lang === 'en' ? 'en' : 'es');
  url.searchParams.set('tema', item.design);
  return url.pathname + url.search;
}

// DESPUÉS DE EDITAR:
// - Probar el paquete/tema en cada idioma anunciado y el cambio de paquete.
// - Confirmar que el botón, la muestra y la selección del carrito coinciden.
// - Las tarjetas de /bodas e /invitaciones-quince se administran aparte;
//   no se crean con este flatMap.
// - Pruebas de lógica: node node_modules/tsx/dist/cli.mjs scripts/test-catalog-cart.ts
//   Si amplías disponibilidad, actualizar sus expectativas para el nuevo catálogo.
