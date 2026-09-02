import { NAV } from "../data/constants";

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="#top" className="flex items-center">
          <img
            src="/logo/logo-1.jpeg"
            alt="Gulf Paradigm General Contracting logo"
            loading="lazy"
            decoding="async"
            className="h-11 w-auto sm:h-12 lg:h-13"
          />
        </a>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="font-sans text-sm text-steel-500 transition-colors hover:text-cyan-600"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="font-mono text-xs text-steel-500">
          © {new Date().getFullYear()} Gulf Paradigm General Contracting
          <p>
            Developed by{" "}
            <a
              href="https://github.com/saugat1070"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-800"
            >
              Saugat Giri
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
