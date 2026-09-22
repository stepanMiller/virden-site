# VIRDEN site — production stage 1

Первый production-прототип B2B-сайта VIRDEN. На этом этапе реализованы только homepage hero и универсальная product page на маршруте `/products/bathrobe`.

## Stack

- Next.js 16.3.5, App Router
- React 19
- TypeScript (strict)
- Tailwind CSS 4 через PostCSS
- ESLint 9 + `eslint-config-next`

## Локальный запуск

Требуется Node.js 20.9+ и pnpm 11.

```bash
pnpm install
pnpm dev
```

Откройте:

- `http://localhost:3000/`
- `http://localhost:3000/products/bathrobe`

Проверки:

```bash
pnpm lint
pnpm build
pnpm start
```

## Структура

```text
app/                         # App Router, metadata, routes
  products/[slug]/           # универсальный product route
components/
  layout/                    # header, footer, logo asset slot
  media/                     # video-ready hero media
  ui/                        # базовые UI-примитивы
sections/
  home/                      # homepage hero
  product/                   # gallery, overview, details, personalization, quality
content/                     # navigation, homepage copy, product data
styles/                      # brand tokens and shared styles
public/assets/
  images/                    # temporary cropped reference placeholders
  video/                     # optimized desktop/mobile hero video sources
  fonts/                     # future licensed/self-hosted fonts
docs/
  references/                # supplied approved visual references, not publicly served
  visual-style-brief.md      # implementation reading of approved references
```

## Design tokens

Tokens live in `styles/tokens.css`:

- Royal Burgundy — `#800020`
- Cream — `#FFFDD0`
- Antique Bronze — `#CD7F32`

Typography currently uses web-safe temporary stacks: Georgia/Times for display and Arial/Helvetica for interface copy. No commercial font is asserted or bundled.

## Hero video contract

`components/media/hero-media.tsx` contains the production-ready video layer. Sources are configured in `content/home.ts`.

- separate desktop/mobile MP4 sources;
- video-derived JPEG poster fallback;
- `object-fit: cover` crop;
- dedicated mobile `object-position` crop;
- overlay independent from text/navigation;
- `preload="metadata"` with an eager poster;
- `autoplay`, `muted`, `loop` and `playsInline`;
- `prefers-reduced-motion` pause and poster fallback.

## Content status

Commercial facts, contacts, product specifications and operational promises have not been invented. Any temporary product copy is explicitly marked as demonstration content in the interface and stored separately in `content/products.ts`.

## Required real assets

See the READMEs inside `public/assets/images/logo`, `public/assets/video` and `public/assets/fonts`. At minimum the next pass needs:

1. Original VIRDEN logo in SVG (preferred) plus approved raster fallback.
   The current favicon is intentionally transparent until the original mark is supplied.
2. Approved product photography in original resolution, without screenshot UI.
3. Licensed brand font files, if VIRDEN has fixed corporate typefaces.
4. Confirmed contact details and legal/company information.
5. Confirmed product copy, specification, CTA destinations and downloadable PDFs.
