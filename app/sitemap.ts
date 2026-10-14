import type { MetadataRoute } from "next";
import { categoryNavigation } from "@/content/navigation";
import { products } from "@/content/products";
import { siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...categoryNavigation.map(item => `${item.href}/`), ...products.map(product => `/products/${product.slug}/`)].map(path => ({ url: siteUrl(path) }));
}
