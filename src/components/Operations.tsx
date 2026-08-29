import { motion } from "framer-motion";
import Kicker from "./Kicker";
import { IsoScene } from "./IsoScene";

export default function Operations() {
  const highlights = [
    {
      title: "Rapid Fleet & Equipment Deployment",
      desc: "Heavy machinery and specialized tools dispatched directly from regional yards to project sites with 24/7 maintenance support.",
    },
    {
      title: "Certified Technical & Operations Crew",
      desc: "Skilled operators, riggers, and inspectors deployed on demand to maintain strict safety and productivity standards.",
    },
    {
      title: "Turnkey Procurement & Fabrication",
      desc: "Integrated material supply, custom structural steel fabrication, and modular site cabins delivered in a single workflow.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="gp-grid-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[90%] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Kicker>Operational Framework</Kicker>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
            Single-Source Execution — From Yard to Site Handover
          </h2>
          <p className="mt-6 max-w-lg font-sans leading-relaxed text-steel-500">
            Gulf Paradigm synchronizes heavy equipment rentals, certified site manpower, 
            industrial materials, and steel fabrication into a seamless operational pipeline. 
            Our regional logistics network guarantees zero downtime and rapid mobilization across 
            Saudi Arabia&apos;s major industrial hubs.
          </p>
          <div className="mt-8 space-y-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 font-bold text-xs">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-steel-500 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <IsoScene />
        </motion.div>
      </div>
    </section>
  );
}
