const conditions = [
  "Mild to moderate crowding",
  "Spacing & diastema closure",
  "Class I & mild Class II/III",
  "Deep bite correction",
  "Open bite (anterior)",
  "Anterior & posterior crossbite",
  "Relapse / orthodontic re-treatment",
  "Long-term retention planning",
];

const services = [
  {
    title: "Full treatment plan",
    body:
      "End-to-end clear aligner setup: diagnosis, movement plan, staging, attachments, IPR schedule, printable STL stages, and a clinician-ready summary.",
    bullet: "Our most common service",
  },
  {
    title: "Setup-only (your stage count)",
    body:
      "We design to your prescribed stage count and constraints. Use when your in-house team handles diagnosis and you need execution.",
    bullet: "For established labs",
  },
  {
    title: "Refinement & mid-course correction",
    body:
      "Re-scan, re-stage, and re-issue stages based on actual progression. Includes a delta report showing what tracked vs. what didn't.",
    bullet: "Unlimited revisions",
  },
  {
    title: "Retainer & retention planning",
    body:
      "Post-treatment retention sets, Essix and Vivera-style retainers, and long-term arch monitoring plans.",
    bullet: "Often bundled at case open",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Services</div>
          <h2 className="mt-4 text-[40px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            Design only. Always.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-500">
            We do not manufacture aligners. We design the treatment plans your team
            prints, finishes, and ships. That separation isn't accidental — it's the
            entire point of our model.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 lg:p-8 rounded-2xl border border-ink-100 hover:border-ink-200 hover:shadow-[0_20px_50px_-25px_rgba(15,42,74,0.25)] transition-all bg-white"
            >
              <div className="text-[11px] font-semibold uppercase tracking-widest text-mint-500">
                {s.bullet}
              </div>
              <h3 className="mt-2 text-[22px] font-semibold tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] text-ink-500 leading-[1.6]">{s.body}</p>
            </div>
          ))}
        </div>

        {/* What we treat */}
        <div className="mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="eyebrow">Indications</div>
              <h3 className="mt-3 text-[28px] lg:text-[36px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
                What we treatment-plan
              </h3>
            </div>
            <p className="max-w-md text-[14px] text-ink-500">
              Complex multi-disciplinary cases involving extractions, surgical
              orthodontics, or skeletal expansion are escalated to senior consultants.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 rounded-xl overflow-hidden border border-ink-100">
            {conditions.map((c) => (
              <div key={c} className="bg-white p-6 hover:bg-bone transition-colors">
                <div className="h-1 w-8 bg-mint-500 rounded" />
                <div className="mt-4 text-[14.5px] font-medium text-ink-900 leading-snug">
                  {c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
