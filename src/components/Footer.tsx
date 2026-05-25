import Logo from "./Logo";

const cols = [
  {
    title: "Service",
    links: [
      ["How it works", "#process"],
      ["Technology", "#technology"],
      ["Services", "#services"],
      ["Case library", "#cases"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Clinical leadership", "#team"],
      ["Compliance & security", "#compliance"],
      ["Contact", "#contact"],
    ],
  },
  {
    title: "Partners",
    links: [
      ["Partner login", "#/login"],
      ["Submit a case", "#contact"],
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
              Clear aligner treatment-planning, designed in Hong Kong for labs and
              clinics. Design only. No manufacturing. Your brand stays front.
            </p>
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
            © {new Date().getFullYear()} A Line Technologies Limited.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
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
