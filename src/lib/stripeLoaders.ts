import type { Loader } from "astro/loaders";
import Stripe from "stripe";

type StripeListOptions = {
  limit?: number;
  [key: string]: unknown;
};

type StripeListResponse = {
  data: Stripe.Product[] | Stripe.Price[];
  has_more: boolean;
};

type StripeListFunction = (params: Record<string, unknown>) => Promise<StripeListResponse>;

async function loadStripeItems(
  list: StripeListFunction,
  options: StripeListOptions,
  context: Parameters<NonNullable<Loader["load"]>>[0],
  metaKey: string,
  renderItem?: (item: Stripe.Product | Stripe.Price) => string | null
) {
  const { logger, parseData, store, meta, generateDigest } = context;
  const { limit = Infinity, ...queryParams } = options;
  let loaded = 0;
  let hasMore = true;
  let startingAfter: string | undefined;
  const lastUpdated = meta.get(metaKey);

  if (lastUpdated) {
    queryParams.created = { gt: Number.parseInt(lastUpdated, 10) };
  }

  while (hasMore && loaded < limit) {
    const params = {
      ...queryParams,
      limit: Math.min(100, limit - loaded),
      ...(startingAfter ? { starting_after: startingAfter } : {}),
    };
    const response = await list(params);

    for (const item of response.data) {
      if (loaded >= limit) break;
      const data = await parseData({ id: item.id, data: item });
      const storeItem: {
        id: string;
        data: typeof data;
        digest: string;
        rendered?: { html: string };
      } = { id: item.id, data, digest: generateDigest(data) };
      const rendered = renderItem?.(item);

      if (rendered) {
        storeItem.rendered = { html: rendered };
      }

      store.set(storeItem);
      loaded += 1;
    }

    hasMore = response.has_more && loaded < limit;
    startingAfter = response.data.at(-1)?.id;
    if (response.data.length > 0) {
      const latestUpdated = Math.max(...response.data.map((item) => item.created));
      meta.set(metaKey, latestUpdated.toString());
    }
    logger.info(`Loaded ${loaded} items from Stripe so far`);
  }

  logger.info(`Finished loading ${loaded} items from Stripe`);
}

export function stripeProductLoader(stripe: Stripe, options: StripeListOptions = {}): Loader {
  return {
    name: "stripe-product-loader",
    load: (context) =>
      loadStripeItems(
        stripe.products.list.bind(stripe.products) as StripeListFunction,
        options,
        context,
        "stripe-products-last-updated",
        (product) => ("description" in product ? product.description || null : null)
      ),
  };
}

export function stripePriceLoader(stripe: Stripe, options: StripeListOptions = {}): Loader {
  return {
    name: "stripe-price-loader",
    load: (context) =>
      loadStripeItems(
        stripe.prices.list.bind(stripe.prices) as StripeListFunction,
        options,
        context,
        "stripe-prices-last-updated"
      ),
  };
}