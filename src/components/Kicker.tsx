export default function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-cyan-600" />
      <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-cyan-600">
        {children}
      </span>
    </div>
  );
}
