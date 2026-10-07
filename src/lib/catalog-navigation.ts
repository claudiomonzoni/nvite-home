import { catalog } from './catalog';

// Preserve theme cards; each wedding card enters the package page with its theme selected.
export function productPath(productId: string, design?: string) {
  const item = catalog.find(item => item.legacyProductId === productId);
  if (!item) return `/nvitaciones/${productId}`;
  if (item.event !== 'bodas' || item.packageId === 'esencial') return `/nvitaciones/${item.slug}`;
  return `/nvitaciones/${item.canonicalSlug}?tema=${encodeURIComponent(design ?? item.design)}`;
}
