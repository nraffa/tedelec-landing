type Props = { variant?: "dark" | "light"; className?: string };

export function Logo({ variant = "dark", className = "" }: Props) {
  // Vector approximation of the tedelec wordmark — used as a graceful fallback
  // when /public/logo.png is missing. Drop the real logo in /public/logo.png to override.
  const ink = variant === "dark" ? "#2F3437" : "#FAFAF7";
  const green = "#7FBA42";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Tedelec">
      <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
        {/* arrow / house */}
        <path d="M14 50 L14 28 L26 14 L34 22 L34 50 Z" fill={ink} />
        {/* e mark */}
        <path
          d="M44 18 a14 14 0 1 1 -10 24 l3 -4 a9 9 0 1 0 7 -16 a9 9 0 0 0 -9 9 l18 0 l0 4 l-22 0 a13 13 0 0 1 13 -17 z"
          fill={green}
        />
      </svg>
      <span
        className="font-display text-[22px] font-semibold tracking-tightish leading-none"
        style={{ color: ink }}
      >
        ted<span style={{ color: green }}>elec</span>
      </span>
    </span>
  );
}
