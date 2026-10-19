import { findCombination, type Design } from '../lib/catalog';

export type CartLine = { productId: string; design?: Design; quantity: number };
export const lineKey = (line: Pick<CartLine, 'productId' | 'design'>) => `${line.productId}:${line.design ?? ''}`;

export function normalizeCart(value: unknown): CartLine[] {
  let parsed: any = value;
  try {
    if (typeof value === 'string') parsed = JSON.parse(value);
  } catch { return []; }
  const raw = Array.isArray(parsed) ? parsed : parsed?.version === 2 && Array.isArray(parsed.lines) ? parsed.lines : [];
  const lines = new Map<string, CartLine>();
  for (const item of raw.slice(0, 100)) {
    const legacy = typeof item === 'string';
    const id = legacy ? item : item?.productId;
    if (typeof id !== 'string' || !/^prod_[A-Za-z0-9]+$/.test(id)) continue;
    const combo = findCombination(id, legacy ? undefined : item.design);
    // A configured invitation cannot accept an arbitrary or incompatible design.
    if (!combo && (findCombination(id) || item?.design !== undefined)) continue;
    const quantity = legacy ? 1 : item.quantity;
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) continue;
    const line: CartLine = { productId: combo?.productId ?? id,
      ...(combo ? { design: combo.design } : {}), quantity };
    const key = lineKey(line);
    const previous = lines.get(key);
    if (previous) previous.quantity = Math.min(20, previous.quantity + quantity);
    else if (lines.size < 20) lines.set(key, line);
  }
  return [...lines.values()];
}

export const cartCount = (lines: CartLine[]) => lines.reduce((sum, line) => sum + line.quantity, 0);
export const serializeCart = (lines: CartLine[]) => JSON.stringify({ version: 2, lines: normalizeCart({ version: 2, lines }) });

export function addSelection(lines: CartLine[], productId: string, design?: string, increment = false) {
  const selection = normalizeCart({ version: 2, lines: [{ productId, design, quantity: 1 }] })[0];
  if (!selection) return lines;
  const copy = lines.map(line => ({ ...line }));
  const existing = copy.find(line => lineKey(line) === lineKey(selection));
  if (existing && increment) existing.quantity = Math.min(20, existing.quantity + 1);
  else if (!existing && copy.length < 20) copy.push(selection);
  return copy;
}
