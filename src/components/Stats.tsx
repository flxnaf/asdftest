/**
 * Replace bracketed values with real, verifiable numbers before launch.
 * Every claim here is auditable to a partner doing due diligence.
 */
const stats = [
  { value: "[XX]k+", label: "Treatment plans designed", note: "Cumulative since [year founded]" },
  { value: "[XX]", label: "Countries served", note: "[Regions]" },
  { value: "[XX] hr", label: "Standard turnaround", note: "Express track at [XX] hr" },
  { value: "[XX]%", label: "First-revision approval", note: "[Time window]" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-12">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-mint-500 pl-5">
              <div className="text-[40px] lg:text-[52px] font-bold leading-none tracking-[-0.025em] text-ink-900">
                {s.value}
              </div>
              <div className="mt-3 text-[14px] font-medium text-ink-800">
                {s.label}
              </div>
              <div className="mt-1 text-[12px] text-ink-400">{s.note}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[11px] text-ink-400">
          Replace bracketed values with real figures in <code className="font-mono">Stats.tsx</code>.
          Any number that appears on the live site should be defensible — add a "data on file" note where appropriate.
        </p>
      </div>
    </section>
  );
}
