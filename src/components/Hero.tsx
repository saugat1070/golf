import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/services/building-2.webp",
    alt: "Modern architecture and large-scale industrial facility construction",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=700&fit=crop&auto=format&q=80",
    alt: "Tower cranes over a large-scale industrial construction site",
  },
  {
    src: "/images/services/equpment_rental.jpg",
    alt: "Heavy machinery and earthmoving equipment rental operations",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=700&fit=crop&auto=format&q=80",
    alt: "Workers on a steel-frame industrial structure at height",
  },
  {
    src: "/images/services/fabrication.jpg",
    alt: "Structural steel fabrication and modular pre-engineered structures",
  },
  {
    src: "/images/services/frp.jpg",
    alt: "FRP fabrication, modular enclosures and composite solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?w=1600&h=700&fit=crop&auto=format&q=80",
    alt: "Heavy excavator and earthmoving equipment on site",
  },
  {
    src: "/images/services/logistic.jpeg",
    alt: "Logistics fleet, heavy haulage and industrial transportation",
  },
  {
    src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600&h=700&fit=crop&auto=format&q=80",
    alt: "Fleet of logistics trucks and heavy transport at a depot",
  },
  {
    src: "/images/services/material_supply.jpg",
    alt: "High-grade industrial materials and supply chain depot",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=700&fit=crop&auto=format&q=80",
    alt: "Structural steel fabrication in a Saudi industrial workshop",
  },
];

const STATS = [
  { value: "150+", label: "Equipment units" },
  { value: "26+", label: "Clients" },
  { value: "6+", label: "Service lines" },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(t);
  }, [paused]);

  const goTo = (i: number) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), INTERVAL * 2);
  };

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="gp-grid-light absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[98%] px-2 sm:max-w-[96%] sm:px-4 lg:max-w-[96%] 2xl:max-w-[1780px] lg:px-6 pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-32 lg:pb-16">
        {/* ── Image slideshow — first in DOM so it's on top on mobile ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-navy-900/10 h-[70vw] min-h-[280px] max-h-[440px] sm:max-h-none sm:h-auto sm:min-h-[460px] lg:min-h-[650px] xl:min-h-[720px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-white/90 lg:via-white/60 lg:to-transparent lg:w-[60%]" />
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

          {/* Floating Company Logo Badge — visible on tablet/desktop, hidden on mobile */}
          <div className="absolute bottom-5 right-5 z-20 hidden sm:flex items-center rounded-2xl bg-white/95 px-6 py-3.5 shadow-xl shadow-navy-900/15 backdrop-blur ring-1 ring-navy-900/10 sm:bottom-6 sm:right-6">
            <img
              src="/logo/logo-1.jpeg"
              alt="Gulf Paradigm General Contracting logo"
              loading="lazy"
              decoding="async"
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
          </div>

          {/* dot indicators */}
          <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex items-center gap-2 sm:bottom-5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative flex items-center justify-center p-1"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-1.5 bg-cyan-400 sm:w-6 sm:h-1.5 sm:bg-cyan-500 shadow-sm"
                      : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Content — below image on mobile, overlaid on desktop ── */}
        <div className="mt-6 flex flex-col items-center text-center sm:mt-8 lg:absolute lg:inset-x-0 lg:top-36 lg:bottom-0 lg:z-10 lg:px-16 lg:pb-16 lg:mt-0 lg:items-start lg:text-left lg:justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="font-display text-[1.75rem] font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-4xl lg:text-[4.25rem] xl:text-[4.75rem] lg:leading-[0.95] lg:max-w-2xl"
          >
            Your partner in <span className="text-cyan-600">construction</span>{" "}
            and <span className="text-cyan-600">contracting</span>
          </motion.h1>

          {/* Explanation hidden on mobile view */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            className="hidden sm:block mt-3 font-sans text-sm leading-relaxed text-steel-500 max-w-sm sm:text-base sm:max-w-md lg:max-w-md"
          >
            Industrial services, heavy equipment rental, skilled manpower,
            material supply, steel fabrication and logistics — all under one
            accountable partner across Saudi Arabia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.44 }}
            className="mt-5 sm:mt-6 flex items-center gap-3"
          >
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 font-sans text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all hover:bg-navy-800 active:scale-95 sm:px-7 sm:py-3.5"
            >
              Our Services
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex items-center gap-2 rounded-full border border-navy-900/15 bg-white/80 px-6 py-3 font-sans text-sm font-semibold text-navy-900 backdrop-blur transition-all hover:bg-white hover:border-cyan-500 hover:text-cyan-600 active:scale-95 sm:px-7 sm:py-3.5"
            >
              Contact Us
            </button>
          </motion.div>

          {/* stats card — full-width on mobile, auto on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.56 }}
            className="mt-5 flex w-full divide-x divide-navy-900/8 rounded-2xl bg-white shadow-md shadow-navy-900/8 ring-1 ring-navy-900/6 sm:mt-6 sm:w-auto sm:inline-flex"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-1 flex-col items-center px-4 py-3.5 sm:flex-none sm:px-6 sm:py-4"
              >
                <span className="font-display text-xl font-black leading-none text-cyan-600 sm:text-2xl lg:text-3xl">
                  {s.value}
                </span>
                <span className="mt-1.5 font-sans text-[0.6rem] font-medium uppercase tracking-widest text-steel-500 whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
