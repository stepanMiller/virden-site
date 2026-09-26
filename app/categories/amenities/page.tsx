import { amenitiesContent } from "@/content/amenities";
import { CategoryPage } from "@/sections/category/category-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: amenitiesContent.title, description: "Оснащение номера: тапочки, косметика, гигиенические принадлежности, индивидуальные наборы и уход за обувью. Комплектация и брендирование под задачу объекта.", path: "/categories/amenities/", image: "/assets/categories/amenities/amenities-overview.webp" });
export default function AmenitiesPage() { return <CategoryPage content={amenitiesContent} />; }
