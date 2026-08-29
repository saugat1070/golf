import { motion } from "framer-motion";
import { FLEET } from "../data/constants";
import Kicker from "./Kicker";

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="gp-grid-light absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[90%] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <Kicker>Our fleet</Kicker>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
            Rent with confidence, build with excellence
          </h2>
          <p className="mt-6 font-sans leading-relaxed text-steel-500">
            A comprehensive, well-maintained fleet tailored to the diverse
            demands of construction, industrial and infrastructure sectors —
            every unit inspected for peak performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {FLEET.map((f, i) => (
            <div
              key={f.cat}
              className="group rounded-md border border-navy-900/10 bg-white p-7 shadow-lg shadow-navy-900/5 transition-all hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-navy-900/10 pb-4">
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {f.cat}
                </h3>
                <span className="font-mono text-xs text-cyan-600">
                  {String(f.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-2.5">
                {f.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 font-sans text-sm text-steel-500"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-cyan-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
