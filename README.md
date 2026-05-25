# AUREX — Marketing site

React + Vite SPA for **AUREX IT Solutions** (websites, web apps, mobile, cloud).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port Vite prints).

## Environment

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical URL for SEO, OG, sitemap |
| `VITE_CONTACT_FORM_ENDPOINT` | Optional POST URL (e.g. [Formspree](https://formspree.io)) for contact form |

**Branded emails (recommended):** deploy on Vercel with `RESEND_API_KEY` — see [`docs/formspree/README.md`](docs/formspree/README.md).

**Fallback:** Formspree `https://formspree.io/f/xeedlbzp` when Resend is not configured (plain notification).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npm run lint` — ESLint

## Content

Edit copy and data in:

- `src/data/company.js` — services, pricing, team, testimonials, meta
- `src/data/portfolio.js` — projects and images
- `src/data/blogPosts.js` — blog list metadata
- `src/data/blogBodies.js` — full article bodies per post id

## Deploy

Build output is static. Deploy `dist/` to Vercel, Netlify, or any static host. Set `VITE_SITE_URL` to your production domain before building.
