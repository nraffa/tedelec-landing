# /public

Static assets served at the site root.

- `logo.png` — drop the Tedelec logo here (square crop, ~512×512). The header and footer auto-detect this file at build time and use it; until then they show an SVG approximation of the rounded-house mark with the stylized green "e".
- `favicon.ico` — small icon shown in browser tabs. Convert from the logo at https://favicon.io/ if needed.
- `apple-touch-icon.png` — 180×180 PNG for iOS home-screen.
- `og.jpg` — 1200×630 social-share preview. A simple "Tedelec — Northern Beaches Electricians" image works well.
- `images/hero.jpg` — optional hero photo (replaces the gradient illustration). Edit `components/Hero.tsx` to enable.
- `images/work/*.jpg` — see `images/work/README.md`.

Nothing in this folder is private. Anything you put here becomes publicly accessible at `https://your-domain/<filename>`.
