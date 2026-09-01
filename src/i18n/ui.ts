import esCommon from "./locales/es/common.json";
import esLanding from "./locales/es/landing.json";
import esPanel from "./locales/es/panel.json";
import esCheckout from "./locales/es/checkout.json";
import esInvitaciones from "./locales/es/invitaciones.json";

import enCommon from "./locales/en/common.json";
import enLanding from "./locales/en/landing.json";
import enPanel from "./locales/en/panel.json";
import enCheckout from "./locales/en/checkout.json";
import enInvitaciones from "./locales/en/invitaciones.json";

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    ...esCommon,
    ...esLanding,
    ...esPanel,
    ...esCheckout,
    ...esInvitaciones,
  },
  en: {
    ...enCommon,
    ...enLanding,
    ...enPanel,
    ...enCheckout,
    ...enInvitaciones,
  },
} as const;

export type TranslationKey = keyof typeof ui['es'];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function `t(key, params?)` for the given language.
 * Supports string interpolation for variables e.g. `{count}`, `{nombre}`, etc.
 */
export function useTranslations(lang?: string | null) {
  const activeLang: Lang = (lang === 'en' || lang === 'es') ? lang : defaultLang;

  return function t(key: TranslationKey, params?: Record<string, string | number>): string {
    const dictionary = ui[activeLang] as Record<string, string>;
    const defaultDictionary = ui[defaultLang] as Record<string, string>;
    
    let text = dictionary[key] ?? defaultDictionary[key] ?? key;

    if (params) {
      Object.entries(params).forEach(([paramKey, val]) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(val));
      });
    }

    return text;
  };
}
