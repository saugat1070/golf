import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-white pt-12 lg:pt-16">
      {/* ---- hero banner ---- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-[90%] overflow-hidden rounded-3xl shadow-xl"
      >
        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=800&fit=crop&auto=format"
            alt="Construction site skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-transparent" />
          <div className="absolute inset-0 bg-navy-900/40" />
        </div>

        <div className="relative px-8 py-20 lg:px-16 lg:py-28">
          {/* heading + description */}
          <div className="flex max-w-2xl flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 backdrop-blur-sm">
              Get in touch
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact{" "}
              <span className="text-cyan-400">Us</span>
            </h2>
            <p className="mt-4 font-sans leading-relaxed text-steel-300">
              Have a question or want to discuss your next construction project?
              Our team is here to help — we respond fast with the right
              equipment, people and materials.
            </p>

            {/* contact details */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "info@gulfparadigm.com",
                  href: "mailto:info@gulfparadigm.com",
                },
                {
                  icon: "☎",
                  label: "Phone",
                  value: "+966 13 832 2804",
                  href: "tel:+966138322804",
                },
                {
                  icon: "⌘",
                  label: "Web",
                  value: "www.gulfparadigm.com",
                  href: "https://www.gulfparadigm.com",
                },
                {
                  icon: "◎",
                  label: "Address",
                  value: "Al Khobar, Kingdom of Saudi Arabia",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm text-cyan-400">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cyan-500/70">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-sm text-white transition-colors hover:text-cyan-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-white">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---- tagline + contact row ---- */}
      <div className="mx-auto max-w-[90%] px-6 py-14 lg:px-10 lg:py-20">
        <h3 className="font-display text-3xl leading-snug tracking-tight text-steel-500 sm:text-4xl">
          Let&apos;s{" "}
          <span className="font-extrabold text-navy-900">Build</span>{" "}
          Something Great Together
          <br />
          <span className="text-navy-900">
            — Reach Out to Us Today
          </span>{" "}
          <a
            href="#services"
            className="ml-2 inline-flex items-center rounded-full bg-cyan-500 px-5 py-2 align-middle font-sans text-xs font-semibold text-white transition-colors hover:bg-cyan-600"
          >
            Our Services
          </a>
        </h3>

        {/* info bar */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 rounded-2xl border border-navy-900/10 bg-steel-100 p-6 sm:px-8 sm:py-6">
          {/* social icons */}
          <div className="flex items-center gap-4 border-b border-navy-900/10 pb-4 sm:border-b-0 sm:pb-0 sm:border-r sm:pr-6 w-full sm:w-auto">
            {["facebook", "instagram", "x"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-700 transition-colors hover:border-cyan-500 hover:text-cyan-500"
                aria-label={platform}
              >
                {platform === "facebook" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                )}
                {platform === "instagram" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                )}
                {platform === "x" && (
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                )}
              </a>
            ))}
          </div>

          {/* email */}
          <div className="border-b border-navy-900/10 pb-4 sm:border-b-0 sm:pb-0 sm:border-r sm:pr-6 w-full sm:w-auto">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-steel-500">
              Email :
            </p>
            <a
              href="mailto:info@gulfparadigm.com"
              className="font-sans text-base font-semibold text-navy-900 transition-colors hover:text-cyan-600"
            >
              info@gulfparadigm.com
            </a>
          </div>

          {/* phone */}
          <div className="w-full sm:w-auto">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-steel-500">
              Phone :
            </p>
            <a
              href="tel:+966138322804"
              className="font-sans text-base font-semibold text-navy-900 transition-colors hover:text-cyan-600"
            >
              +966 13 832 2804
            </a>
          </div>
        </div>
      </div>

      {/* ---- map embed ---- */}
      <div className="mx-auto max-w-[90%] px-6 pb-16 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-lg">
          <iframe
            title="Gulf Paradigm office location — Al Khobar, Saudi Arabia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57343.04580828157!2d50.16!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e7d1c3e6f5f3%3A0x3b11fa2e6e3a4e8a!2sAl%20Khobar%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
