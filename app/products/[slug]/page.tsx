import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getProductBySlug, products } from "@/content/products";
import { Personalization } from "@/sections/product/personalization";
import { ProductDetails } from "@/sections/product/product-details";
import { ProductGallery } from "@/sections/product/product-gallery";
import { ProductActions, ProductOverview } from "@/sections/product/product-overview";
import { QualitySection } from "@/sections/product/quality-section";
import { pageMetadata } from "@/lib/metadata";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return pageMetadata({
    title: product.name,
    description: product.seoDescription,
    path: `/products/${product.slug}/`,
    image: `/assets/products/${product.slug}/${product.slug}-front.webp`,
  });
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <SiteHeader />
      <main className="productPage" id="main-content" tabIndex={-1}>
        <nav className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/categories/textiles">Текстиль</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>
        <section className="productHero shell" aria-labelledby="product-title">
          <ProductGallery
            gallery={product.gallery}
            mainImage={product.mainImage}
            mainImageAlt={product.mainImageAlt}
          />
          <div className="productHero__info">
            <ProductOverview product={product} />
          </div>
          <ProductActions />
        </section>
        <ProductDetails product={product} />
        <Personalization product={product} />
        <QualitySection product={product} />
        <section className="productClosing materialBurgundy" aria-labelledby="product-closing-title">
          <div className="shell productClosing__inner">
            <div>
              <p className="eyebrow eyebrow--light">VIRDEN</p>
              <h2 id="product-closing-title">Продукт под стандарт вашего объекта</h2>
              <p>Финальные параметры, образец и комплектация согласуются в проектной спецификации.</p>
            </div>
            <Link className="productClosing__link" href="#project-request">
              Обсудить поставку <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
