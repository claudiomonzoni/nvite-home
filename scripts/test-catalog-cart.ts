import assert from 'node:assert/strict';
import { normalizeCart, addSelection, serializeCart } from '../src/js/cart-state';
import { selectionMetadata, readSelectionMetadata } from '../src/lib/checkout-selection';
import { findCombination, previewUrl } from '../src/lib/catalog';
import { resolveDemoTheme } from '../src/lib/demo-theme';
import matter from 'gray-matter';
import { readFileSync } from 'node:fs';
import { productPath } from '../src/lib/catalog-navigation';

const base = 'prod_Q42WJO0oMaU98G';
const elegant = 'prod_SZwAeRXTJGqFO8';
const xv = 'prod_QLJkNCXvs8egN9';
const migrated = normalizeCart(JSON.stringify([base, elegant, elegant, 'prod_UcVoRiVmcT6ZQM']));
assert.deepEqual(migrated, [
  { productId: base, design: 'base', quantity: 1 },
  { productId: base, design: 'elegante', quantity: 2 },
  { productId: xv, design: 'elegante', quantity: 1 },
]);
assert.deepEqual(normalizeCart(serializeCart(migrated)), migrated);
assert.deepEqual(addSelection(migrated, base, 'elegante'), migrated);
assert.equal(addSelection(migrated, base, 'elegante', true)[1].quantity, 3);
assert.deepEqual(normalizeCart('{broken'), []);
assert.deepEqual(normalizeCart({ version: 2, lines: [{ productId: base, design: 'unknown', quantity: 1 }] }), []);
const brisaCart = addSelection(migrated, base, 'brisa');
assert.equal(brisaCart.at(-1)?.design, 'brisa');
assert.equal(brisaCart.at(-1)?.productId, base);
assert.equal(readSelectionMetadata(selectionMetadata(brisaCart)).at(-1)?.design, 'brisa');
const brisa = findCombination(base, 'brisa')!;
assert.equal(new URL(previewUrl(brisa, 'es'), 'https://nvitaciones.com').searchParams.get('tema'), 'brisa');
assert.throws(() => previewUrl(brisa, 'en'));
assert.deepEqual(normalizeCart({ version: 2, lines: [{ productId: 'prod_QNpO0T7kRp1zkL', design: 'brisa', quantity: 1 }] }), []);
assert.deepEqual(normalizeCart({ version: 2, lines: [{ productId: base, design: 'base', quantity: -1 }] }), []);
assert.deepEqual(normalizeCart({ version: 2, lines: [{ productId: 'prod_QNpO0T7kRp1zkL', design: 'elegante', quantity: 1 }] }), []);
const metadata = selectionMetadata(migrated);
const selections = readSelectionMetadata(metadata);
assert.equal(selections.length, 3);
assert.equal(selections[1].design, 'elegante');
assert.equal(selections[1].quantity, 2);
assert.ok(Object.values(metadata).every(value => value.length <= 500));
assert.equal(readSelectionMetadata({ catalog_version: '1', catalog_line_0: '{broken' }).length, 0);
assert.equal(readSelectionMetadata({ catalog_version: '1', catalog_line_0: JSON.stringify({ productId: base, event: 'quince', package: 'lux', design: 'base', quantity: 1 }) }).length, 0);
console.log('Catalog/cart: legacy migration, separate designs, round trip, invalid input and payment metadata passed.');

for (const [event, slug, elegantSlug] of [
  ['bodas', 'invitacion-bodas-lux', 'nvitacion-bodas-lux-elegante'],
  ['quince', 'invitacion-quince-lux', 'elegante-lux-xv'],
] as const) {
  const raw = readFileSync(`src/content/${event}/${slug}.mdx`, 'utf8');
  const source = matter(raw).data.theme;
  for (const design of ['base', 'brisa', 'base', 'elegante', 'brisa', 'elegante', 'base']) {
    const theme = resolveDemoTheme(event, slug, new URLSearchParams({ tema: design }), source);
    assert.equal(theme.name, design);
    assert.notEqual(theme, source);
    assert.equal(matter(raw).data.theme.name, 'base');
  }
  const elegant = matter(readFileSync(`src/content/${event}/${elegantSlug}.mdx`, 'utf8')).data.theme;
  assert.equal(resolveDemoTheme(event, elegantSlug, new URLSearchParams(), elegant).name, 'elegante');
  assert.equal(resolveDemoTheme(event, slug, new URLSearchParams(), { name: 'brisa' }).name, 'base');
  assert.equal(resolveDemoTheme(event, elegantSlug, new URLSearchParams(), { name: 'base' }).name, 'elegante');
  assert.equal(resolveDemoTheme(event, 'customer-invite', new URLSearchParams({ tema: 'base' }), { name: 'elegante' }).name, 'elegante');
  assert.equal(resolveDemoTheme(event, slug, new URLSearchParams({ tema: 'brisa', lang: 'en' }), source).name, 'base');
}
for (const design of ['base', 'elegante', 'brisa']) {
  const combination = findCombination(base, design)!;
  const url = new URL(previewUrl(combination, 'es'), 'https://nvitaciones.com');
  assert.equal(url.searchParams.get('tema'), design);
  const slug = url.pathname.split('/').at(-1)!;
  assert.equal(resolveDemoTheme('bodas', slug, url.searchParams, { name: 'base' }).name, design);
}
console.log('Demo themes: Base/Brisa/Elegante sequence, cached frontmatter isolation, URLs and customer invitations passed.');

assert.equal(productPath(elegant), '/nvitaciones/invitacion-bodas-lux?tema=elegante');
assert.equal(productPath(base), '/nvitaciones/invitacion-bodas-lux?tema=base');
assert.equal(productPath(base, 'brisa'), '/nvitaciones/invitacion-bodas-lux?tema=brisa');
assert.equal(productPath('prod_QNpO0T7kRp1zkL'), '/nvitaciones/invitacion-bodas-clasica?tema=base');
assert.equal(productPath('prod_QNpXQx0LWRjRFh'), '/nvitaciones/invitacion-bodas-esencial');
assert.equal(productPath('prod_UcVoRiVmcT6ZQM'), '/nvitaciones/elegante-lux-xv');
console.log('Theme gallery links: each wedding theme enters its package page with the correct selection.');
