import { Upload, Cpu, Stethoscope, PackageCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Upload,
    title: "Submit scan and prescription",
    body:
      "Upload an STL/PLY intraoral scan, photos, and a brief clinical prescription through your white-labelled partner portal. CBCT optional for root-aware planning.",
    meta: "Avg. 4 min · STL, PLY, OBJ, DCM",
  },
  {
    n: "02",
    icon: Cpu,
    title: "Automated segmentation and diagnosis",
    body:
      "Our proprietary segmentation engine isolates each tooth, builds the occlusal model, and flags clinical considerations — crowding, rotations, IPR opportunities, occlusal contacts.",
    meta: "Median compute: 9 minutes",
  },
  {
    n: "03",
    icon: Stethoscope,
    title: "Orthodontist-led treatment design",
    body:
      "A board-eligible orthodontist designs the final movement plan: staging, attachments, IPR schedule, biomechanically validated tooth velocities. Every case. No exceptions.",
    meta: "Mandatory clinical review",
  },
  {
    n: "04",
    icon: PackageCheck,
    title: "Delivered: STL stages, plan PDF, 3D viewer",
    body:
      "You receive printable STL files for each stage, a clinician-ready treatment summary in your brand, and a shareable 3D viewer link. Unlimited revisions until you're ready to print.",
    meta: "48 hr standard · 24 hr express",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Workflow</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            Scan in. Print-ready in 48 hours.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-ink-500">
            Four steps from intraoral scan to printable aligner stages. No phone tag,
            no chasing files — just a clinician-reviewed plan, delivered under your brand.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 gap-px bg-ink-100 rounded-2xl overflow-hidden border border-ink-100">
          {steps.map((s) => (
            <li key={s.n} className="bg-white p-7 lg:p-9">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-ink-900 text-white flex items-center justify-center">
                  <s.icon className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div className="text-[11px] font-semibold tracking-widest uppercase text-mint-500">
                  STEP {s.n}
                </div>
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-ink-900 tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] text-ink-500 leading-[1.6]">
                {s.body}
              </p>
              <div className="mt-4 text-[12px] text-ink-500">
                {s.meta}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
