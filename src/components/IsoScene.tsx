import { motion } from "framer-motion";

export function IsoScene({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-3xl p-6 ${className}`}
    >
      <motion.img
        src="/Construction.svg"
        alt="Construction and Operations Illustration"
        className="h-auto w-full max-h-[460px] object-contain"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
