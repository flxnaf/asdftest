type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({
  variant = "dark",
  className = "",
  showWordmark = true,
}: LogoProps) {
  const ink = variant === "dark" ? "#0F2A4A" : "#FFFFFF";
  const src = variant === "dark" ? "/logo-mark.png" : "/logo-mark-white.png";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={src}
        alt="A Line Technologies"
        width={32}
        height={32}
        className="h-8 w-8 select-none"
      />
      {showWordmark && (
        <span
          className="text-[15.5px] font-semibold tracking-[-0.01em] leading-none"
          style={{ color: ink }}
        >
          A Line<span style={{ color: "#3FB8B0" }}> </span>Technologies
        </span>
      )}
    </div>
  );
}
