// Read-only inventory: never contacts Stripe, creates checkouts or changes demos.
import { readFileSync, existsSync, statSync } from 'node:fs';
import matter from 'gray-matter';
import { parse } from 'devalue';

const catalog = JSON.parse(readFileSync('src/pages/nvitaciones/nvitaciones.json', 'utf8'));
const cachePath = '.astro/data-store.json';
const cache = existsSync(cachePath) ? parse(readFileSync(cachePath, 'utf8')) : null;
const products = cache?.get('productos');
const prices = [...(cache?.get('precios')?.values() ?? [])].map(entry => entry.data);
const combinations = catalog.map(item => {
  const demos = Object.fromEntries(['es', 'en'].map(language => {
    const url = typeof item.muestra === 'string' ? item.muestra : item.muestra?.[language];
    if (!url) return [language, { available: false }];
    const pathname = new URL(url, 'https://nvitaciones.com').pathname;
    const file = `src/content${pathname}.mdx`;
    const frontmatter = existsSync(file) ? matter(readFileSync(file, 'utf8')).data : null;
    return [language, {
      url, file, exists: !!frontmatter,
      package: frontmatter?.version ?? null,
      design: frontmatter?.theme?.name ?? null,
      draft: frontmatter?.draft ?? null,
      language: frontmatter?.idioma ?? 'es',
    }];
  }));
  const product = products?.get(item.id)?.data;
  const activePrices = prices.filter(price => price.active !== false &&
    (typeof price.product === 'string' ? price.product : price.product?.id) === item.id);
  const resolvedPrices = Object.fromEntries(['es', 'en'].map(language => {
    const currency = language === 'en' ? 'usd' : 'mxn';
    const defaultPrice = prices.find(price => price.id === product?.default_price && price.active !== false);
    const matching = activePrices.filter(price => price.currency === currency);
    // Mirrors getActivePriceForLang; expose fallback rather than silently labeling it USD.
    const selected = defaultPrice?.currency === currency ? defaultPrice : matching.at(-1) ?? defaultPrice;
    return [language, selected ? {
      id: selected.id, currency: selected.currency, amount: selected.unit_amount / 100,
      currencyMatches: selected.currency === currency,
    } : null];
  }));
  return {
    legacySlug: item.slug, event: item.categoria.toLowerCase(), package: item.version,
    productId: item.id, cachedActive: product?.active ?? null, demos,
    cachedResolvedPrices: resolvedPrices,
    activePriceCurrencies: activePrices.map(price => price.currency),
    imageFilesExist: item.imagenes.every(path => existsSync(path.replace('../../assets/', 'src/assets/'))),
  };
});
console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  verification: 'Local content and cached Stripe data only; no HTTP/render/guest database verification.',
  cacheFileModifiedAt: cache ? statSync(cachePath).mtime.toISOString() : null,
  combinations,
  unpublishedDesigns: ['bodas', 'quince'].map(event => {
    const file = `src/content/${event}/brisa-demo.mdx`;
    const fm = matter(readFileSync(file, 'utf8')).data;
    return { event, file, package: fm.version, design: fm.theme?.name, draft: fm.draft };
  }),
}, null, 2));
