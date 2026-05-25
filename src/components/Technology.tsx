import { Layers, GitBranch, ScanSearch, BrainCircuit, Workflow, FileCheck2 } from "lucide-react";
import { useLang } from "../i18n/LangContext";

const icons = [BrainCircuit, ScanSearch, Layers, GitBranch, Workflow, FileCheck2];

export default function Technology() {
  const { t } = useLang();
  return (
    <section id="technology" className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-mint-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow text-mint-300">{t.technology.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em]">
            {t.technology.headline}
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-200 max-w-2xl">
            {t.technology.sub}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {t.technology.pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-ink-900 p-8 hover:bg-ink-800 transition-colors group"
              >
                <div className="h-11 w-11 rounded-md bg-mint-500/15 ring-1 ring-mint-500/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-mint-300" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] text-ink-300 leading-[1.6]">{p.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="eyebrow text-mint-300">{t.technology.softwareEyebrow}</div>
              <p className="mt-2 text-[15px] text-ink-200 max-w-xl">
                {t.technology.softwareCopy}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["[Platform 1]", "[Platform 2]", "[Platform 3]", "Universal STL"].map((s) => (
                <span
                  key={s}
                  className="text-[12px] font-medium px-3 py-1.5 rounded-md border border-white/15 text-ink-100 bg-white/[0.04]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
