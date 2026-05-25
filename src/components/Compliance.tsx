import { Lock, FileBadge, Scale, ClipboardCheck, Globe2, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n/LangContext";

const icons = [Lock, FileBadge, Scale, ClipboardCheck, Globe2, ShieldCheck];

export default function Compliance() {
  const { t } = useLang();
  return (
    <section id="compliance" className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow text-mint-300">{t.compliance.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em]">
            {t.compliance.headline}
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-200 max-w-2xl">
            {t.compliance.sub}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {t.compliance.promises.map((p, i) => {
            const Icon = icons[i];
            return (
              <div key={p.title} className="flex gap-4">
                <Icon className="w-5 h-5 text-mint-300 flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <div className="text-[14.5px] font-semibold">{p.title}</div>
                  <div className="mt-1 text-[13px] text-ink-300 leading-[1.6]">{p.body}</div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-[12px] text-ink-300 max-w-3xl">
          {t.compliance.footnote}
        </p>
      </div>
    </section>
  );
}
