import Image from "next/image";
import type { Product } from "@/content/products";

export function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="productDetails shell" aria-labelledby="details-title">
      <div className="sectionHeading">
        <p className="eyebrow">Конструкция</p>
        <h2 id="details-title">Продуманные детали — ощутимая разница</h2>
      </div>
      <div className="detailGrid">
        {product.details.map((detail) => (
          <article className="detailCard" key={detail.title}>
            <div className="detailCard__image">
              <Image
                src={detail.image}
                alt={detail.alt}
                fill
                quality={90}
                sizes="(max-width: 430px) 100vw, (max-width: 720px) 50vw, (max-width: 1180px) 33vw, 20vw"
              />
            </div>
            <h3>{detail.title}</h3>
            <p>{detail.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
