import type { Locale } from "@adel/internationalization/locale"
import { cn } from "@adel/utils/ui"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function Document({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={cn("font-sans", inter.variable)}>{children}</body>
    </html>
  )
}
