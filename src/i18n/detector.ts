export type Lang = 'es' | 'en';

export const DEFAULT_LANG: Lang = 'es';
export const SUPPORTED_LANGS: Lang[] = ['es', 'en'];
export const LANG_COOKIE_NAME = 'nvite_lang';

/**
 * Detects the target language from cookies or Accept-Language header.
 * 
 * Rules:
 * 1. If explicit cookie exists (`nvite_lang=es|en`), use it.
 * 2. If Accept-Language starts with 'es' (Spanish), use 'es'.
 * 3. Any other language (en, ja, hi, it, fr, etc.) falls back to 'en' (international standard).
 */
export function detectLanguage(request?: Request, cookieLang?: string | null): Lang {
  // 1. Check explicit cookie preference
  if (cookieLang && SUPPORTED_LANGS.includes(cookieLang as Lang)) {
    return cookieLang as Lang;
  }

  // 2. Check Accept-Language header
  if (request) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      // Clean and parse accept-language (e.g. "es-MX,es;q=0.9,en;q=0.8" or "ja,en-US;q=0.9")
      const primaryLang = acceptLanguage
        .split(',')[0]
        ?.trim()
        ?.toLowerCase()
        ?.split('-')[0]
        ?.split(';')[0];

      if (primaryLang === 'es') {
        return 'es';
      } else {
        // Any non-Spanish browser gets English as international fallback
        return 'en';
      }
    }
  }

  return DEFAULT_LANG;
}
