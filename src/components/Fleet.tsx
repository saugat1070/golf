import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FLEET } from "../data/constants";
import Kicker from "./Kicker";

const VISUALS: Record<string, { img: string; alt: string; span: string }> = {
  "Earth Moving": {
    img: "/images/services/rquipment.jpeg",
    alt: "Heavy excavator and earthmoving equipment on a construction site",
    span: "lg:col-span-2 lg:row-span-2",
  },
  Lifting: {
    img: "/images/services/requipment-2.jpg",
    alt: "Heavy crane lifting and material handling equipment",
    span: "lg:col-span-1",
  },
  Transportation: {
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=700&h=500&fit=crop&auto=format&q=80",
    alt: "Heavy transport trucks and logistics fleet at a depot",
    span: "lg:col-span-1",
  },
  "Power & Portable": {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&h=500&fit=crop&auto=format&q=80",
    alt: "Industrial power generators and portable equipment on site",
    span: "lg:col-span-2",
  },
};

function FleetCard({
  cat,
  items,
  delay,
}: {
  cat: string;
  items: string[];
  delay: number;
}) {
  const [open, setOpen] = useState(false);
  const visual = VISUALS[cat] ?? {
    img: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?w=1000&h=700&fit=crop&auto=format&q=80",
    alt: `${cat} fleet equipment`,
    span: "lg:col-span-1",
  };

  const isLarge = visual.span.includes("row-span-2");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg shadow-navy-900/10 cursor-pointer min-h-[280px] ${
        isLarge ? "lg:min-h-[480px]" : "lg:min-h-[260px]"
      } ${visual.span}`}
      onClick={() => setOpen((o) => !o)}
    >
      {/* photo */}
      <img
        src={visual.img}
        alt={visual.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* permanent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-transparent pointer-events-none" />

      {/* always-visible footer */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
        <div>
          <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-1">
            Fleet category
          </p>
          <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
            {cat}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-mono text-3xl font-black leading-none text-white/25">
            {String(items.length).padStart(2, "0")}
          </span>
          {/* toggle hint */}
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 ${
              open
                ? "rotate-45 bg-cyan-500 border-cyan-500 text-white"
                : "text-white group-hover:bg-white/20"
            }`}
            aria-label={open ? "Close equipment list" : "View equipment list"}
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* slide-up equipment panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-x-0 bottom-0 max-h-[85%] overflow-y-auto rounded-b-2xl bg-navy-950/95 backdrop-blur-md px-5 pb-5 pt-4 sm:px-6"
          >
            {/* category label stays visible */}
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-display text-sm font-bold text-white">
                {cat}
              </span>
              <span className="font-mono text-xs text-cyan-400">
                {items.length} units
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2 font-sans text-xs text-white/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="gp-grid-light absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[90%] px-6 lg:px-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-full"
        >
          <div className="max-w-xl">
            <Kicker>Our fleet</Kicker>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
              Rent with confidence,{" "}
              <span className="text-cyan-600">build with excellence</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-steel-500 max-w-xs sm:text-right pb-1 shrink-0">
            Tap any card to browse the full equipment list.
          </p>
        </motion.div>

        {/* mosaic grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {FLEET.map((f, i) => (
            <FleetCard
              key={f.cat}
              cat={f.cat}
              items={f.items}
              delay={i * 0.07}
            />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy-900/8 bg-steel-100 px-8 py-5 sm:flex-row"
        >
          <p className="font-sans text-sm text-steel-500">
            Need a custom fleet arrangement or a specific machine?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 rounded-full bg-navy-900 px-6 py-2.5 font-sans text-xs font-semibold text-white transition-all hover:bg-navy-800 active:scale-95"
          >
            Enquire about fleet
          </button>
        </motion.div>
      </div>
    </section>
  );
}
