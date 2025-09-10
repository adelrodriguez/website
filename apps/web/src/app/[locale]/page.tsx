import {
  Link,
  type Locale,
  useTranslations,
} from "@adel/internationalization/nextjs"
import { setRequestLocale } from "@adel/internationalization/nextjs/server"
import { use, unstable_ViewTransition as ViewTransition } from "react"
import CodeEmoji from "~/shared/components/code-emoji"
import TypingAnimation from "~/shared/components/typing-animation"

const links = [
  {
    name: "about",
    url: "/about",
  },
  {
    name: "tech",
    url: "/tech",
  },
  {
    name: "contact",
    url: "mailto:hey@adel.do",
  },
] as const

const socials = [
  {
    name: "github",
    url: "https://github.com/adelrodriguez",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/adelrodriguez/",
  },
  {
    name: "x",
    url: "https://x.com/adeldotdo",
  },
] as const

export default function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params)
  const t = useTranslations("web.home")

  setRequestLocale(locale as Locale)

  return (
    <section className="flex w-full select-none flex-col text-left font-bold">
      <CodeEmoji emoji="🧔🏻‍♂️" />

      <div className="mb-4 text-4xl leading-normal tracking-tight md:text-6xl">
        <ViewTransition name="section-title">
          <h1 className="leading-relaxed">{t("title")}</h1>
        </ViewTransition>
        <div className="h-28 md:h-42">
          <h2 className="h-auto">
            <TypingAnimation
              strings={[t("subtitle.0"), t("subtitle.1"), t("subtitle.2")]}
            />
          </h2>
        </div>
      </div>
      <nav className="flex flex-col gap-2 font-light md:flex-row md:gap-6">
        <div className="flex flex-row gap-6">
          {links.map((link) => (
            <Link
              className="group inline-block text-xl md:text-2xl"
              href={link.url}
              key={link.name}
            >
              {link.name}
              <span className="block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full" />
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-6">
          {socials.map((social) => (
            <Link
              className="group inline-block text-xl md:text-2xl"
              href={social.url}
              key={social.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              {social.name}
              <span className="block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  )
}
