import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SERVICES } from "../data/constants";
import Kicker from "./Kicker";

const WHATSAPP_NUMBER = "966138322804";

function getServiceWhatsAppUrl(title: string) {
  const msg = encodeURIComponent(
    `Hello Gulf Paradigm! I would like to inquire about your ${title} service.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function getProposalWhatsAppUrl() {
  const msg = encodeURIComponent(
    "Hello Gulf Paradigm! I would like to request a project proposal."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const SERVICE_SPANS: Record<string, string> = {
  equipment: "lg:col-span-2",
  manpower: "lg:col-span-1",
  material: "lg:col-span-1",
  fabrication: "lg:col-span-1",
  logistics: "lg:col-span-1",
};

type ServiceItem = (typeof SERVICES)[number];

function ServiceModal({
  svc,
  onClose,
}: {
  svc: ServiceItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6">
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
      />

      {/* modal box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-navy-900/10"
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-navy-950/70 text-white backdrop-blur-md transition-all hover:bg-navy-900 hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* scrollable content */}
        <div className="overflow-y-auto no-scrollbar">
          {/* Header Visual Banner */}
          <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
            <img
              src={svc.img}
              alt={svc.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />

            {/* Title Overlay in Banner */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <span className="inline-flex items-center rounded-full bg-cyan-500/20 border border-cyan-400/30 px-3.5 py-1 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md">
                Service {svc.n}
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {svc.title}
              </h2>
              <p className="mt-1 font-sans text-xs sm:text-sm font-medium text-cyan-400/90">
                {svc.tag}
              </p>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">
                Service Overview
              </h3>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-steel-500">
                {svc.body}
              </p>
            </div>

            {/* Key Capabilities */}
            <div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-3">
                Key Scope & Specializations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-steel-100/70 p-3"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-600">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-navy-900">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dedicated Fleet & Machinery breakdown */}
            {svc.fleetCategories && svc.fleetCategories.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Fleet, Machinery & Equipment Catalog
                  </h3>
                  <span className="font-mono text-xs font-semibold text-cyan-600 uppercase tracking-wider">
                    Operational Units
                  </span>
                </div>

                <div className="space-y-4">
                  {svc.fleetCategories.map((group) => (
                    <div
                      key={group.cat}
                      className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm"
                    >
                      <h4 className="font-display text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-500" />
                        {group.cat}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-lg bg-steel-100/80 px-3 py-2 text-xs font-medium text-steel-500"
                          >
                            <span className="h-1 w-1 rounded-full bg-cyan-500 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Action Bar */}
        <div className="border-t border-navy-900/10 bg-steel-100/90 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-steel-500 hidden sm:block">
            Have a project requirement? Chat directly with our team on WhatsApp.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-full border border-navy-900/15 bg-white px-5 py-2.5 font-sans text-xs font-semibold text-navy-900 transition-all hover:bg-steel-100"
            >
              Close
            </button>
            <a
              href={getServiceWhatsAppUrl(svc.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 font-sans text-xs font-semibold text-white shadow-md shadow-[#25D366]/30 transition-all hover:bg-[#20ba59] hover:shadow-[#25D366]/50 active:scale-95"
            >
              <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Enquire About {svc.title}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ServiceCard({
  svc,
  delay,
  onSelect,
}: {
  svc: ServiceItem;
  delay: number;
  onSelect: (svc: ServiceItem) => void;
}) {
  const span = SERVICE_SPANS[svc.id] ?? "lg:col-span-1";
  const isLarge = span.includes("col-span-2");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={`group relative overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10 cursor-pointer min-h-[360px] sm:min-h-[400px] ${
        isLarge
          ? "lg:min-h-[480px] xl:min-h-[520px]"
          : "lg:min-h-[460px] xl:min-h-[500px]"
      } ${span}`}
      onClick={() => onSelect(svc)}
    >
      {/* photo */}
      <img
        src={svc.img}
        alt={svc.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* permanent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/35 to-transparent pointer-events-none" />

      {/* service number badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center rounded-full bg-navy-950/80 px-3.5 py-1.5 font-mono text-xs font-bold text-cyan-400 backdrop-blur-md ring-1 ring-white/15">
          {svc.n}
        </span>
      </div>

      {/* always-visible footer */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-7">
        <div className="pr-4 max-w-[85%]">
          <p className="font-mono text-[0.62rem] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-1.5 line-clamp-1">
            {svc.tag}
          </p>
          <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            {svc.title}
          </h3>
          <p className="mt-2 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-cyan-300 opacity-90 group-hover:underline">
            View details & fleet catalog →
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          {/* view button */}
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:scale-110"
            aria-label={`View ${svc.title} details`}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-steel-100 py-24 lg:py-32"
    >
      <div className="gp-grid-light absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[96%] sm:max-w-[94%] lg:max-w-[94%] 2xl:max-w-[1720px] px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-full"
        >
          <div className="max-w-xl">
            <Kicker>What we do</Kicker>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-5xl">
              Six integrated service lines,{" "}
              <span className="text-cyan-600">one accountable partner</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-steel-500 max-w-xs sm:text-right pb-1 shrink-0">
            Click any service to view technical specifications and fleet
            equipment catalog.
          </p>
        </motion.div>

        {/* mosaic bento grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.id}
              svc={s}
              delay={i * 0.07}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy-900/8 bg-white px-8 py-5 sm:flex-row shadow-sm"
        >
          <p className="font-sans text-sm text-steel-500">
            Need an integrated multi-disciplinary contracting solution?
          </p>
          <a
            href={getProposalWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 font-sans text-xs font-semibold text-white shadow-md shadow-[#25D366]/30 transition-all hover:bg-[#20ba59] active:scale-95"
          >
            <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Request a proposal
          </a>
        </motion.div>
      </div>

      {/* Pop-up Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            svc={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
