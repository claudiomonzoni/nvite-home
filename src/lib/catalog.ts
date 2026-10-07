import entries from '../pages/nvitaciones/nvitaciones.json';

export type Design = 'base' | 'elegante' | 'brisa';
const existingCatalog = entries.map(entry => {
  const event = entry.categoria.toLowerCase() as 'bodas' | 'quince';
  const packageId = entry.version.toLowerCase().replace('á', 'a') as 'clasica' | 'lux' | 'esencial';
  const design: Design = entry.slug.includes('elegante') ? 'elegante' : 'base';
  const base = entries.find(candidate => candidate.categoria === entry.categoria &&
    candidate.version === entry.version && !candidate.slug.includes('elegante'))!;
  return { ...entry, event, packageId, design, languages: ['es', 'en'] as string[], legacyProductId: entry.id as string | undefined,
    productId: base.id, canonicalSlug: base.slug };
});


// Brisa reuses the Spanish Lux sample's data and product; only its presentation changes.
export const catalog = existingCatalog.flatMap(item => item.packageId === 'lux' && item.design === 'base'
  ? [item, { ...item, slug: `${item.canonicalSlug}-brisa`, design: 'brisa' as Design,
      languages: ['es'], legacyProductId: undefined,
      muestra: { es: `${item.muestra.es}&tema=brisa`, en: '' },
      imagenes: ['/temas/brisa/orilla.webp'] }]
  : [item]);

export const designLabel = (design: Design, lang: string) =>
  design === 'elegante' ? (lang === 'en' ? 'Elegant' : 'Elegante') : design === 'brisa' ? 'Brisa' : 'Base';

export function findCombination(productId: string, design?: string) {
  if (design !== undefined) {
    return catalog.find(item => item.productId === productId && item.design === design);
  }
  return catalog.find(item => item.legacyProductId === productId);
}

export function previewUrl(item: typeof catalog[number], lang: string) {
  if (!item.languages.includes(lang === 'en' ? 'en' : 'es')) throw new Error('Design preview unavailable in this language');
  const url = new URL(item.muestra[lang === 'en' ? 'en' : 'es'], 'https://nvitaciones.com');
  url.searchParams.set('lang', lang === 'en' ? 'en' : 'es');
  url.searchParams.set('tema', item.design);
  return url.pathname + url.search;
}
