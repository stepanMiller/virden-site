import Image from "next/image";
import type { Product } from "@/content/products";

type ProductGalleryProps = Pick<Product, "gallery" | "mainImage" | "mainImageAlt">;

export function ProductGallery({ gallery, mainImage, mainImageAlt }: ProductGalleryProps) {
  return (
    <div className="productGallery">
      <div className="productGallery__thumbs" aria-label="Галерея продукта">
        {gallery.map((image, index) => (
          <div className="productGallery__thumb" data-active={index === 0} key={image.src}>
            <Image src={image.src} alt={image.alt} fill sizes="88px" />
          </div>
        ))}
      </div>
      <figure className="productGallery__main">
        <Image
          src={mainImage}
          alt={mainImageAlt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 900px) 100vw, 48vw"
        />
        <figcaption>Временный фрагмент утверждённого reference image</figcaption>
      </figure>
    </div>
  );
}
