import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * Top-of-page announcement bar. Edit BANNER_TEXT below or leave empty
 * to hide entirely. Dismissal persists in localStorage so a returning
 * visitor doesn't see it twice unless you change BANNER_VERSION.
 */
const BANNER_VERSION = "v1";

const BANNER_TEXT = {
  en: "[ Banner space — drop your announcement copy here ]",
  zh: "[ 橫額位置 — 在此處放入您的公告文字 ]",
};

const BANNER_HREF = "#contact"; // optional click target; set to "" to disable

import { useLang } from "../i18n/LangContext";

export default function Banner() {
  const { lang } = useLang();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const key = `aline.banner.${BANNER_VERSION}`;
    setDismissed(window.localStorage.getItem(key) === "1");
  }, []);

  const onDismiss = () => {
    window.localStorage.setItem(`aline.banner.${BANNER_VERSION}`, "1");
    setDismissed(true);
  };

  if (dismissed) return null;
  const text = BANNER_TEXT[lang];
  if (!text) return null;

  const Inner = (
    <span className="text-[12.5px] font-medium text-white">{text}</span>
  );

  return (
    <div className="relative z-[60] bg-ink-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-10 flex items-center justify-between gap-4">
        <div className="flex-1 text-center">
          {BANNER_HREF ? (
            <a href={BANNER_HREF} className="hover:text-mint-300 transition-colors">
              {Inner}
            </a>
          ) : (
            Inner
          )}
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss banner"
          className="p-1 -mr-1 text-ink-300 hover:text-white transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
