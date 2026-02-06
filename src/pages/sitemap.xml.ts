import type { APIRoute } from 'astro';
import invitaciones from './nvitaciones/nvitaciones.json';

const site = 'https://nvitaciones.com';

interface SitemapEntry {
  url: string;
  changefreq: string;
  priority: number;
  lastmod?: string;
}

export const GET: APIRoute = async () => {
  // Páginas estáticas principales
  const staticPages: SitemapEntry[] = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/bodas', changefreq: 'monthly', priority: 0.9 },
    { url: '/quince', changefreq: 'monthly', priority: 0.9 },
    { url: '/invitaciones-pdf', changefreq: 'monthly', priority: 0.8 },
    { url: '/invitaciones-quince', changefreq: 'monthly', priority: 0.8 },
    { url: '/terminos-condiciones', changefreq: 'yearly', priority: 0.6 },
  ];

  // Páginas dinámicas de invitaciones
  const invitacionesPages: SitemapEntry[] = invitaciones.map((inv) => ({
    url: `/nvitaciones/${inv.slug}`,
    changefreq: 'monthly',
    priority: 0.85,
  }));

  // Combinar todas las páginas
  const allPages = [...staticPages, ...invitacionesPages];

  // Generar XML del sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => `  <url>
    <loc>${site}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
