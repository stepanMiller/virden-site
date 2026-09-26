# VIRDEN — category review pass

Publication update (26 September 2026): the user subsequently authorised publication to the existing GitHub Pages preview branch to inspect the pages and retain the option to revert. The remaining contact and visual decisions below still require review. This update does not cover a custom-domain release.

## Review boundary

- Working branch: `codex/amenities-merch-oem-review`.
- Based on `origin/codex/first-production-pass` at `fa8b055ace05836dd0b68e8e4f9ccbfd25fe1fcf`.
- No deployment, merge, DNS, domain, Pages workflow or hosting changes.
- The local canonical project context and approved amenities pack were read before implementation. Private source documents are not in this commit.
- Existing uncommitted drafts for the six-direction homepage were preserved and integrated. Bathrobe remains a Textiles product with its own page and homepage feature.

## Pages and content

1. `/categories/amenities/`: approved pack, six gallery images and five directions — slippers, bath care, hygiene items, personal kits and shoe care.
2. `/categories/merch/`: confirmed caps, umbrellas, cosmetic pouches and pens; agreed branding, design and packaging capabilities. Five gallery images.
3. `/categories/oem/`: confirmed individual-production capabilities, photobooth and specialised/ski-equipment directions. Two gallery images, no invented models or technical specifications.

New pages reuse the existing category/product language, gallery, CTA, header/footer and design tokens. No new case studies, quantities, lead times, prices or external client identities were added. Illustrations are labelled both visibly and in alt text. See [image provenance](category-image-provenance.md).

Homepage cards now open the three new routes and show relevant, clearly labelled imagery. The OEM supporting image now represents its actual confirmed direction. All six category pages are accessible from desktop navigation, the mobile menu and footer.

## Audit fixes

- Separate canonical URLs, descriptions, Open Graph and Twitter metadata across eight pages; configurable site origin, sitemap and robots export.
- `noindex,nofollow` on the GitHub Pages review host, to keep the preview out of search results; a confirmed custom-domain build can be indexable.
- Skip-to-content targets; corrected product heading reference and specification row headers; semantic bathrobe breadcrumbs linked to Textiles.
- Menu Escape/outside-click handling and scrollable mobile navigation.
- Lightbox keyboard focus containment/restoration, Escape and arrow navigation, tap zoom, swipe direction checking and prevention of swipe-triggered accidental opening.
- Lightweight thumbnail files for all seven galleries. Full-size image sources remain unchanged for existing products/categories.
- Improved mobile body/specification readability and gallery-control touch targets without changing the approved two-column product philosophy.
- Corrected a 768px amenities benefit-label overflow and ensured illustration labels use readable text colour.
- Reused the standard UI arrow on the 404 page; Russian quality-section label.

Hero composition, video source/playback component, logo, palette, bathrobe specifications, Projects and supply-chain content are unchanged. No dependencies were added or upgraded.

## Verification

- `pnpm lint`: passed.
- `pnpm build` with `/virden-site` base path: passed; all routes statically exported.
- `NEXT_PUBLIC_BASE_PATH=/virden-site pnpm check:export`: passed — eight content pages and 559 local references, including anchors and assets. Unique titles, descriptions, canonical URLs, one H1 per page, image alt attributes and skip targets checked.
- Browser matrix: homepage, six categories and bathrobe × 375, 390, 430, 768, 1024 and 1440px — 48 combinations passed. No horizontal overflow, broken images, JavaScript exceptions or unexpected HTTP errors observed.
- 14 interaction checks passed: desktop category menu, Escape/focus return, autoplay attributes, reduced-motion poster/pause, mobile menu fit and navigation, thumbnail selection, lightbox open/focus, keyboard next, Tab containment, zoom, Escape/focus restoration, touch swipe and 404 home link.
- Full-page screenshots saved for all eight routes at 1440 and 390px; separate navigation and homepage-category screenshots supplied with the review.
- New image pixels and public asset names inspected for external client identification; derivatives contain no source EXIF/identifying metadata. No private PDFs, archive, credentials or internal source files added.
- `git diff --check`: passed.

The environment's pnpm wrapper was invoked with `--config.manage-package-manager-versions=false --config.verify-deps-before-run=false` to run the already-installed project dependencies without unrelated automatic installation. This did not change the manifest versions or lockfile.

Scope limits: desktop Chrome and responsive/touch emulation, not physical iPhone Safari. This is a targeted technical/visual/basic SEO audit, not a full WCAG certification, penetration test, field Core Web Vitals measurement or search-indexing guarantee.

## Decisions required before final sign-off

1. Confirm a public email, telephone or messenger destination for commercial requests. Existing CTA links currently scroll to the footer, which has no confirmed contact channel. No fake address, submission or form backend was introduced.
2. Approve the three new pages and the four new merch illustrations. Illustrations must not be described as delivered-product photography.
3. Confirm the final visual/content result after inspecting the GitHub Pages preview. The approved fallback point before this pass is `fa8b055ace05836dd0b68e8e4f9ccbfd25fe1fcf`; any rollback should be a new revert commit without rewriting branch history.

Future hosting note: GitHub project Pages cannot establish an authoritative host-root robots policy through `/virden-site/robots.txt`. Sitemap and canonical URLs are configured; root/domain changes remain outside this pass.
