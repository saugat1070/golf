import { useEffect, useState } from "react"
import { NAV } from "../data/constants"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/10 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[90%] items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => go("top")} className="text-left">
          <img
            src="/logo/logo-1.jpeg"
            alt="Gulf Paradigm General Contracting logo"
            loading="lazy"
            decoding="async"
            className="h-11 w-auto sm:h-12 lg:h-13"
          />
        </button>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="font-sans text-sm font-medium text-navy-700 transition-colors hover:text-cyan-500"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center text-navy-900 lg:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-navy-900/10 bg-white px-6 py-4 shadow-lg lg:hidden">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="block w-full py-3 text-left font-sans text-sm font-medium text-navy-700"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
