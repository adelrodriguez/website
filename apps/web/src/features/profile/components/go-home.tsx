import { Link, useTranslations } from "@adel/internationalization/nextjs"

export default function GoHome() {
  const t = useTranslations("web.misc")

  return (
    <div className="group -bottom-10 absolute left-0 flex items-center font-light text-foreground/60 hover:text-foreground">
      <svg
        className="mr-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Back home</title>
        <path
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Link className="text-sm" href="/">
        {t("go-home")}
        <span className="block h-px max-w-0 bg-foreground transition-all duration-300 group-hover:max-w-full" />
      </Link>
    </div>
  )
}
