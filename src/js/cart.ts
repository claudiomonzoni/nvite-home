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

export const getProductPrice = async (product: CollectionEntry<"productos">) => {
  if (!product.data.default_price) return "Price not available";
  
  const priceItem = await getEntry("precios", product.data.default_price);

  return priceItem
    ? (priceItem.data.unit_amount / 100).toLocaleString("en-US", {
        style: "currency",
        currency: priceItem?.data.currency,
      })
    : "Price not available";
};