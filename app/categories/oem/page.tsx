import { oemContent } from "@/content/oem";
import { CategoryPage } from "@/sections/category/category-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: oemContent.title, description: "Нестандартное оборудование и OEM: подбор производства по описанию, эскизу или образцу. Конструкция, материалы, брендирование и комплектация по спецификации.", path: "/categories/oem/", image: "/assets/categories/oem/oem-photo-booth.webp" });
export default function OemPage() { return <CategoryPage content={oemContent} />; }
