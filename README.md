# VIRDEN

Responsive B2B hospitality website. Routes:

- homepage `/`;
- `/categories/furniture/`;
- `/categories/textiles/`;
- `/categories/tableware/`;
- `/categories/amenities/`;
- `/categories/merch/`;
- `/categories/oem/`;
- reusable product template at `/products/bathrobe/`.

The three new category pages were prepared on `codex/amenities-merch-oem-review`. On 26 September 2026 the user authorised a GitHub Pages preview through `codex/first-production-pass` for visual review. This is not approval of final content or of a custom-domain release. The public contact destination for commercial CTAs remains to be confirmed.

## Stack

- Next.js 16.3.5, App Router;
- React 19 and TypeScript;
- Tailwind CSS 4 through PostCSS;
- ESLint 9;
- static export for GitHub Pages.

## Local development

Node.js 24 and pnpm 11 are recommended.

```bash
pnpm install
pnpm dev
```

Open:

- `http://localhost:3000/`
- `http://localhost:3000/products/bathrobe/`

Checks:

```bash
pnpm lint
pnpm build
pnpm check:export
```

The static build is written to `out/`.

## GitHub Pages preview

`.github/workflows/deploy-pages.yml` automatically deploys **only** `codex/first-production-pass`, with `NEXT_PUBLIC_BASE_PATH=/virden-site`. No custom domain or DNS change is part of this workflow.

Check a repository-path build without publishing:

```bash
NEXT_PUBLIC_BASE_PATH=/virden-site NEXT_PUBLIC_SITE_URL=https://stepanmiller.github.io/virden-site pnpm build
NEXT_PUBLIC_BASE_PATH=/virden-site pnpm check:export
```

For a later custom domain build, leave `NEXT_PUBLIC_BASE_PATH` empty and set `NEXT_PUBLIC_SITE_URL` to the confirmed origin.

## Project structure

```text
app/                              # routes, metadata and page composition
components/
  layout/                         # logo, header and footer
  media/                          # image/video-ready hero media layer
  ui/                             # shared action primitive
sections/
  home/                           # homepage hero and narrative sections
  product/                        # gallery, overview, details, personalization, QC
  category/                       # shared category presentation, data separated from UI
content/                          # navigation and UI-independent page data
lib/                              # deployment path helpers
styles/                           # design tokens and responsive visual system
public/assets/
  brand/                          # extracted approved VIRDEN lockup
  hero/                           # approved hero poster and supporting imagery
  products/bathrobe/              # seven separate production images
  categories/                     # approved production/category visuals
  video/                          # approved 16:9 velvet hero motion
scripts/                          # static-export checks and gallery-thumbnail preparation
docs/                             # public implementation and review notes, no private sources
```

## Confirmed visual system

- Royal Burgundy `#800020`;
- Cream `#FFFDD0`;
- Antique Bronze `#CD7F32`;
- temporary web-safe Bodoni/Didot-style serif stack for display copy;
- temporary geometric sans stack for body and interface copy.

No commercial font is asserted or bundled.

## Current content status

The bathrobe page uses the confirmed specification and seven separate product images. The homepage contains the six confirmed V1 directions and the five-stage production and delivery process; bathrobes remain a product within Textiles and retain their own product page. Contact details, legal requisites, downloadable specification and unconfirmed commercial conditions are intentionally not invented.

Amenities uses the supplied approved pack. Merch and OEM contain only confirmed categories/capabilities. New illustrative imagery is explicitly labelled in the visible UI and alt text; it is not presented as delivery photography. Gallery thumbnails are separate lightweight derivatives (`pnpm assets:thumbnails`); originals remain full resolution. See `docs/review-amenities-merch-oem.md` for verification and open decisions.

The current CTA destination is the existing contact/footer anchor; a verified public contact channel is still required. The sitemap/canonical origin is configurable through `NEXT_PUBLIC_SITE_URL`. A project-path `robots.txt` is generated, but robots rules are only authoritative at the host root; no DNS or root hosting change is included.
