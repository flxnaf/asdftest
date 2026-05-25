import LangToggle from "./LangToggle";
import { useLang } from "../i18n/LangContext";
import { UserRound } from "lucide-react";

export default function TopBar() {
  const { t } = useLang();
  return (
    <div className="bg-ink-50 border-b border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-9 flex items-center justify-end gap-5 text-[12.5px]">
        <LangToggle />
        <a
          href="#/login"
          className="inline-flex items-center gap-1.5 text-ink-700 hover:text-ink-900 transition-colors font-medium"
        >
          <UserRound className="w-3.5 h-3.5" strokeWidth={1.8} />
          {t.nav.partnerLogin}
        </a>
      </div>
    </div>
  );
}
