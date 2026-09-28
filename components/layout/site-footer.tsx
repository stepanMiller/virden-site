import Link from "next/link";
import { categoryNavigation, primaryNavigation } from "@/content/navigation";
import { contactUrl } from "@/content/contact";
import { siteUrl } from "@/lib/metadata";
import { BrandLogo } from "./brand-logo";

const isProductionDomain = new URL(siteUrl()).hostname === "virden.ru";

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
          <a className="siteFooter__cta" href={contactUrl} target="_blank" rel="noopener noreferrer">
            Обсудить проект в MAX <span aria-hidden="true">→</span>
          </a>
        </div>
        <nav className="siteFooter__nav" aria-label="Навигация в подвале">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <span className="siteFooter__navLabel">Категории</span>
          {categoryNavigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className="shell siteFooter__bottom">
        <span>© VIRDEN</span>
        <span>Комплексное оснащение hospitality-объектов</span>
      </div>
      {isProductionDomain && (
        <p className="shell siteFooter__analyticsNotice">
          На сайте используется Яндекс Метрика для анализа посещений, просмотренных страниц и переходов к контакту.
          Сервис применяет файлы cookie. Подробнее об обработке данных — в{" "}
          <a href="https://yandex.ru/legal/confidential/ru/" target="_blank" rel="noopener noreferrer">
            политике конфиденциальности Яндекса
          </a>.
        </p>
      )}
    </footer>
  );
}
