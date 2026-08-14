import en from "./translations/en.json"
import es from "./translations/es.json"

export const LOCALES = ["en", "es"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

const translations: Record<Locale, typeof en> = { en, es }

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en"
}

/**
 * Builds a locale-aware path. The default locale lives at the root ("/about"), while other locales
 * are prefixed ("/es/about").
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) {
    return path
  }

  return path === "/" ? `/${locale}/` : `/${locale}${path}`
}
