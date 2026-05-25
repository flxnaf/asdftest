import { ArrowRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import { useLang } from "../i18n/LangContext";

// Flip to true once /public/demo-3d.mp4 has been added
const HAS_DEMO_VIDEO = false;

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative pt-12 lg:pt-20 pb-24 lg:pb-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-[44px] lg:text-[64px] font-bold leading-[1.02] tracking-[-0.025em] text-ink-900">
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.55] text-ink-500">
              {t.hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink-900 text-white text-[14px] font-medium hover:bg-ink-800 transition-colors"
              >
                {t.hero.ctaSubmit}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-ink-200 text-[14px] font-medium text-ink-800 hover:bg-ink-50 transition-colors"
              >
                {t.hero.ctaProcess}
              </a>
            </div>
          </div>

          <HeroVisual hasVideo={HAS_DEMO_VIDEO} />
        </div>
      </div>
    </section>
  );
}
