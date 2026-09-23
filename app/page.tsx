import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeHero } from "@/sections/home/home-hero";
import {
  HomeCustomization,
  HomeDirections,
  HomeFinalCta,
  HomeOperations,
  HomeSelectedProduct,
  HomeStatement,
} from "@/sections/home/home-sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeDirections />
        <HomeStatement />
        <HomeCustomization />
        <HomeSelectedProduct />
        <HomeOperations />
        <HomeFinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
