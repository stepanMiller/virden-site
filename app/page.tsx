import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeHero } from "@/sections/home/home-hero";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HomeHero />
      <SiteFooter />
    </>
  );
}
