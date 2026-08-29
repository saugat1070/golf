import { NAV } from "../data/constants";
import logoImage from "../imports/logo-1.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-white">
      <div className="mx-auto flex max-w-[90%] flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="#top" className="flex items-center">
          <img
            src={logoImage}
            alt="Gulf Paradigm General Contracting logo"
            className="h-10 w-auto sm:h-11"
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
        </div>
      </div>
    </footer>
  );
}
