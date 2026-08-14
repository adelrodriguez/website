import { paraglideVitePlugin as paraglide } from "@inlang/paraglide-js"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://adel.do",
  vite: {
    plugins: [
      tailwindcss(),
      paraglide({
        outdir: "./src/shared/internationalization",
        project: "./tooling/internationalization/project.inlang",
        strategy: ["url", "globalVariable", "baseLocale"],
      }),
    ],
  },
})
