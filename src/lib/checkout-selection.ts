import { findCombination } from './catalog';
import type { CartLine } from '../js/cart-state';

// Each bounded line gets its own metadata value, rather than one unbounded JSON blob.
export function selectionMetadata(lines: CartLine[]): Record<string, string> {
  const metadata: Record<string, string> = { catalog_version: '1' };
  lines.forEach((line, index) => {
    const combination = findCombination(line.productId, line.design);
    if (!combination) return;
    const snapshot = { productId: combination.productId, event: combination.event,
      package: combination.packageId, design: combination.design, quantity: line.quantity };
    const value = JSON.stringify(snapshot);
    if (index >= 20 || value.length > 500) throw new Error('Cart selection exceeds metadata limits');
    metadata[`catalog_line_${index}`] = value;
  });
  return metadata;
}

export function readSelectionMetadata(metadata: Record<string, string> | null) {
  if (metadata?.catalog_version !== '1') return [];
  return Object.entries(metadata).filter(([key]) => /^catalog_line_\d+$/.test(key)).flatMap(([, value]) => {
    try {
      const row = JSON.parse(value);
      const combination = findCombination(row.productId, row.design);
      if (!combination || combination.event !== row.event || combination.packageId !== row.package ||
        !Number.isInteger(row.quantity) || row.quantity < 1 || row.quantity > 20) return [];
      return [{ ...combination, quantity: row.quantity }];
    } catch { return []; }
  });
}
