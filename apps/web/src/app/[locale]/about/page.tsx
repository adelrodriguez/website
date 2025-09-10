import { type Locale, useTranslations } from "@adel/internationalization/nextjs"
import { setRequestLocale } from "@adel/internationalization/nextjs/server"
import Image from "next/image"
import { use } from "react"
import PageContainer from "~/features/profile/components/page-container"
import me from "~/shared/assets/images/me.webp"
import me2 from "~/shared/assets/images/me-2.webp"

export default function Page({ params }: PageProps<"/[locale]/about">) {
  const { locale } = use(params)
  const t = useTranslations("web.about")

  setRequestLocale(locale as Locale)

  return (
    <PageContainer emoji="👋" title={t("title")}>
      <div className="mb-20 flex flex-col items-center justify-center gap-12 md:flex-row">
        <div className="flex flex-col gap-4 font-light text-lg leading-relaxed md:mr-10 md:text-xl md:leading-loose">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <div className="group relative mb-10 aspect-[9/10] w-64 flex-none rotate-2 overflow-hidden rounded-xl shadow-lg transition-all duration-700 ease-in-out will-change-transform hover:rotate-0 hover:scale-110 sm:w-72 sm:rounded-2xl md:m-0">
          <Image
            alt="Adel"
            className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
            draggable={false}
            fill
            placeholder="blur"
            priority
            sizes="(min-width: 640px) 18rem, 16rem"
            src={me2}
          />
          <Image
            alt="Adel"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
            draggable={false}
            fill
            placeholder="blur"
            priority
            sizes="(min-width: 640px) 18rem, 16rem"
            src={me}
          />
        </div>
      </div>
    </PageContainer>
  )
}
