import Image from "next/image";
import type { Product } from "@/content/products";

export function Personalization({ product }: { product: Product }) {
  return (
    <section className="personalization" id="personalization" aria-labelledby="personalization-title">
      <div className="personalization__media">
        <Image
          src="/assets/images/products/bathrobe/bathrobe-detail-logo-placeholder.jpg"
          alt="Временный фрагмент референса персонализации"
          fill
          sizes="(max-width: 800px) 100vw, 38vw"
        />
      </div>
      <div className="personalization__content">
        <p className="eyebrow">Индивидуальное производство</p>
        <h2 id="personalization-title">Персонализация под ваш бренд</h2>
        <p>
          Возможности показаны как структура будущего предложения. Доступность каждой опции подтверждается в проектной спецификации.
        </p>
        <div className="personalization__options">
          {product.personalization.map((option, index) => (
            <div key={option.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          ))}
        </div>
      </div>
      <blockquote>
        <p>«Не подбираем похожее. Производим нужное.»</p>
        <cite>Смысловая опора VIRDEN</cite>
      </blockquote>
    </section>
  );
}
