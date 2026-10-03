# George Winters — McKenzie River Valley Real Estate

164-page static site for George Winters (The Operative Group · Real Broker, LLC),
covering the McKenzie corridor: Springfield to McKenzie Bridge, Oregon.

- Zero-dependency build: `node build.mjs` → `docs/` (GitHub Pages serves `/docs`)
- Content lives in `src/content/` (14 areas × 5 pages, 70 field guides, core pages)
- SEO/AEO: per-page canonical + meta, JSON-LD (RealEstateAgent/FAQPage/Article/Breadcrumb/Place), sitemap.xml, answer-first guide layout
- Brand: TOG | real lockup, green #80bf42, Fraunces/Newsreader/Space Grotesk
- Photos: CC/public-domain (see /credits/) + George's own

## Listings

Property pages live at `/listings/<slug>/` with a card on `/listings/`.

1. **Facts** — add one object to `LISTINGS` in `src/content/listings.mjs`. Every
   value must come from the RMLS sheet, the county, the seller's disclosures, or
   George. Unknown stays out; "Ask" or "Verify with Lane County" beats a guess.
2. **Photos** — drop them in `assets/img/listings/<slug>/`, named so a plain sort
   is tour order (`01-front.jpg`, `02-living.jpg`, …). `01-*` is the hero and the
   social share image. No stock photos, and never AI-generate or retouch one.
3. **Build** — `node build.mjs`, check the page, then set `status` to `active`.

New listings start as `status: 'draft'`: the page builds for review but is
`noindex`, kept out of the sitemap, hidden from the listings index, and carries
a red PREVIEW banner. A non-draft listing with no photos fails the build.
Statuses: `draft` · `coming-soon` · `active` · `pending` · `sold`.
