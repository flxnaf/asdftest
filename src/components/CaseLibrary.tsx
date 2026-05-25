import { useState } from "react";

type Case = {
  id: string;
  diagnosis: string;
  complexity: "Mild" | "Moderate" | "Complex";
  stages: number;
  months: number;
  ipr: string;
  attachments: number;
  tags: string[];
};

const cases: Case[] = [
  { id: "AL-204711", diagnosis: "Anterior crowding · Class I", complexity: "Moderate", stages: 32, months: 9.5, ipr: "3.4 mm total", attachments: 6, tags: ["Crowding", "Class I"] },
  { id: "AL-198320", diagnosis: "Spacing · midline diastema", complexity: "Mild", stages: 18, months: 5.0, ipr: "0 mm", attachments: 2, tags: ["Spacing"] },
  { id: "AL-211056", diagnosis: "Deep bite · 5 mm overbite", complexity: "Complex", stages: 44, months: 13.0, ipr: "2.1 mm", attachments: 10, tags: ["Deep bite"] },
  { id: "AL-220914", diagnosis: "Anterior crossbite · UR1", complexity: "Moderate", stages: 26, months: 7.5, ipr: "1.2 mm", attachments: 5, tags: ["Crossbite"] },
  { id: "AL-225608", diagnosis: "Class II div 1 · mild", complexity: "Moderate", stages: 38, months: 11.0, ipr: "2.8 mm", attachments: 8, tags: ["Class II"] },
  { id: "AL-231209", diagnosis: "Open bite · anterior", complexity: "Complex", stages: 42, months: 12.5, ipr: "1.6 mm", attachments: 9, tags: ["Open bite"] },
  { id: "AL-237015", diagnosis: "Relapse re-treatment", complexity: "Mild", stages: 14, months: 4.0, ipr: "0.8 mm", attachments: 3, tags: ["Refinement"] },
  { id: "AL-240388", diagnosis: "Crowding + rotation cluster", complexity: "Complex", stages: 36, months: 10.5, ipr: "4.0 mm", attachments: 8, tags: ["Crowding", "Rotations"] },
];

const filters = ["All", "Crowding", "Spacing", "Deep bite", "Class II", "Open bite", "Crossbite", "Refinement"];

const complexityStyle = {
  Mild: "bg-mint-100 text-mint-500",
  Moderate: "bg-ink-50 text-ink-700",
  Complex: "bg-ink-900 text-mint-300",
} as const;

export default function CaseLibrary() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.tags.includes(active));

  return (
    <section id="cases" className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="eyebrow">Case library</div>
            <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              The deliverable, illustrated.
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-[1.6]">
              A representative cross-section of cases planned over the last quarter,
              anonymised. Request the full case library — including before/after
              photography and staging frames — for partner due diligence.
            </p>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-end text-[14px] font-medium text-ink-900 underline underline-offset-4 decoration-mint-500 decoration-2 hover:decoration-mint-300"
          >
            Request the full case library →
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[12.5px] px-3 py-1.5 rounded-md border transition-colors ${
                active === f
                  ? "bg-ink-900 text-white border-ink-900"
                  : "bg-white text-ink-600 border-ink-200 hover:border-ink-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Data-rich case ledger — no image uploads required */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="rounded-xl bg-white border border-ink-100 p-5 hover:border-ink-200 hover:shadow-[0_20px_50px_-25px_rgba(15,42,74,0.18)] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-semibold tracking-widest uppercase text-ink-400">
                  {c.id}
                </span>
                <span
                  className={`text-[10px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded-md ${complexityStyle[c.complexity]}`}
                >
                  {c.complexity.toUpperCase()}
                </span>
              </div>
              <div className="mt-4 text-[14px] font-semibold text-ink-900 leading-snug min-h-[2.6em]">
                {c.diagnosis}
              </div>
              <dl className="mt-4 pt-4 border-t border-ink-100 grid grid-cols-2 gap-y-2 text-[12px] nums">
                <dt className="text-ink-400">Stages</dt>
                <dd className="text-ink-800 text-right">{c.stages}</dd>
                <dt className="text-ink-400">Duration</dt>
                <dd className="text-ink-800 text-right">{c.months} mo</dd>
                <dt className="text-ink-400">IPR</dt>
                <dd className="text-ink-800 text-right">{c.ipr}</dd>
                <dt className="text-ink-400">Attachments</dt>
                <dd className="text-ink-800 text-right">{c.attachments}</dd>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-ink-400">
          Anonymised case records. Identifiers redacted for patient privacy.
        </p>
      </div>
    </section>
  );
}
