import { motion } from "framer-motion";
import heroImage from "../imports/hero.png";
import logoImage from "../imports/logo-1.jpeg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="gp-grid-light absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[95%] px-4 pb-12 pt-28 sm:max-w-[90%] sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pt-36">
        {/* headline block — centered flow for mobile, overlay on desktop */}
        <div className="flex flex-col items-center justify-between text-center pb-6 sm:pb-10 lg:absolute lg:inset-x-0 lg:top-36 lg:bottom-0 lg:z-10 lg:px-10 lg:pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl lg:text-[5.25rem] lg:leading-[0.95]"
          >
            Your partner in <span className="text-cyan-600">construction</span>
            <br className="hidden sm:inline" />
            {" "}and <span className="text-cyan-600">contracting</span>
          </motion.h1>
        </div>

        {/* banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mt-4 sm:mt-12 lg:mt-16 overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <img
            src={heroImage}
            alt="High-rise steel structure under construction with tower cranes"
            className="w-full object-cover min-h-[220px] sm:min-h-[350px] lg:min-h-[480px]"
          />

          {/* company logo */}
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-5 py-3 shadow-lg shadow-navy-900/10 backdrop-blur">
            <img
              src={logoImage}
              alt="Gulf Paradigm General Contracting logo"
              className="h-10 w-auto sm:h-12"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
