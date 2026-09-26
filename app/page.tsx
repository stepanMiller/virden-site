import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeHero } from "@/sections/home/home-hero";
import { HomeProjects } from "@/sections/home/home-projects";
import { pageMetadata } from "@/lib/metadata";
import {
  HomeCustomization,
  HomeDirections,
  HomeFinalCta,
  HomeOem,
  HomeOperations,
  HomeSelectedProduct,
  HomeStatement,
} from "@/sections/home/home-sections";

export const metadata = {
  ...pageMetadata({ title: "Комплексное оснащение отелей, ресторанов и SPA", description: "Мебель, текстиль, посуда, оснащение номера, брендированная продукция и OEM. Производство и комплектация под требования объекта.", path: "/", image: "/assets/hero/virden-hero-poster.jpg" }),
  title: { absolute: "VIRDEN — комплексное оснащение отелей, ресторанов и SPA" },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <HomeDirections />
        <HomeStatement />
        <HomeCustomization />
        <HomeSelectedProduct />
        <HomeOem />
        <HomeOperations />
        <HomeProjects />
        <HomeFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
