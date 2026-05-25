import { useLang } from "../i18n/LangContext";
import Placeholder from "./Placeholder";

export default function Partner() {
  const { t } = useLang();
  return (
    <section id="partner" className="bg-white border-t border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="eyebrow">{t.partner.eyebrow}</div>
            <h2 className="mt-4 text-[36px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              {t.partner.headline}
            </h2>
            <p className="mt-5 text-[16px] leading-[1.6] text-ink-500 max-w-xl">
              {t.partner.body}
            </p>
            <a
              href="https://mybeame.com/hk-en/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-[14px] font-medium text-ink-900 underline underline-offset-4 decoration-mint-500 decoration-2 hover:decoration-mint-300"
            >
              {t.partner.cta}
            </a>
          </div>
          <Placeholder
            label="Beame logo"
            hint="Drop in the Beame brand mark or wordmark here. Clear written permission from Beame (or Felix as founder) before publishing."
            spec="600 × 200 · transparent PNG/SVG"
            aspect="aspect-[3/1]"
          />
        </div>
      </div>
    </section>
  );
}
