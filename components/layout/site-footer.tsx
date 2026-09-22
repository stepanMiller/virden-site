import Link from "next/link";
import { primaryNavigation } from "@/content/navigation";
import { LogoSlot } from "./logo-slot";

export function SiteFooter() {
  return (
    <footer className="siteFooter" id="project-request">
      <div className="shell siteFooter__grid">
        <div>
          <LogoSlot />
          <p className="siteFooter__statement">Надёжный партнёр для вашего гостеприимства.</p>
        </div>
        <div>
          <p className="eyebrow eyebrow--light">Контакты</p>
          <p className="siteFooter__placeholder">
            Подтверждённые телефон, email и реквизиты будут добавлены после получения материалов.
          </p>
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
        <span>VIRDEN</span>
        <span>Production prototype · stage 1</span>
      </div>
    </footer>
  );
}
