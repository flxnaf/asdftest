import { useLang } from "../i18n/LangContext";

export default function Team() {
  const { t } = useLang();
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">{t.team.eyebrow}</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            {t.team.headline}
          </h2>
          <p className="mt-5 text-[16px] text-ink-500 leading-[1.6]">
            {t.team.sub}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {t.team.members.map((m) => (
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
            {t.team.govEyebrow}
          </div>
          <p className="text-[14px] text-ink-700 leading-[1.6]">
            {t.team.govBody}
          </p>
        </div>
      </div>
    </section>
  );
}
