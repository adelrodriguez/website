import { NextIntlClientProvider } from "@adel/internationalization/nextjs"
import { getMessages } from "@adel/internationalization/nextjs/server"
import { Toaster } from "@adel/ui/components/sonner"
import { ThemeProvider } from "@adel/ui/components/theme"
import { TooltipProvider } from "@adel/ui/components/tooltip"
import type { ReactNode } from "react"

export default async function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
