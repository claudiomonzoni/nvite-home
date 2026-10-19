import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import invitaciones from './nvitaciones/nvitaciones.json';

const site = 'https://nvitaciones.com';

interface AlternateLink {
  language: 'es-MX' | 'en-US';
  url: string;
}

interface SitemapEntry {
  url: string;
  lastmod?: string;
  alternates?: AlternateLink[];
}

export const prerender = true;

const absoluteUrl = (path: string) => new URL(path, site).href;
const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const articlePath = (post: { data: { language: string; slug?: string }; id: string }) => {
  const slug = post.data.slug || post.id.split('/').at(-1) || post.id;
  const prefix = post.data.language === 'en' ? '/en/blog' : '/blog';
  return `${prefix}/${slug}`;
};

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const postsByTranslation = new Map<string, typeof posts>();

  for (const post of posts) {
    const key = post.data.translationKey;
    if (!key) continue;
    const translatedPosts = postsByTranslation.get(key) || [];
    translatedPosts.push(post);
    postsByTranslation.set(key, translatedPosts);
  }

  const blogIndexAlternates: AlternateLink[] = [
    { language: 'es-MX', url: absoluteUrl('/blog') },
    { language: 'en-US', url: absoluteUrl('/en/blog') },
  ];

  const editorialPages: SitemapEntry[] = [
    { url: absoluteUrl('/blog'), alternates: blogIndexAlternates },
    { url: absoluteUrl('/en/blog'), alternates: blogIndexAlternates },
    ...posts.map((post): SitemapEntry => {
      const translations = post.data.translationKey
        ? postsByTranslation.get(post.data.translationKey) || []
        : [];
      const alternates = translations.length > 1
        ? translations.map((translation): AlternateLink => ({
            language: translation.data.language === 'en' ? 'en-US' : 'es-MX',
            url: absoluteUrl(articlePath(translation)),
          }))
        : undefined;

      return {
        url: absoluteUrl(articlePath(post)),
        lastmod: (post.data.updatedAt || post.data.publishedAt).toISOString().slice(0, 10),
        alternates,
      };
    }),
  ];

  // Index only public landing pages and invitation product previews.
  const publicPages: SitemapEntry[] = [
    ...['/', '/bodas', '/invitaciones-quince', '/invitaciones-pdf']
      .map((path) => ({ url: absoluteUrl(path) })),
    ...invitaciones.map((inv) => ({
      url: absoluteUrl(`/nvitaciones/${inv.slug}`),
    })),
  ];

  const uniquePages = new Map<string, SitemapEntry>();
  for (const page of [...publicPages, ...editorialPages]) {
    uniquePages.set(page.url, page);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...uniquePages.values()]
  .map((page) => `  <url>
    <loc>${escapeXml(page.url)}</loc>${page.lastmod ? `
    <lastmod>${page.lastmod}</lastmod>` : ''}${page.alternates?.map((alternate) => `
    <xhtml:link rel="alternate" hreflang="${alternate.language}" href="${escapeXml(alternate.url)}" />`).join('') || ''}
  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
