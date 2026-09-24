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
          <span>Запросить КП</span><span className="headerCta__arrow" aria-hidden="true">→</span>
        </Link>
        <details className="mobileMenu">
          <summary aria-label="Открыть меню"><span>Меню</span><span className="mobileMenu__icon" aria-hidden="true"><i /><i /><i /></span></summary>
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
