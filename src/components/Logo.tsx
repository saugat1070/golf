export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gp-globe" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35c0ee" />
          <stop offset="1" stopColor="#1489c2" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="26" fill="url(#gp-globe)" />
      <path
        d="M9 30c8 6 38 6 46 0"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M13 40c6 4 32 4 38 0"
        stroke="#0a1428"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M32 14l2.4 5 5 2.4-5 2.4L32 29l-2.4-5-5-2.4 5-2.4L32 14z" fill="#fff" />
    </svg>
  );
}

export function Wordmark({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <div className="leading-none">
        <div
          className={`font-display text-[1.35rem] font-extrabold tracking-tight ${
            dark ? "text-navy-900" : "text-white"
          }`}
        >
          PARA<span className="text-cyan-500">D</span>IGM
        </div>
        <div
          className={`font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-steel-500" : "text-steel-300"
          }`}
        >
          Gulf Paradigm General Contracting
        </div>
      </div>
    </div>
  );
}
