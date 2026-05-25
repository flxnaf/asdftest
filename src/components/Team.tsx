const team = [
  {
    initials: "CD",
    name: "Dr. [Clinical Director name]",
    role: "Clinical Director",
    creds: "BDS · MOrth · 15+ yr clinical orthodontics",
    body:
      "Oversees clinical governance and the orthodontist review board. Personally signs off on escalated cases.",
  },
  {
    initials: "TP",
    name: "Dr. [Head of Treatment Planning]",
    role: "Head of Treatment Planning",
    creds: "BDS · MDS Orthodontics · 8,000+ aligner cases",
    body:
      "Leads the treatment-planning team. Authored our internal staging protocols for deep-bite and Class II correction.",
  },
  {
    initials: "SC",
    name: "Dr. [Senior Consultant]",
    role: "Senior Consultant — Complex Cases",
    creds: "BDS · MSc Orthodontics · Member RCS",
    body:
      "Reviews cases involving skeletal discrepancies, surgical orthodontic interfaces, and adult re-treatment.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Clinical leadership</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            A clinical team you can name.
          </h2>
          <p className="mt-5 text-[16px] text-ink-500 leading-[1.6]">
            Most aligner-design outsourcers won't tell you who's planning your
            cases. We will. Every plan we deliver carries the signature of a named,
            credentialled orthodontist — and you can meet them.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {team.map((m) => (
            <article
              key={m.role}
              className="rounded-xl border border-ink-100 bg-white p-7"
            >
              <div className="h-14 w-14 rounded-md bg-ink-900 text-mint-300 flex items-center justify-center font-semibold text-[15px] tracking-wider">
                {m.initials}
              </div>
              <div className="mt-5 text-[17px] font-semibold text-ink-900 tracking-tight">
                {m.name}
              </div>
              <div className="text-[12.5px] text-mint-500 font-medium mt-1">
                {m.role}
              </div>
              <div className="mt-2 text-[11.5px] text-ink-400 leading-snug">
                {m.creds}
              </div>
              <p className="mt-4 pt-4 border-t border-ink-100 text-[13.5px] text-ink-500 leading-[1.6]">
                {m.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-ink-100 bg-bone p-6 lg:p-7 flex flex-col md:flex-row md:items-center gap-5">
          <div className="text-[11px] tracking-widest font-semibold text-mint-500 uppercase md:w-44 flex-shrink-0">
            Clinical governance
          </div>
          <p className="text-[14px] text-ink-700 leading-[1.6]">
            Our orthodontist review board meets weekly to audit case outcomes,
            calibrate staging protocols, and review any case flagged for refinement.
            Plans are signed off by the named clinician responsible — never by an
            anonymous reviewer.
          </p>
        </div>
      </div>
    </section>
  );
}
