import { ShieldCheck, Lock, FileBadge, Scale, ClipboardCheck, Globe2 } from "lucide-react";

const certs = [
  { abbr: "ISO 13485:2016", title: "Medical Device QMS", note: "Quality management aligned for medical device design workflows." },
  { abbr: "HIPAA-aligned", title: "PHI handling", note: "All patient data handled under HIPAA-aligned safeguards, audited annually." },
  { abbr: "GDPR", title: "EU data protection", note: "Data processing agreements for EU partner labs and clinics." },
  { abbr: "PDPO (HK)", title: "Hong Kong PDPO", note: "Compliant with the Hong Kong Personal Data (Privacy) Ordinance." },
  { abbr: "SOC 2 (in progress)", title: "Security controls", note: "Type I audit scheduled Q4. Type II target H1 next year." },
  { abbr: "MD Software (Class I)", title: "Risk classification", note: "Planning software classified per IMDRF SaMD guidance." },
];

const promises = [
  { icon: Lock, title: "Encrypted in transit and at rest", body: "AES-256 at rest, TLS 1.3 in transit. Patient identifiers separated from clinical data." },
  { icon: FileBadge, title: "Audit trail on every case", body: "Every clinical action — segmentation edit, stage adjustment, sign-off — is logged with operator and timestamp." },
  { icon: Scale, title: "DPA & BAA on request", body: "Standard Data Processing Agreement and Business Associate Agreement available for partner onboarding." },
  { icon: ClipboardCheck, title: "Orthodontist sign-off required", body: "No setup is released to a partner without a named, licensed orthodontist's review signature." },
  { icon: Globe2, title: "Data residency options", body: "Choose APAC (Hong Kong / Singapore) or EU (Frankfurt) hosting on enterprise plans." },
  { icon: ShieldCheck, title: "Penetration tested annually", body: "External pen test by an independent firm; remediation tracked and re-tested." },
];

export default function Compliance() {
  return (
    <section id="compliance" className="bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow text-mint-300">Compliance & security</div>
          <h2 className="mt-4 text-[40px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.025em]">
            Boring on purpose.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-200 max-w-2xl">
            Patient data is the most sensitive thing your lab touches. Our compliance
            posture is designed to pass your hospital procurement review — not just
            your CTO's vibe check.
          </p>
        </div>

        {/* Cert grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3">
          {certs.map((c) => (
            <div
              key={c.abbr}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="text-[12px] font-semibold tracking-widest uppercase text-mint-300">
                {c.abbr}
              </div>
              <div className="mt-2 text-[14px] font-medium">{c.title}</div>
              <div className="mt-1.5 text-[12.5px] text-ink-300 leading-snug">
                {c.note}
              </div>
            </div>
          ))}
        </div>

        {/* Promises */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {promises.map((p) => (
            <div key={p.title} className="flex gap-4">
              <p.icon className="w-5 h-5 text-mint-300 flex-shrink-0 mt-0.5" strokeWidth={1.6} />
              <div>
                <div className="text-[14.5px] font-semibold">{p.title}</div>
                <div className="mt-1 text-[13px] text-ink-300 leading-[1.6]">{p.body}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[11px] text-ink-400 max-w-3xl">
          Certifications and audit status reflect current operating posture. Documentation
          (ISO certificate, DPA template, penetration test executive summary, sub-processor
          list) available to qualified partners under NDA.
        </p>
      </div>
    </section>
  );
}
