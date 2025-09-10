import { Plausible } from "@adel/analytics/web"
import {
  hasLocale,
  type Locale,
  routing,
} from "@adel/internationalization/nextjs"
import { ThemeToggle } from "@adel/ui/components/theme"
import {
  getTranslations,
  setRequestLocale,
} from "@init/internationalization/nextjs/server"
import { notFound } from "next/navigation"
import Document from "~/shared/components/document"
import { LocaleToggle } from "~/shared/components/locale-toggle"
import Providers from "~/shared/components/providers"

import "@adel/ui/globals.css"
import type { Metadata } from "next"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(
  params: Promise<{ locale: Locale }>
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "web.metadata" })

  return {
    title: t("title"),
    description: "Adel Rodriguez's personal website",
    icons: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧔🏻‍♂️</text></svg>",
      },
    ],
  }
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <Document locale={locale}>
      <Plausible domain="adel.do" />
      <Providers>
        <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-4">
          <header className="absolute top-4 right-4 flex justify-end gap-2">
            <ThemeToggle />
            <LocaleToggle />
          </header>
          <div className="flex flex-1 items-center justify-center">
            {children}
          </div>
        </div>
      </Providers>
    </Document>
  )
}
