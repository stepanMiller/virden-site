# VIRDEN — first production pass

Responsive B2B website foundation for VIRDEN. The current review scope contains two control pages:

- homepage `/`;
- reusable product template at `/products/bathrobe`.

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
```

The static build is written to `out/`.

## GitHub Pages preview

`.github/workflows/deploy-pages.yml` builds this branch with `NEXT_PUBLIC_BASE_PATH=/virden-site` and publishes `out/` through GitHub Pages. No custom domain or DNS change is part of this workflow.

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
content/                          # navigation and UI-independent page data
lib/                              # deployment path helpers
styles/                           # design tokens and responsive visual system
public/assets/
  brand/                          # extracted approved VIRDEN lockup
  hero/                           # approved hero poster and supporting imagery
  products/bathrobe/              # seven separate production images
  categories/                     # approved production/category visuals
  video/                          # approved 16:9 velvet hero motion
docs/                             # implementation brief and supplied visual references
```

## Confirmed visual system

- Royal Burgundy `#800020`;
- Cream `#FFFDD0`;
- Antique Bronze `#CD7F32`;
- temporary web-safe Bodoni/Didot-style serif stack for display copy;
- temporary geometric sans stack for body and interface copy.

No commercial font is asserted or bundled.

## Current content status

The bathrobe page uses the confirmed specification and seven separate product images. The homepage contains the seven launch directions and the confirmed five-stage production and delivery process. Contact details, legal requisites, downloadable specification and unconfirmed commercial conditions are intentionally not invented.
