import type { Product } from "@/content/products";

export function QualitySection({ product }: { product: Product }) {
  return (
    <section className="qualitySection shell" aria-labelledby="quality-title">
      <div>
        <p className="eyebrow">Quality / trust</p>
        <h2 id="quality-title">Качество, встроенное в процесс</h2>
        <p className="qualitySection__lead">
          За красивым объектом — управляемая цепочка поставок. Образец и спецификация становятся контрольной точкой для производства и комплектации.
        </p>
      </div>
      <div className="qualitySection__grid">
        {product.qualityPoints.map((point, index) => (
          <article key={point.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
