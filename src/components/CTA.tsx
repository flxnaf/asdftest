import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="relative rounded-2xl overflow-hidden bg-ink-900 text-white p-10 lg:p-16">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-mint-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-sky-accent/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.3fr,1fr] gap-12 items-center">
            <div>
              <div className="eyebrow text-mint-300">Get started</div>
              <h2 className="mt-4 text-[36px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">
                Send us a real case. We'll plan it free.
              </h2>
              <p className="mt-6 text-[16px] leading-[1.6] text-ink-200 max-w-lg">
                The fastest way to evaluate us is to give us a case from your last
                month and compare the result to what you got. One per partner, no
                obligation, NDA on request.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@aline.tech?subject=Test%20case%20submission"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-mint-500 text-ink-900 text-[14px] font-semibold hover:bg-mint-400 transition-colors"
                >
                  Submit a test case
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="mailto:partnerships@aline.tech?subject=Partnership%20enquiry"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-[14px] font-medium text-white hover:bg-white/[0.06] transition-colors"
                >
                  Talk to partnerships
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 lg:p-8">
              <div className="eyebrow text-mint-300">What to send</div>
              <ul className="mt-4 space-y-3 text-[14px] text-ink-200">
                {[
                  "Intraoral scan (STL, PLY, or OBJ) — upper + lower + bite",
                  "Intraoral and extraoral photos (8 total, standard ortho set)",
                  "Short prescription: chief complaint, treatment goals, constraints",
                  "Optional: CBCT for root-aware planning",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1 w-1 rounded-full bg-mint-500 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-[12px] text-ink-300">Hong Kong HQ · APAC support</div>
                <div className="text-[12px] text-ink-300">hello@aline.tech · +852 XXXX XXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
