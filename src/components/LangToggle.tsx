import { useLang } from "../i18n/LangContext";

type Props = { variant?: "light" | "dark" };

export default function LangToggle({ variant = "dark" }: Props) {
  const { lang, setLang } = useLang();
  const dark = variant === "dark";

  return (
    <div
      className={`inline-flex items-center rounded-md border p-0.5 text-[12px] font-medium ${
        dark ? "border-ink-200 bg-white" : "border-white/15 bg-white/[0.04]"
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={`px-2 py-1 rounded-[5px] transition-colors ${
          lang === "zh"
            ? dark
              ? "bg-ink-900 text-white"
              : "bg-white text-ink-900"
            : dark
              ? "text-ink-500 hover:text-ink-900"
              : "text-ink-200 hover:text-white"
        }`}
      >
        中
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-1 rounded-[5px] transition-colors ${
          lang === "en"
            ? dark
              ? "bg-ink-900 text-white"
              : "bg-white text-ink-900"
            : dark
              ? "text-ink-500 hover:text-ink-900"
              : "text-ink-200 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
