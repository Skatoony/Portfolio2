"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface SiteHeaderProps {
  /** When true the "Work" link points back to the home grid. */
  workHref?: string
}

export default function SiteHeader({ workHref = "/#work" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 z-40 w-full">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 md:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="HPQ — home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 group-hover:scale-105">
            H
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            HPQ
          </span>
        </Link>

        <nav
          className={`flex items-center gap-1 rounded-full px-1.5 py-1.5 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-lg shadow-black/40" : "bg-transparent"
          }`}
        >
          <Link
            href={workHref}
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            About
          </Link>
          <a
            href="mailto:hpqdevpro@gmail.com"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-violet-100"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
