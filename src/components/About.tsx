import { motion } from "framer-motion";
import Kicker from "./Kicker";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[90%] gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Kicker>About our company</Kicker>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
            A name synonymous with reliability, innovation & excellence
          </h2>
          <p className="mt-6 font-sans leading-relaxed text-steel-500">
            Gulf Paradigm General Contracting is a trusted partner for
            industrial and commercial projects across the Kingdom. From
            equipment rental to manpower supply, material trading, fabrication
            and logistics, every service is backed by precision, efficiency and
            adherence to the highest quality standards.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-steel-500">
            By integrating advanced technologies and industry best practices, we
            ensure seamless project execution while prioritising safety,
            sustainability and client satisfaction.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-navy-900/10 border-l-2 border-l-cyan-500 bg-steel-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Our Vision
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-steel-500">
                To redefine industry standards with innovative, efficient
                solutions — fostering lasting partnerships that exceed
                expectations.
              </p>
            </div>
            <div className="rounded-md border border-navy-900/10 border-l-2 border-l-cyan-500 bg-steel-100 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                Our Mission
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-steel-500">
                Committed to quality, integrity and excellence — prioritising
                safety, technology and sustainability in the contracting sector.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1623489254637-a2dd8375243d?w=900&h=1100&fit=crop&auto=format"
              alt="Construction worker on an industrial structure"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-xs rounded-md bg-navy-900 p-7 shadow-2xl shadow-navy-900/25">
            <div className="font-display text-2xl font-extrabold leading-tight text-white">
              Powering progress through innovation
            </div>
            <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              Al Khobar · KSA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
