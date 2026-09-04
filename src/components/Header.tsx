import { useEffect, useState } from "react";
import { NAV } from "../data/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/10 bg-white/99 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[90%] items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => go("top")} className="text-left py-1">
          <img
            src="/logo/logo-1.jpeg"
            alt="Gulf Paradigm General Contracting logo"
            loading="lazy"
            decoding="async"
            className="h-14 w-auto sm:h-16 lg:h-20 object-contain transition-transform duration-200 hover:scale-105"
          />
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="font-sans text-sm font-medium text-navy-700 transition-colors hover:text-cyan-500"
            >
              {n.label}
            </button>
          ))}
          <a
            href="/profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-md shadow-cyan-500/25 transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Profile</span>
          </a>
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
        <div className="border-t border-navy-900/10 bg-white px-6 py-5 shadow-lg lg:hidden">
          <div className="space-y-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="block w-full py-2.5 text-left font-sans text-sm font-medium text-navy-700 transition-colors hover:text-cyan-500"
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-navy-900/10">
            <a
              href="/profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-sans text-sm font-semibold text-white shadow-md shadow-cyan-500/25 transition-all hover:bg-cyan-600 active:scale-95"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Company Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
