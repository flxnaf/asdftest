import { Upload, Cpu, Stethoscope, PackageCheck } from "lucide-react";
import { useLang } from "../i18n/LangContext";

const icons = [Upload, Cpu, Stethoscope, PackageCheck];

export default function Process() {
  const { t } = useLang();
  return (
    <section id="process" className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.process.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            {t.process.headline}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-ink-500">
            {t.process.sub}
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 gap-px bg-ink-100 rounded-2xl overflow-hidden border border-ink-100">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <li key={i} className="bg-white p-7 lg:p-9">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-ink-900 text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-mint-500">
                    {t.process.step} {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-5 text-[19px] font-semibold text-ink-900 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink-500 leading-[1.6]">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
