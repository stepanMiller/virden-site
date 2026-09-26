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

`merch-overview.webp` is a full-size WebP derivative of the existing public `projects/branded-products-illustration.jpg` (1536 × 1024).

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

Reused existing anonymous public illustrations, not private proposal images:

- `projects/custom-photo-booth-illustration.jpg` → `categories/oem/oem-photo-booth.webp` (1536 × 1024).
- `projects/winter-sports-equipment-illustration.jpg` → `categories/oem/oem-special-equipment.webp` (1679 × 937).

No new case studies or delivered quantities are inferred from these images. Copy concerns only confirmed capabilities and equipment directions.

## Delivery and thumbnails

All 13 full-size new category WebPs are metadata-stripped technical derivatives. They retain their source dimensions and use `contain` in category detail imagery. New assets were visually inspected for accidental external branding or identifying text.

`pnpm assets:thumbnails` creates 34 lightweight `-thumb.webp` derivatives for the seven galleries. Thumbnails fit within 192 × 256 without upscaling; the main image and lightbox still use full-size sources. Combined thumbnail weight is 205,790 bytes versus 8,724,473 bytes for the corresponding originals (about 98% less for thumbnail resources, not a claim about total page weight).
