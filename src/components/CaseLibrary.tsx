import { useState } from "react";
import { useLang } from "../i18n/LangContext";

type Complexity = "Mild" | "Moderate" | "Complex";
type Case = {
  id: string;
  complexity: Complexity;
  stages: number;
  months: number;
  ipr: string;
  attachments: number;
  tagKey: string;
};

const cases: Case[] = [
  { id: "Case 01", complexity: "Mild", stages: 0, months: 0, ipr: "[mm]", attachments: 0, tagKey: "Crowding" },
  { id: "Case 02", complexity: "Moderate", stages: 0, months: 0, ipr: "[mm]", attachments: 0, tagKey: "Spacing" },
  { id: "Case 03", complexity: "Complex", stages: 0, months: 0, ipr: "[mm]", attachments: 0, tagKey: "Deep bite" },
  { id: "Case 04", complexity: "Moderate", stages: 0, months: 0, ipr: "[mm]", attachments: 0, tagKey: "Refinement" },
];

const filterTagKeys = ["All", "Crowding", "Spacing", "Deep bite", "Refinement"];

const complexityStyle: Record<Complexity, string> = {
  Mild: "bg-mint-100 text-mint-500",
  Moderate: "bg-ink-50 text-ink-700",
  Complex: "bg-ink-900 text-mint-300",
};

const filterLabels = {
  en: { All: "All", Crowding: "Crowding", Spacing: "Spacing", "Deep bite": "Deep bite", Refinement: "Refinement" },
  zh: { All: "全部", Crowding: "擠迫", Spacing: "牙縫", "Deep bite": "深咬", Refinement: "中期調整" },
} as const;

export default function CaseLibrary() {
  const { t, lang } = useLang();
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.tagKey === active);

  return (
    <section id="cases" className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="eyebrow">{t.cases.eyebrow}</div>
            <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              {t.cases.headline}
            </h2>
            <p className="mt-5 text-[16px] text-ink-500 leading-[1.6]">
              {t.cases.sub}
            </p>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-end text-[14px] font-medium text-ink-900 underline underline-offset-4 decoration-mint-500 decoration-2 hover:decoration-mint-300"
          >
            {t.cases.requestLink}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filterTagKeys.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[12.5px] px-3 py-1.5 rounded-md border transition-colors ${
                active === f
                  ? "bg-ink-900 text-white border-ink-900"
                  : "bg-white text-ink-600 border-ink-200 hover:border-ink-300"
              }`}
            >
              {filterLabels[lang][f as keyof typeof filterLabels.en]}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filtered.map((c) => (
            <article
              key={c.id}
              className="rounded-xl bg-white border border-ink-100 p-5 hover:border-ink-200 hover:shadow-[0_20px_50px_-25px_rgba(15,42,74,0.18)] transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-semibold uppercase tracking-widest text-ink-400">
                  {c.id}
                </span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded-md ${complexityStyle[c.complexity]}`}
                >
                  {t.cases.complexity[c.complexity]}
                </span>
              </div>
              <div className="mt-4 text-[14px] font-semibold text-ink-900 leading-snug min-h-[2.6em]">
                {t.cases.diagnosis}
              </div>
              <dl className="mt-4 pt-4 border-t border-ink-100 grid grid-cols-2 gap-y-2 text-[12px] nums">
                <dt className="text-ink-400">{t.cases.fields.stages}</dt>
                <dd className="text-ink-800 text-right">{c.stages}</dd>
                <dt className="text-ink-400">{t.cases.fields.duration}</dt>
                <dd className="text-ink-800 text-right">{c.months} {t.cases.fields.months}</dd>
                <dt className="text-ink-400">{t.cases.fields.ipr}</dt>
                <dd className="text-ink-800 text-right">{c.ipr}</dd>
                <dt className="text-ink-400">{t.cases.fields.attachments}</dt>
                <dd className="text-ink-800 text-right">{c.attachments}</dd>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-ink-400">{t.cases.footnote}</p>
      </div>
    </section>
  );
}
