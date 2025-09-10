"use client"

import { type ComponentRef, useEffect, useRef } from "react"
import Typed from "typed.js"

export default function TypingAnimation({ strings }: { strings: string[] }) {
  const el = useRef<ComponentRef<"span">>(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 40,
      loop: true,
      backSpeed: 50,
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return <span ref={el} />
}
