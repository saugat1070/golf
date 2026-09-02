import { CLIENTS } from "../data/constants";

function ClientCard({ client }: { client: { name: string; logo: string } }) {
  return (
    <div className="group flex w-[220px] shrink-0 flex-col items-center justify-center gap-4 px-4 py-2 transition-all duration-300">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        loading="lazy"
        decoding="async"
        className="h-14 w-auto max-w-[160px] object-contain transition-all duration-300 group-hover:opacity-100"
      />
      <span className="font-display text-[0.65rem] font-bold uppercase tracking-widest text-steel-500 transition-colors group-hover:text-cyan-400">
        {client.name}
      </span>
    </div>
  );
}

export default function Clients() {
  // Duplicate the array so the marquee seamlessly loops
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <div className="bg-white pb-10 pt-10 lg:pb-16 lg:pt-16">
      <section
        id="clients"
        className="mx-auto max-w-[95%] overflow-hidden rounded-3xl bg-navy-950 py-20 shadow-2xl lg:rounded-[3rem] lg:py-24"
      >
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-cyan-500/50" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-cyan-400">
              Our valued clients
            </span>
            <span className="h-px w-8 bg-cyan-500/50" />
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
            Trusted by the Kingdom's leading operators
          </h2>
          <p className="mt-6 font-sans leading-relaxed text-steel-300">
            We proudly serve the region's foremost energy, petrochemical and
            engineering organisations — delivering to the standards they demand.
          </p>
        </div>

        {/* Marquee Row */}
        <div className="relative mt-20 w-full overflow-hidden">
          {/* gradient masks for smooth fade on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent lg:w-48" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent lg:w-48" />

          <div className="flex w-max animate-marquee-ltr items-center gap-12 sm:gap-16">
            {marqueeClients.map((c, i) => (
              <ClientCard key={`${c.name}-${i}`} client={c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
