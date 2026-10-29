# Pegasus Tech — Deployment Guide

## 1. Framework, build, and output

| Item | Value |
|------|-------|
| Framework | Vite + React 19 + Tailwind CSS v4 |
| Build command | `npm run build` |
| Output directory | `dist/` (single-file HTML) |
| Dev server | `npm run dev` (localhost:5173) |
| Preview production build | `npm run preview` |
| Backend services | None required (contact form uses Formspree webhook) |

The project is a static frontend. No Node.js server, no SSR, no serverless functions are required. The contact form submits directly to Formspree via a client-side `fetch()` POST, so there are no secrets in the bundle.

## 2. Environment variables

Create `.env` (copied from `.env.example`) before building:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

- `VITE_FORMSPREE_ENDPOINT` — Formspree form endpoint URL. Set the form recipient to `contactpegasustech01@gmail.com` in the Formspree dashboard.
- This value is inlined at build time by Vite (`import.meta.env`). It is safe to commit `.env.example` (placeholder only), but **never commit `.env`** — it is gitignored.
- No API keys or secrets are stored in frontend code or bundles (verified by secret scan).

### Where to configure

| Platform | Where to add `VITE_FORMSPREE_ENDPOINT` |
|----------|----------------------------------------|
| Local | `.env` file in project root |
| Vercel | Project Settings → Environment Variables → add `VITE_FORMSPREE_ENDPOINT` (Production, Preview, Development) |
| Netlify | Site Settings → Build & deploy → Environment → Environment variables |

## 3. Git setup (first commit)

From the project root:

```powershell
git init
git add .
git commit -m "feat: initial Pegasus Tech MVP"
```

Do not add a remote or push without explicit permission. `.gitignore` excludes `node_modules/`, `dist/`, `.env`, editor files, and OS artifacts.

## 4. Build and local testing

```powershell
npm install          # install dependencies
npm run dev          # start dev server (localhost:5173)
npm run build        # production build → dist/
npm run preview      # serve dist/ locally to verify production output
npx tsc --noEmit     # TypeScript typecheck (strict)
```

Expected build output: `dist/index.html` plus `dist/favicon.png`, `dist/robots.txt`, `dist/sitemap.xml`.

## 5. Git-based deployment

### Vercel

1. Push the git repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project → Import your repository**.
3. Framework preset: **Vite** (detected automatically).
4. Build command: `npm run build` (default).
5. Output directory: `dist` (default).
6. Add environment variable `VITE_FORMSPREE_ENDPOINT` in Project Settings.
7. Deploy. Vercel gives you a `*.vercel.app` URL and automatic preview deployments on pull requests.

### Netlify

1. Push the git repository to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Add environment variable `VITE_FORMSPREE_ENDPOINT` in Site Settings.
6. Deploy. Netlify gives you a `*.netlify.app` URL and deploy previews on pull requests.

No `vercel.json`/`netlify.toml` changes are required for the contact form because Formspree is a client-side webhook — no serverless function is involved. The included `vercel.json` documents build output and cache headers for static assets.

## 6. SPA routing and asset paths

- The site is a single-page anchor-scroll layout. All navigation uses fragment links (`#home`, `#services`, `#work`, `#about`, `#contact`) within `index.html`. There is no React Router, so no server-side history fallback is needed.
- Direct access to `https://<domain>/#contact` works because fragments are handled client-side; the server always serves `index.html`.
- Asset paths are root-relative (`/favicon.png`, images from `src/assets/`). Vite copies `public/` contents to `dist/` root, so `/favicon.png`, `/robots.txt`, and `/sitemap.xml` resolve correctly.

## 7. Custom domain and HTTPS

1. In your platform dashboard (Vercel or Netlify), go to **Domain settings** and add your custom domain.
2. Follow the platform's DNS instructions (typically add A/CNAME records). Do **not** modify DNS without explicit permission.
3. HTTPS is provisioned automatically by the platform (Let's Encrypt) once the domain is verified. No certificate configuration is required on your side.
4. After connecting a domain, update `index.html`:
   - Set `og:url` to the production URL (currently a TODO placeholder).
   - Set `og:image` and `twitter:image` to absolute Open Graph image URLs.
   - Update `sitemap.xml` `<loc>` to the production URL.

## 8. Launch checklist

- [ ] `git init` and first commit created (no remote/push yet)
- [ ] `.gitignore` excludes `node_modules/`, `dist/`, `.env`
- [ ] `.env` created locally with real `VITE_FORMSPREE_ENDPOINT`
- [ ] Formspree form created; recipient set to `contactpegasustech01@gmail.com`
- [ ] `npm run build` succeeds (verified)
- [ ] `npx tsc --noEmit` passes (verified)
- [ ] `npm run preview` loads without console errors
- [ ] Favicon loads (`/favicon.png`)
- [ ] Contact form submits successfully (test with real email)
- [ ] Project links verified (none set yet — add real URLs to `src/data.ts` if available)
- [ ] Social links verified (generic links removed; add verified profiles if available)
- [ ] Git repository pushed to GitHub/GitLab/Bitbucket (only with permission)
- [ ] Connected to Vercel or Netlify
- [ ] Environment variable `VITE_FORMSPREE_ENDPOINT` set in platform dashboard
- [ ] Production deployment loads over HTTPS
- [ ] Custom domain connected and HTTPS active (only with permission to modify DNS)

## Remaining blockers (require your action)

1. **No git remote / no deploy performed** — You must explicitly authorize pushing to a remote and connecting to Vercel/Netlify.
2. **No production domain** — `og:url`, `og:image`, `twitter:image`, and `sitemap.xml` use relative/placeholder values until a domain is verified.
3. **No project URLs** — All `project.url` fields are unset; card external links are hidden. Add verified case-study/live URLs to `src/data.ts` if you have them.
4. **No verified social profiles** — Generic social links were removed; add verified Pegasus Tech profile URLs to `Footer.tsx`/`Contact.tsx` if available.
5. **Formspree not configured** — Create the form and set `VITE_FORMSPREE_ENDPOINT` before the contact form delivers real inquiries.
