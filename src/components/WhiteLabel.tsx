import { EyeOff, Palette, FileText } from "lucide-react";
import { useLang } from "../i18n/LangContext";

const icons = [EyeOff, Palette, FileText];

export default function WhiteLabel() {
  const { t } = useLang();
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.whiteLabel.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            {t.whiteLabel.headline}
          </h2>
          <p className="mt-6 text-[16px] text-ink-500 leading-[1.6] max-w-2xl">
            {t.whiteLabel.sub}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink-100 rounded-2xl overflow-hidden border border-ink-100">
          {t.whiteLabel.features.map((f, i) => {
            const Icon = icons[i];
            return (
              <div key={f.title} className="bg-white p-7 lg:p-8">
                <Icon className="w-5 h-5 text-mint-500" strokeWidth={1.6} />
                <div className="mt-4 text-[17px] font-semibold text-ink-900">{f.title}</div>
                <div className="mt-2 text-[14px] text-ink-500 leading-[1.6]">{f.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
