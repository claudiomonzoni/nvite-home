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

export const getProductPrice = async (
  product: CollectionEntry<"productos">,
  lang: string = "es"
) => {
  if (!product.data.default_price) return lang === "en" ? "Price not available" : "Sin precio";

  const targetCurrency = lang === "en" ? "usd" : "mxn";
  const allPrices = await getCollection("precios");

  // First try to find a price matching currency for this product
  let priceItem = allPrices.find((p) => {
    const currencyMatch = p.data.currency.toLowerCase() === targetCurrency;
    const productMatch = (p.data as any).product === product.id || p.id === product.data.default_price;
    return currencyMatch && productMatch;
  });

  // Fallback to default price entry
  if (!priceItem && product.data.default_price) {
    priceItem = await getEntry("precios", product.data.default_price);
  }

  if (!priceItem) return lang === "en" ? "Price not available" : "Sin precio";

  const isUsd = priceItem.data.currency.toLowerCase() === "usd";
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
  const targetCurrency = lang === "en" ? "usd" : "mxn";
  const allPrices = await getCollection("precios");

  const match = allPrices.find((p) => {
    const currencyMatch = p.data.currency.toLowerCase() === targetCurrency;
    const productMatch = (p.data as any).product === product.id;
    return currencyMatch && productMatch;
  });

  return match?.id || product.data.default_price || undefined;
};