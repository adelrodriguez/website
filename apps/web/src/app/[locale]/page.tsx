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
        <ul className="flex flex-row gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink href={link.url} key={link.name} name={link.name} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-row gap-8">
          {socials.map((social) => (
            <li key={social.name}>
              <NavLink
                external
                href={social.url}
                key={social.name}
                name={social.name}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

function NavLink({
  href,
  name,
  external = false,
}: {
  href: string
  name: string
  external?: boolean
}) {
  return (
    <Link
      className="group inline-block text-xl md:text-2xl"
      href={href}
      rel="noopener noreferrer"
      target={external ? "_blank" : undefined}
    >
      {name}
      <span className="block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full" />
    </Link>
  )
}
