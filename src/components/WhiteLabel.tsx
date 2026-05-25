import { EyeOff, Palette, FileText } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "We stay invisible.",
    body: "Your patients never see our name. Your clinicians never see our name. Your competitors don't either.",
  },
  {
    icon: Palette,
    title: "Your brand on every deliverable.",
    body: "Treatment summaries, 3D viewer links, and retainer cases are rendered under your logo and palette — not ours.",
  },
  {
    icon: FileText,
    title: "Clinician-ready documents.",
    body: "Plan PDFs are written for the receiving dentist, not our internal team. Diagnosis, mechanics, risks, retention plan — all included.",
  },
];

export default function WhiteLabel() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">White-label</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            Your brand, front and centre.
          </h2>
          <p className="mt-6 text-[16px] text-ink-500 leading-[1.6] max-w-2xl">
            You spent years building trust with the dentists who refer to you.
            We're not going to dilute that by stamping our name on your deliverables.
            Every plan leaves our facility looking like it came from yours.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink-100 rounded-2xl overflow-hidden border border-ink-100">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-7 lg:p-8">
              <f.icon className="w-5 h-5 text-mint-500" strokeWidth={1.6} />
              <div className="mt-4 text-[17px] font-semibold text-ink-900">{f.title}</div>
              <div className="mt-2 text-[14px] text-ink-500 leading-[1.6]">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
