import { EyeOff, FileText, Globe, Palette } from "lucide-react";
import Placeholder from "./Placeholder";

const features = [
  { icon: EyeOff, title: "We stay invisible.", body: "Your patients never see our name. Your clinicians never see our name. Your competitors don't either." },
  { icon: Palette, title: "Your brand on every artefact.", body: "Treatment summaries, 3D viewer URLs, retainer cases, partner portal — all rendered under your logo and palette." },
  { icon: FileText, title: "Clinician-ready documents.", body: "Plan PDFs are written for the receiving dentist, not our internal team. Diagnosis, mechanics, risks, retention plan — all included." },
  { icon: Globe, title: "Your own subdomain.", body: "Optional case portal hosted at plans.yourbrand.com with SSO and per-clinician access controls." },
];

export default function WhiteLabel() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="eyebrow">White-label</div>
            <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Your brand, front and centre.
            </h2>
            <p className="mt-6 text-[16px] text-ink-500 leading-[1.6] max-w-lg">
              You spent years building trust with the dentists who refer to you.
              We're not going to dilute that by stamping our name on your deliverables.
              Every case leaves our facility looking like it came from yours.
            </p>

            <div className="mt-9 grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title}>
                  <f.icon className="w-5 h-5 text-mint-500" strokeWidth={1.6} />
                  <div className="mt-2 text-[14.5px] font-semibold text-ink-900">{f.title}</div>
                  <div className="mt-1 text-[13px] text-ink-500 leading-[1.6]">{f.body}</div>
                </div>
              ))}
            </div>
          </div>

          <Placeholder
            label="White-label partner portal"
            hint="Screenshot of the partner dashboard, branded with a sample partner's logo. Shows case list, status filters, and action buttons."
            spec="1200 × 900"
            aspect="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
