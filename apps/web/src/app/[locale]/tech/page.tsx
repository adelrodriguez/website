import { useTranslations } from "@adel/internationalization/nextjs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@adel/ui/components/tooltip"
import PageContainer from "~/features/profile/components/page-container"

const tech = [
  { name: "Astro", label: "astro" },
  { name: "Better Auth", label: "better-auth" },
  { name: "Bun", label: "bun" },
  { name: "Docker", label: "docker" },
  { name: "Drizzle", label: "drizzle" },
  { name: "Expo", label: "expo" },
  { name: "Fumadocs", label: "fumadocs" },
  { name: "Hono", label: "hono" },
  { name: "Next.js", label: "nextjs" },
  { name: "Postgres", label: "postgres" },
  { name: "React Router", label: "react-router" },
  { name: "React", label: "react" },
  { name: "SQLite", label: "sqlite" },
  { name: "Tailwind", label: "tailwindcss" },
  { name: "TanStack Query", label: "tanstack-query" },
  { name: "TanStack Router", label: "tanstack-router" },
  { name: "TRPC", label: "trpc" },
  { name: "TypeScript", label: "typescript" },
  { name: "Unistyles", label: "unistyles" },
  { name: "Vite", label: "vite" },
  { name: "Zod", label: "zod" },
] as const

export default function Page() {
  const t = useTranslations("web.tech")
  return (
    <PageContainer emoji="💻" title={t("title")}>
      <div className="flex flex-col justify-center gap-12">
        <p className="text-left font-light text-lg md:text-xl">
          {t("content")}
        </p>
        <ul className="mb-16 flex flex-wrap items-center justify-center gap-4 font-light">
          {tech.map(({ name, label }) => (
            <Tooltip key={name}>
              <TooltipTrigger>
                <li className="inline-block cursor-default px-5 py-2 transition-all duration-200 hover:rounded-full hover:bg-foreground hover:text-background sm:text-lg">
                  {name}
                </li>
              </TooltipTrigger>
              <TooltipContent className="text-lg">
                {t(`tech.${label}`)}
              </TooltipContent>
            </Tooltip>
          ))}
        </ul>
      </div>
    </PageContainer>
  )
}
