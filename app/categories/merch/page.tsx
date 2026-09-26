import { merchContent } from "@/content/merch";
import { CategoryPage } from "@/sections/category/category-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: merchContent.title, description: "Кепки, зонты, косметички и ручки с брендированием. Индивидуальный дизайн, оформление и комплектация продукции под требования заказчика.", path: "/categories/merch/", image: "/assets/categories/merch/merch-overview.webp" });
export default function MerchPage() { return <CategoryPage content={merchContent} />; }
