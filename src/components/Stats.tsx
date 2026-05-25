import { useLang } from "../i18n/LangContext";

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-12">
          {t.stats.items.map((s) => (
            <div key={s.l} className="border-l-2 border-mint-500 pl-5">
              <div className="text-[40px] lg:text-[52px] font-bold leading-none tracking-[-0.025em] text-ink-900">
                {s.v}
              </div>
              <div className="mt-3 text-[14px] font-medium text-ink-800">
                {s.l}
              </div>
              <div className="mt-1 text-[12px] text-ink-400">{s.n}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[11px] text-ink-400">{t.stats.footnote}</p>
      </div>
    </section>
  );
}
