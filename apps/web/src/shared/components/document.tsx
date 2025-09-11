import type { Locale } from "@adel/internationalization/locale"
import { cn } from "@adel/utils/ui"
import { Funnel_Sans } from "next/font/google"
import type { ReactNode } from "react"

const funnelSans = Funnel_Sans({ subsets: ["latin"], variable: "--font-sans" })

export default function Document({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={cn("font-sans", funnelSans.variable)}>{children}</body>
    </html>
  )
}
