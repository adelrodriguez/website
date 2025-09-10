import { unstable_ViewTransition as ViewTransition } from "react"

export default function CodeEmoji({ emoji }: { emoji: string }) {
  return (
    <ViewTransition name="code-emoji">
      <span className="text-3xl md:text-5xl">{`<${emoji}/>`}</span>
    </ViewTransition>
  )
}
