import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="siteFooter materialBurgundy" id="project-request">
      <div className="shell siteFooter__grid">
        <div>
          <BrandLogo tone="cream" />
          <p className="siteFooter__statement">Надёжный партнёр для вашего гостеприимства.</p>
        </div>
        <div>
          <p className="eyebrow eyebrow--light">Комплексное оснащение</p>
          <p className="siteFooter__scope">Отели · рестораны · SPA · коммерческие объекты</p>
          <Link className="siteFooter__cta" href="/#project-request">
            Обсудить проект <span aria-hidden="true">→</span>
          </Link>
        </div>
        <nav className="siteFooter__nav" aria-label="Навигация в подвале">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="shell siteFooter__bottom">
        <span>© VIRDEN</span>
        <span>Комплексное оснащение hospitality-объектов</span>
      </div>
    </footer>
  );
}
