import { ActionLink } from "@/components/ui/action-link";
import type { Product } from "@/content/products";

export function ProductOverview({ product }: { product: Product }) {
  return (
    <div className="productOverview">
      <p className="eyebrow">{product.category}</p>
      <h1 id="product-title">{product.name}</h1>
      <p className="productOverview__lead">{product.lead}</p>
      <p className="productOverview__description">{product.description}</p>

      <ul className="benefitGrid" aria-label="Преимущества продукта">
        {product.benefits.map((benefit, index) => (
          <li key={benefit.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{benefit.title}</strong>
            <small>{benefit.description}</small>
          </li>
        ))}
      </ul>

      <div className="specTable" role="table" aria-label="Характеристики продукта">
        {product.specs.map((spec) => (
          <div className="specTable__row" role="row" key={spec.label}>
            <span role="rowheader">{spec.label}</span>
            <strong role="cell">{spec.value}</strong>
          </div>
        ))}
      </div>

    </div>
  );
}

export function ProductActions() {
  return (
    <div className="productOverview__actions">
      <ActionLink href="#project-request">Запросить коммерческое предложение</ActionLink>
      <ActionLink href="#personalization" variant="secondary">Обсудить образец</ActionLink>
    </div>
  );
}
