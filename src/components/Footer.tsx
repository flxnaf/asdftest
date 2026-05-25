import Logo from "./Logo";
import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.4fr,2.2fr] gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-[13.5px] leading-[1.65] text-ink-300 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {t.footer.cols.map((c) => (
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
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>

        <p className="mt-8 text-[10.5px] text-ink-400 max-w-4xl leading-[1.6]">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
