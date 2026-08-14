import { baseLocale, locales } from "#shared/internationalization/runtime.js"

export type Locale = (typeof locales)[number]

export function otherLocale(locale: Locale): Locale {
  return locales.find((candidate) => candidate !== locale) ?? baseLocale
}

/**
 * Builds a locale-aware path. The default locale lives at the root ("/about"), while other locales
 * are prefixed ("/es/about").
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === baseLocale) {
    return path
  }

  return path === "/" ? `/${locale}/` : `/${locale}${path}`
}
