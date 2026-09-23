import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { BrandLogo } from "./brand-logo";

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
          Запросить КП
        </Link>
        <details className="mobileMenu">
          <summary>Меню</summary>
          <nav aria-label="Мобильная навигация">
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
