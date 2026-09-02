import { motion } from "framer-motion"
import { STATS } from "../data/constants"

export default function Stats() {
  return (
    <section className="relative z-10 bg-white py-10">
      <div className="mx-auto max-w-[90%] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-navy-900/10 shadow-2xl shadow-navy-900/10 sm:grid-cols-3"
        >
          {STATS.map((s, i) => (
            <div key={i} className="bg-white px-6 py-10 text-center lg:px-8">
              <div className="font-display text-4xl font-extrabold text-cyan-600 lg:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-sans text-sm text-steel-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
