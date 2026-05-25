import Logo from "./Logo";

const cols = [
  {
    title: "Service",
    links: [
      ["How it works", "#process"],
      ["Technology", "#technology"],
      ["Services", "#services"],
      ["Case library", "#cases"],
      ["White-label portal", "#contact"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Clinical leadership", "#team"],
      ["Compliance & security", "#compliance"],
      ["Careers", "#"],
      ["Press", "#"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Partner portal", "#contact"],
      ["Submission guide", "#"],
      ["Clinical reference", "#"],
      ["DPA template (NDA)", "#"],
      ["Status", "#"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.4fr,2.2fr] gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-[13.5px] leading-[1.65] text-ink-300 max-w-sm">
              Clear aligner treatment-planning, designed in Hong Kong for the world's
              labs and clinics. Design only. No manufacturing. Your brand stays front.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { label: "ISO 13485", icon: "ISO" },
                { label: "HIPAA-aligned", icon: "HIPAA" },
                { label: "GDPR", icon: "GDPR" },
                { label: "PDPO HK", icon: "PDPO" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-md border border-white/10 text-ink-200"
                  title={b.label}
                >
                  {b.icon}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] font-semibold tracking-[0.18em] text-mint-300 uppercase">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-[13.5px] text-ink-300 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-ink-400">
          <div>
            © {new Date().getFullYear()} A Line Technologies Limited. Registered in Hong Kong.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sub-processors</a>
            <a href="#" className="hover:text-white">Responsible disclosure</a>
          </div>
        </div>

        <p className="mt-8 text-[10.5px] text-ink-400 max-w-4xl leading-[1.6]">
          A Line Technologies provides clear aligner treatment-planning design services
          to dental laboratories, orthodontic clinics, and aligner brands. We do not
          manufacture aligners. We are not a clinical practice and do not provide
          orthodontic care directly to patients. All clinical decision-making remains
          the responsibility of the treating clinician. Trademarks and brand names
          referenced for software interoperability remain the property of their
          respective owners.
        </p>
      </div>
    </footer>
  );
}
