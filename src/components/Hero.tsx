import { ArrowRight } from "lucide-react";
import Placeholder from "./Placeholder";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 lg:pt-40 pb-24 lg:pb-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-[44px] lg:text-[64px] font-bold leading-[1.02] tracking-[-0.025em] text-ink-900">
              Precision clear aligner treatment plans, designed under your brand.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.55] text-ink-500">
              A Line Technologies is the orthodontist-led treatment-planning partner
              behind aligner labs, dental clinics, and emerging aligner brands across
              the Asia–Pacific. We design. You manufacture. Your brand stays front.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-ink-900 text-white text-[14px] font-medium hover:bg-ink-800 transition-colors"
              >
                Submit a test case
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-ink-200 text-[14px] font-medium text-ink-800 hover:bg-ink-50 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          <Placeholder
            label="Hero visual"
            hint="Screenshot or render of a treatment-planning software view — e.g. occlusal 3D arch with movement plan side panel, or a clinician at a workstation."
            spec="1200 × 900 · WebP or PNG · save to /public/hero.png"
            aspect="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
