"use client"

import {
  Link,
  usePathname,
  useTranslations,
} from "@adel/internationalization/nextjs"
import { Button } from "@adel/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@adel/ui/components/dropdown-menu"
import { LanguagesIcon } from "lucide-react"

export function LocaleToggle() {
  const t = useTranslations("locale")
  const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <LanguagesIcon className="size-4" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/${pathname}`} locale="es">
            🇪🇸 {t("es")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/${pathname}`} locale="en">
            🇺🇸 {t("en")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
