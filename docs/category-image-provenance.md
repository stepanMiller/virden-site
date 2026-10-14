# Category image provenance — review pass

All new category images are illustrative. They do not document a delivered item, an exact model, material, specification or client project. Visible disclosures accompany the gallery and direction cards; alt text also identifies illustrations. No client branding, prices or private source documents are included.

## Amenities

Six supplied, user-approved PNGs from the amenities pack were converted to WebP, without upscaling or compositional changes, at quality 92. Dimensions remain 1536 × 1024. The original archive and its internal instructions stay outside the repository.

| Source image | Public derivative under `public/assets/categories/amenities/` |
| --- | --- |
| 01_amenities_overview.png | amenities-overview.webp |
| 02_slippers.png | amenities-slippers.webp |
| 03_bath_care.png | amenities-bath-care.webp |
| 04_hygiene_items.png | amenities-hygiene.webp |
| 05_personal_kits.png | amenities-personal-kits.webp |
| 06_shoe_care.png | amenities-shoe-care.webp |

## Merch

`merch-overview.webp` is a separate generated category illustration (1536 × 1024), replacing the duplicate of `projects/branded-products-illustration.jpg`. It shows a top-down arrangement of four unbranded product types; the existing Projects image remains unchanged.

Four individual category illustrations were made with the built-in image-generation tool for this review, then converted to quality-92 WebP at their original 1448 × 1086 resolution. No product marks were added. These illustrations require visual approval before deployment.

Exact prompt construction: concatenate the following prefix, the relevant subject sentence and the suffix, with one space between each.

Prefix:

> Use case: product-mockup. A single high-resolution photorealistic illustrative product image for the established VIRDEN B2B hospitality category page. Subject:

Subjects and saved production paths:

- `public/assets/categories/merch/merch-cap.webp`: One unbranded ivory cotton baseball cap, viewed three-quarter from the front, complete silhouette with curved brim and visible fabric weave and stitching.
- `public/assets/categories/merch/merch-umbrella.webp`: One folded charcoal-black compact umbrella with neatly wrapped canopy, simple wrist loop and matte handle, lying diagonally, entire object inside frame.
- `public/assets/categories/merch/merch-pouch.webp`: One unbranded ivory textile cosmetics pouch with a simple zipper, upright three-quarter view showing shape and fabric weave. No extra products.
- `public/assets/categories/merch/merch-pen.webp`: One unbranded cream and brushed steel ballpoint pen, laid diagonally on a small plain ivory paper card, close product view, entire pen visible.

Suffix:

> Scene: a clean warm-white/ivory limestone tabletop, calm contemporary hotel interior very softly out of focus. Soft natural side light, restrained realistic shadows, excellent crisp material detail. Neutral ivory, charcoal, soft cream; no yellow cast, no glossy luxury effect. Simple editorial composition, subject centered with comfortable margins, landscape 4:3 framing suitable for a product gallery and mobile thumbnail. No text, no logos, no invented VIRDEN monogram, no labels, no watermark, no people, no collage, no borders. This is an illustration of the product category, not a documentary image or a specific delivered SKU. Match restrained existing VIRDEN hospitality imagery.

## OEM

Two separate generated category illustrations replace derivatives of the Projects images:

- `categories/oem/oem-photo-booth.webp` (1536 × 1024): an ivory rectangular conceptual booth with a burgundy curtain in a neutral hospitality setting. This is distinct from the black cylindrical project illustration.
- `categories/oem/oem-special-equipment.webp` (1536 × 1024): unbranded skis upright in a rack in a neutral hospitality setting. This is distinct from the project flat-lay.

The three existing Projects images and case copy remain unchanged. The new category visuals are explicitly illustrative, not images of delivered products or exact models. No new case studies or delivered quantities are inferred from them. Copy concerns only confirmed capabilities and equipment directions.

### Prompt set for the three replacement illustrations

Generated with the built-in image-generation tool; each prompt was used independently. Full-size PNGs were converted to metadata-stripped quality-92 WebP without upscaling.

`merch-overview.webp`:

> Use case: product-mockup. Asset type: VIRDEN B2B hospitality merch category overview, clearly illustrative rather than evidence of a delivered project. Create a high-resolution photorealistic editorial overhead flat-lay. On a light neutral ivory limestone surface arrange exactly four separate unbranded items with clear spacing: one ivory cotton baseball cap, one closed charcoal compact umbrella, one plain cream zippered cosmetic pouch, and one simple brushed-metal pen. Camera directly overhead, landscape 3:2 composition, all four complete silhouettes visible, crisp real textile and metal detail, soft natural side light, contemporary premium hospitality restraint, warm white rather than yellow beige, tiny deep burgundy #800020 accent only if naturally part of background fabric. Different composition from an existing oblique tabletop project photo: no plant, no hotel chair, no stacked books. No text, no logos, no monograms, no labels, no visible client identity, no watermark, no people, no collage or borders. This is a generic category illustration, not an actual delivered SKU or client project.

`oem-photo-booth.webp`:

> Use case: product-mockup. Asset type: illustrative image for VIRDEN OEM / custom equipment category, not a photograph of a delivered project. Create a high-resolution photorealistic conceptual photo booth with a clear compact rectangular structure, light warm-ivory side panels, subtle dark burgundy #800020 curtain at the entrance, a small camera lens and blank neutral display on the front, and a simple print slot. Show the entire booth in three-quarter view inside an empty calm contemporary hospitality lobby with warm-white stone and soft natural light; landscape 3:2 frame with generous margins. The design must be visibly distinct from a black cylindrical fluted booth on a plain background: no black cylinder, no ribbed barrel, no matching pose or studio backdrop. Quiet premium B2B aesthetic, realistic materials, restrained bronze only if needed. No people, no text, no logos, no monograms, no signage, no client colors or marks, no watermark. Generic illustrative concept, not an exact supplied model.

`oem-special-equipment.webp`:

> Use case: product-mockup. Asset type: illustrative image for VIRDEN specialised/OEM equipment category, not a photograph of delivered products. Create a high-resolution photorealistic editorial image of two pairs of generic unbranded alpine skis with bindings standing upright in a simple clean wood ski rack near a warm-ivory stone wall in an understated mountain-hospitality interior; optional plain black ski boots neatly beside the rack. Show complete skis and a clear sense of scale, three-quarter side view, landscape 3:2 frame, soft diffused daylight, restrained neutral palette with a very subtle deep burgundy #800020 fabric accent in the background. This must be distinct from the existing top-down flat-lay of black skis, snowboard, goggles and gloves on white: no overhead view, no snowboard, no goggles, no arranged flat-lay. No people, no snow action, no text, no logos, no brand marks, no client identity, no watermark. Generic illustrative category image; no claim about an actual supplied model.

## Delivery and thumbnails

All full-size category WebPs are metadata-stripped technical derivatives. They retain their source dimensions and use `contain` in category detail imagery. New assets were visually inspected for accidental external branding or identifying text.

`pnpm assets:thumbnails` creates lightweight `-thumb.webp` derivatives for the galleries. Thumbnails fit within 192 × 256 without upscaling; the main image and lightbox still use full-size sources.
