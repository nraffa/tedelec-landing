import { existsSync } from "node:fs";
import path from "node:path";

type Props = {
  src: string;
  alt: string;
  placeholder: string;
  className?: string;
  loading?: "lazy" | "eager";
};

// Server component: at build/SSR time, only render the <img> if the file
// is actually present in /public. Otherwise the .photo-ph placeholder
// shows on its own — no broken image icon, no alt-text overlay.
export function PhotoFrame({ src, alt, placeholder, className = "", loading = "lazy" }: Props) {
  const exists = existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
  return (
    <div className={`photo-frame ${className}`}>
      <div className="photo-ph">{placeholder}</div>
      {exists && <img src={src} alt={alt} loading={loading} />}
    </div>
  );
}
