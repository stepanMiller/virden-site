import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { BrandLogo } from "./brand-logo";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="siteHeader__main shell">
        <Link className="siteHeader__brand" href="/" aria-label="На главную">
          <BrandLogo priority />
        </Link>
        <nav className="siteHeader__nav siteHeader__nav--desktop" aria-label="Основная навигация">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="headerCta" href="/#project-request">
          <span>Запросить КП</span><span className="headerCta__arrow" aria-hidden="true">→</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
