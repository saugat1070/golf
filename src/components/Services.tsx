import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "../data/constants";
import Kicker from "./Kicker";

/* Unique gradient + accent for each service */
const CARD_THEMES: Record<
  string,
  { gradient: string; dotColor: string }
> = {
  equipment: {
    gradient: "from-[#0891b2] to-[#06b6d4]",
    dotColor: "bg-cyan-200",
  },
  manpower: {
    gradient: "from-[#4f46e5] to-[#818cf8]",
    dotColor: "bg-indigo-200",
  },
  material: {
    gradient: "from-[#059669] to-[#34d399]",
    dotColor: "bg-emerald-200",
  },
  fabrication: {
    gradient: "from-[#d97706] to-[#f59e0b]",
    dotColor: "bg-amber-200",
  },
  logistics: {
    gradient: "from-[#7c3aed] to-[#a78bfa]",
    dotColor: "bg-violet-200",
  },
};

export default function Services() {
  const [active, setActive] = useState(SERVICES[0].id);
  const svc = SERVICES.find((s) => s.id === active)!;
  const theme = CARD_THEMES[svc.id] ?? CARD_THEMES.equipment;

  return (
    <section id="services" className="bg-steel-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[90%] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <Kicker>What we do</Kicker>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
            Six integrated service lines, one accountable partner
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.35fr_1.65fr]">
          {/* tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-row overflow-x-auto pb-3 gap-2 no-scrollbar lg:flex-col lg:overflow-visible lg:pb-0 lg:gap-0 lg:divide-y lg:divide-navy-900/10 border-t border-navy-900/10 pt-2 lg:pt-0"
          >
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`group flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 lg:rounded-none lg:px-0 lg:py-3 text-left transition-all ${
                  active === s.id
                    ? "bg-white shadow-sm lg:bg-transparent lg:shadow-none lg:pl-1"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <span
                  className={`font-mono text-[0.65rem] font-medium ${
                    active === s.id ? "text-cyan-600" : "text-steel-500"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`font-display text-sm font-bold ${
                    active === s.id ? "text-navy-900" : "text-navy-700"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* selected service panel — row layout: text + image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme.gradient} shadow-xl`}
            >
            {/* decorative circles */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-white/5" />

            <div className="relative flex flex-col lg:flex-row">
              {/* text content */}
              <div className="flex flex-col justify-center p-8 lg:w-[45%] lg:p-10">
                {/* badge */}
                <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-4 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                  {svc.n} · {svc.title}
                </span>

                {/* title */}
                <p className="mt-5 font-sans text-sm font-medium text-white/70">
                  {svc.tag}
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold leading-tight text-white lg:text-4xl">
                  {svc.title}
                </h3>

                {/* specialization list */}
                <p className="mt-6 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Specialization
                </p>
                <ul className="mt-3 space-y-2">
                  {svc.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 font-sans text-sm text-white/90"
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${theme.dotColor}`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* image — fills right side */}
              <div className="relative lg:w-[55%]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full lg:min-h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
