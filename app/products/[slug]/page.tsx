import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getProductBySlug, products } from "@/content/products";
import { Personalization } from "@/sections/product/personalization";
import { ProductDetails } from "@/sections/product/product-details";
import { ProductGallery } from "@/sections/product/product-gallery";
import { ProductOverview } from "@/sections/product/product-overview";
import { QualitySection } from "@/sections/product/quality-section";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: product.name,
    description: `${product.category}. Статический production-прототип карточки продукта VIRDEN.`,
  };
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
      <main className="productPage">
        <div className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <span>Продукция</span>
          <span aria-hidden="true">/</span>
          <span>{product.name}</span>
        </div>
        <section className="productHero shell" aria-labelledby="product-title">
          <ProductGallery
            gallery={product.gallery}
            mainImage={product.mainImage}
            mainImageAlt={product.mainImageAlt}
          />
          <div id="product-title">
            <ProductOverview product={product} />
          </div>
        </section>
        <ProductDetails product={product} />
        <Personalization product={product} />
        <QualitySection product={product} />
      </main>
      <SiteFooter />
    </>
  );
}
