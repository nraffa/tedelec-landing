type Props = { className?: string; size?: number };

// Vector approximation of the tedelec wordmark — used inside the .logo-circle
// in the nav/footer when /public/logo.png is missing. Drop the real logo in
// /public/logo.png to override.
export function Logo({ className = "", size = 40 }: Props) {
  const ink = "#0a0a0a";
  const accent = "#2f6b3a";
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Tedelec"
      role="img"
    >
      <rect width="64" height="64" fill="#fff" />
      <path d="M14 50 L14 28 L26 14 L34 22 L34 50 Z" fill={ink} />
      <path
        d="M44 18 a14 14 0 1 1 -10 24 l3 -4 a9 9 0 1 0 7 -16 a9 9 0 0 0 -9 9 l18 0 l0 4 l-22 0 a13 13 0 0 1 13 -17 z"
        fill={accent}
      />
    </svg>
  );
}
