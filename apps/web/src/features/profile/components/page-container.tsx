import type { ReactNode } from "react"
import { unstable_ViewTransition as ViewTransition } from "react"
import CodeEmoji from "~/shared/components/code-emoji"
import GoHome from "./go-home"

export default function PageContainer({
  children,
  emoji,
  title,
}: {
  children: ReactNode
  emoji: string
  title: string
}) {
  return (
    <section className="relative mb-40 flex w-full select-none flex-col text-left font-bold">
      <CodeEmoji emoji={emoji} />

      <div className="mb-4 text-4xl leading-normal tracking-tight md:text-6xl">
        <ViewTransition name="section-title">
          <h1 className="leading-relaxed">{title}</h1>
        </ViewTransition>
      </div>
      {children}
      <GoHome />
    </section>
  )
}
