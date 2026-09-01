import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export type FinalCartItem = {
  product: CollectionEntry<"productos">;
  quantity: number;
};

export const getTotalCartItems = async (
  cartItems: CollectionEntry<"productos">["id"][]
) => {
  const producto = await getCollection("productos");

  const uniqueCartItems = Array.from(new Set(cartItems));

  const finalCartItems = uniqueCartItems.map((id) => {
    return {
      product: producto.find((p) => p.id === id),
      quantity: cartItems.filter((i) => i === id).length,
    };
  }) as FinalCartItem[];

  return finalCartItems;
};

export const getActivePriceForLang = async (
  product: CollectionEntry<"productos">,
  lang: string = "es"
): Promise<CollectionEntry<"precios"> | undefined> => {
  if (!product) return undefined;

  const targetCurrency = lang === "en" ? "usd" : "mxn";
  const allPrices = await getCollection("precios");

  // 1. Si el default_price coincide con la moneda objetivo y está activo, es la máxima prioridad
  if (product.data.default_price) {
    const defaultPrice = allPrices.find(
      (p) => p.id === product.data.default_price && (p.data as any).active !== false
    );
    if (defaultPrice && defaultPrice.data.currency?.toLowerCase() === targetCurrency) {
      return defaultPrice;
    }
  }

  // 2. Buscar precio ACTIVO que coincida con la moneda y el ID de producto
  const activeMatchingPrices = allPrices.filter((p) => {
    const isActive = (p.data as any).active !== false;
    const currencyMatch = p.data.currency?.toLowerCase() === targetCurrency;
    const prodId = typeof (p.data as any).product === "object"
      ? (p.data as any).product?.id
      : (p.data as any).product;
    return isActive && currencyMatch && prodId === product.id;
  });

  if (activeMatchingPrices.length > 0) {
    return activeMatchingPrices[activeMatchingPrices.length - 1];
  }

  // 3. Fallback: default_price activo del producto
  if (product.data.default_price) {
    const defaultPrice = allPrices.find(
      (p) => p.id === product.data.default_price && (p.data as any).active !== false
    );
    if (defaultPrice) return defaultPrice;

    const entry = await getEntry("precios", product.data.default_price);
    if (entry && (entry.data as any).active !== false) return entry;
  }

  return undefined;
};

export const getProductPrice = async (
  product: CollectionEntry<"productos">,
  lang: string = "es"
) => {
  const priceItem = await getActivePriceForLang(product, lang);
  if (!priceItem) return lang === "en" ? "Price not available" : "Sin precio";

  const isUsd = priceItem.data.currency?.toLowerCase() === "usd";
  const locale = isUsd ? "en-US" : "es-MX";

  return (priceItem.data.unit_amount / 100).toLocaleString(locale, {
    style: "currency",
    currency: priceItem.data.currency.toUpperCase(),
  });
};

export const getProductPriceIdForLang = async (
  product: CollectionEntry<"productos">,
  lang: string = "es"
): Promise<string | undefined> => {
  const priceItem = await getActivePriceForLang(product, lang);
  return priceItem?.id || product.data.default_price || undefined;
};