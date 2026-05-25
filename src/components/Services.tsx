import { useLang } from "../i18n/LangContext";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.services.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            {t.services.headline}
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-500">
            {t.services.sub}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {t.services.items.map((s) => (
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
      </div>
    </section>
  );
}
