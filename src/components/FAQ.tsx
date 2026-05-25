import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "../i18n/LangContext";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center">
          <div className="eyebrow inline-block">{t.faq.eyebrow}</div>
          <h2 className="mt-4 text-[36px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            {t.faq.heading}
          </h2>
        </div>

        <ul className="mt-14 space-y-2">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={i}
                className="rounded-xl border border-ink-100 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-bone transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] lg:text-[16.5px] font-semibold text-ink-900 leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-ink-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-ink-700" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[14.5px] leading-[1.65] text-ink-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-[14px] font-medium text-ink-900 underline underline-offset-4 decoration-mint-500 decoration-2 hover:decoration-mint-300"
          >
            {t.faq.moreCta}
          </a>
        </div>
      </div>
    </section>
  );
}
