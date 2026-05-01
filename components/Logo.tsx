import { existsSync } from "node:fs";
import path from "node:path";

type Props = { className?: string; size?: number };

// Renders /public/logo.png if dropped in, otherwise an SVG approximation of
// the tedelec mark — rounded-house silhouette in dark grey with a stylized
// green "e" inside.
export function Logo({ className = "", size = 40 }: Props) {
  const hasPng = existsSync(path.join(process.cwd(), "public", "logo.png"));
  if (hasPng) {
    return <img src="/logo.png" alt="Tedelec" width={size} height={size} className={className} />;
  }
  const grey = "#4d4d4d";
  const green = "#7cba42";
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Tedelec"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded house outline */}
      <path
        d="M32 6 L58 26 V52 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 V26 Z"
        fill="none"
        stroke={grey}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Stylized 'e' — rounded C with horizontal middle bar and arrow cut */}
      <g fill={green}>
        <path d="M32 18 a14 14 0 1 0 12 21.6 l-3.4 -2.6 a9.6 9.6 0 1 1 -8.6 -14 a9.6 9.6 0 0 1 9.4 7.6 H29 v3.4 h18 a14 14 0 0 0 -15 -15.4 z" />
      </g>
    </svg>
  );
}
