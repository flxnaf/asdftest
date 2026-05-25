import { useState } from "react";
import { useLang } from "../i18n/LangContext";

type Complexity = "Mild" | "Moderate" | "Complex";

const complexityStyle: Record<Complexity, string> = {
  Mild: "bg-mint-100 text-mint-500",
  Moderate: "bg-ink-50 text-ink-700",
  Complex: "bg-ink-900 text-mint-300",
};

// Maps localized filter labels (position-aligned) to the canonical English
// tagKey used on each case. Same index across EN and ZH filter arrays.
const filterTagKeys = [null, "Crowding", "Spacing", "Deep bite", "Class II", "Open bite", "Crossbite", "Refinement"];

export default function CaseLibrary() {
  const { t } = useLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const activeKey = filterTagKeys[activeIdx];
  const filtered = activeKey === null ? t.cases.items : t.cases.items.filter((c) => c.tagKey === activeKey);

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
          {t.cases.filters.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveIdx(i)}
              className={`text-[12.5px] px-3 py-1.5 rounded-md border transition-colors ${
                activeIdx === i
                  ? "bg-ink-900 text-white border-ink-900"
                  : "bg-white text-ink-600 border-ink-200 hover:border-ink-300"
              }`}
            >
              {label}
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
                  className={`text-[10px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded-md ${complexityStyle[c.complexity as Complexity]}`}
                >
                  {t.cases.complexity[c.complexity as Complexity]}
                </span>
              </div>
              <div className="mt-4 text-[14px] font-semibold text-ink-900 leading-snug min-h-[2.6em]">
                {c.diagnosis}
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
