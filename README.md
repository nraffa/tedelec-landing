# tedelec-landing

Marketing landing page for **Tedelec** — Sydney electricians servicing the Northern Beaches and North Shore.

Built with Next.js 15 (App Router), TypeScript and Tailwind. Static, no backend, no env vars, no contact-form ingestion — purely tap-to-call and `mailto:` so the public repo carries zero secrets and minimum attack surface.

## Editing content

All copy lives in [`lib/site.ts`](./lib/site.ts) — phone, email, services, areas, work projects, hours. Edit there and the site updates everywhere.

## Adding photos

Drop images into `public/images/` (see `public/README.md` and `public/images/work/README.md` for filenames). The page renders cleanly without them.

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploying

### Vercel (recommended — works from your phone)

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. On your phone, open https://vercel.com/new
3. Sign in with GitHub, pick `tedelec-landing`, click **Deploy**.
4. Vercel auto-detects Next.js and uses the settings in `vercel.json`. No env vars required.
5. After it goes live, add `tedelec.com.au` under **Settings → Domains** and follow the DNS instructions Vercel gives you.

### Render (alternative)

1. https://render.com → **New → Web Service** → connect this repo.
2. Environment: **Node**. Build Command: `npm install && npm run build`. Start Command: `npm run start`.
3. Deploy. Add custom domain under **Settings → Custom Domains**.

## Security notes

This repo is public, so:

- No secrets, tokens, API keys or `.env` files are committed (and `.gitignore` blocks them).
- No form posts to external services — the only contact paths are `tel:` and `mailto:` links.
- Strict security headers (CSP, HSTS, X-Frame-Options DENY, etc.) are set in `next.config.mjs`.
- `metadataBase` and the LocalBusiness JSON-LD use only public business contact info that's already on Instagram.

If you later add a contact form, route it through a serverless function with the third-party API key in **Vercel project env vars** — never commit it to the repo.

## What's borrowed from the open-design `saas-landing` skill

Design discipline rather than runtime: tokens-first colours (charcoal `ink` + green `spark`), display vs. body type split, accent colour used twice (hero badge + footer CTA), no invented hex values, no lorem ipsum.
