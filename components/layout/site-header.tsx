import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { LogoSlot } from "./logo-slot";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="siteHeader__main shell">
        <Link className="siteHeader__brand" href="/" aria-label="На главную">
          <LogoSlot />
        </Link>
        <nav className="siteHeader__nav" aria-label="Основная навигация">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="headerCta" href="/#project-request">
          Запросить КП
        </Link>
      </div>
    </header>
  );
}
