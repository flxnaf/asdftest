import Logo from "./Logo";
import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-5 text-[13.5px] leading-[1.65] text-ink-300 max-w-md">
              {t.footer.tagline}
            </p>
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-[0.18em] text-mint-300 uppercase">
              {t.footer.contactLabel}
            </div>
            <div className="mt-5 space-y-2">
              <div>
                <a
                  href="#contact"
                  className="text-[14px] text-white hover:text-mint-300 transition-colors"
                >
                  {t.footer.submitCase} →
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${t.footer.emailUs}`}
                  className="text-[14px] text-white hover:text-mint-300 transition-colors"
                >
                  {t.footer.emailUs}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-ink-400">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>

        <p className="mt-6 text-[10.5px] text-ink-400 max-w-4xl leading-[1.6]">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
