# Larkspur Bank

A large, multi-page bank website built with React (Vite), React Router, and AOS
(Animate on Scroll).

## Pages included

- `/` — Home (hero, feature grid, "how it works", stats, testimonial, CTA)
- `/about` — About, company timeline, values
- `/accounts` — Personal / Business account comparison tabs
- `/cards` — Card showcase (debit, credit, metal) + controls
- `/loans` — Interactive loan payment calculator
- `/contact` — Validated contact form
- `/login` — Split-screen login with password show/hide, remember me, forgot password
- `/signup` — 3-step account opening flow with progress stepper
- `/dashboard` — Mock post-login dashboard (accounts, transactions, quick actions, spending chart)
- `*` — 404 page

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- All amounts are shown in Indian Rupees (₹), and rates/terminology (interest
  p.a., NEFT/RTGS/IMPS, DICGC insurance, RuPay debit) reflect Indian retail
  banking conventions. All figures are illustrative — Larkspur Bank is a
  fictional brand for this demo.
- Login/signup do not connect to a real backend; they simulate a short loading
  state and route to `/dashboard`.
- AOS is initialized once in `src/App.jsx` and re-triggered on route change so
  scroll animations replay per page. Cards, stats, and account tiles also use
  a few small CSS keyframe/hover animations (growing bars, floating hero card,
  card lift on hover) on top of AOS.
- Styling is plain CSS in `src/index.css` using CSS custom properties for the
  color and type system — no CSS framework required.

## Deploying to GitHub Pages (github.com/prasanna08-alt/bank)

The project is already configured for a GitHub Pages **project site** at
`https://prasanna08-alt.github.io/bank/`:

- `vite.config.js` sets `base: '/bank/'` so built assets resolve correctly.
- `src/main.jsx` sets `<BrowserRouter basename="/bank">` so all the page
  routes (`/login`, `/dashboard`, etc.) work under that subpath.
- `predeploy`/`deploy` npm scripts copy `index.html` to `404.html` after
  building, which is the standard trick that lets a single-page React Router
  app handle deep links on GitHub Pages (a static host with no server-side
  rewrites).

**Push the code to your repo first** (run this from inside the project folder):

```bash
git init
git add .
git commit -m "Larkspur Bank site"
git branch -M main
git remote add origin https://github.com/prasanna08-alt/bank.git
git push -u origin main
```

Then pick **one** of the two deploy methods below.

### Option A — GitHub Actions (recommended, fully automatic)

A workflow is already included at `.github/workflows/deploy.yml`. It builds
and deploys on every push to `main`. You only need to turn it on once:

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. Your site will be live at `https://prasanna08-alt.github.io/bank/`.

### Option B — `gh-pages` package (manual, one command)

```bash
npm install
npm run deploy
```

This builds the site and pushes the `dist` folder to a `gh-pages` branch.
Then in your repo → **Settings → Pages**, set **Source** to **Deploy from a
branch**, branch **gh-pages**, folder **/(root)**.

> I don't have network/GitHub access from this environment, so I can't run
> `git push` or authenticate to your repo myself — the commands above need to
> be run on your machine (or in a codespace/terminal that's already logged
> into GitHub).
