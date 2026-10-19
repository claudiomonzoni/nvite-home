import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

export function hasLocalInvitationAsset(path: string) {
  return import.meta.env.DEV && path.startsWith('/') && !path.includes('..') &&
    existsSync(new URL(`../../public${path}`, import.meta.url));
}

// Local editing previews the working tree; deployed invitations still use GitHub.
export async function localInvitation(event: 'bodas' | 'quince', slug: string) {
  if (!import.meta.env.DEV || !/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
  try {
    return await readFile(new URL(`../content/${event}/${slug}.mdx`, import.meta.url), 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
}
