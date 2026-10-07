import { catalog } from './catalog';

// Return a fresh theme: gray-matter shares cached frontmatter between requests.
// Overrides apply only to the configured public samples, never customer invitations.
export function resolveDemoTheme(
  event: 'bodas' | 'quince', slug: string, params: URLSearchParams,
  source: { name?: string; [key: string]: unknown } | undefined,
) {
  const language = params.get('lang') === 'en' ? 'en' : 'es';
  const baseline = catalog.find(item => item.event === event && item.design !== 'brisa' &&
    new URL(item.muestra[language], 'https://nvitaciones.com').pathname === `/${event}/${slug}`);
  const requested = params.get('tema');
  const selected = baseline && catalog.find(item => item.event === event &&
    item.packageId === baseline.packageId && item.design === requested && item.languages.includes(language));
  const name = selected?.design ?? baseline?.design ?? (source?.name === 'glass' ? 'brisa' : source?.name ?? 'base');
  return { ...source, name };
}
