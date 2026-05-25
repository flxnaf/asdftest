type Props = {
  label: string;
  hint?: string;
  spec?: string;
  variant?: "light" | "dark";
  className?: string;
  aspect?: string;
};

/**
 * Image / media placeholder. Make it obvious to the tech team
 * what asset needs to drop in and at what dimensions.
 */
export default function Placeholder({
  label,
  hint,
  spec,
  variant = "light",
  className = "",
  aspect,
}: Props) {
  const dark = variant === "dark";
  return (
    <div
      className={`${dark ? "placeholder-dark" : "placeholder"} ${
        aspect ?? ""
      } rounded-xl flex flex-col items-center justify-center text-center p-6 ${className}`}
    >
      <div
        className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-ink-300" : "text-ink-400"
        }`}
      >
        Image placeholder
      </div>
      <div
        className={`mt-3 text-[14px] font-semibold ${
          dark ? "text-white" : "text-ink-800"
        }`}
      >
        {label}
      </div>
      {hint && (
        <div
          className={`mt-2 text-[12.5px] max-w-sm leading-snug ${
            dark ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {hint}
        </div>
      )}
      {spec && (
        <div
          className={`mt-4 text-[11px] ${
            dark ? "text-ink-400" : "text-ink-400"
          }`}
        >
          {spec}
        </div>
      )}
    </div>
  );
}
