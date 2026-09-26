import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ActionLink } from "@/components/ui/action-link";
import { tablewareContent } from "@/content/tableware";
import { ProductGallery } from "@/sections/product/product-gallery";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Посуда / ресторан",
  description:
    "Профессиональная посуда для отелей и ресторанов: номер, room service, бар, шведская линия и рестораны à la carte.",
  path: "/categories/tableware/",
  image: "/assets/categories/tableware/tableware-restaurant.webp",
});

export default function TablewarePage() {
  const tableware = tablewareContent;

  return (
    <>
      <SiteHeader />
      <main className={`productPage ${styles.page}`} id="main-content" tabIndex={-1}>
        <nav className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#directions">Направления</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Посуда / ресторан</span>
        </nav>

        <section className="productHero shell" aria-labelledby="tableware-title">
          <ProductGallery
            gallery={[...tableware.gallery]}
            mainImage={tableware.gallery[0].src}
            mainImageAlt={tableware.gallery[0].alt}
          />
          <div className="productHero__info productOverview">
            <p className="eyebrow">{tableware.eyebrow}</p>
            <h1 id="tableware-title">{tableware.title}</h1>
            <p className={styles.positioning}>{tableware.positioning}</p>
            <p className="productOverview__description">{tableware.description}</p>
            <ul className="benefitGrid" aria-label="Принципы направления посуды и ресторана">
              {tableware.strengths.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </li>
              ))}
            </ul>
            <p className={styles.specificationNote}>
              Финальные параметры и состав комплектации фиксируются в спецификации проекта.
            </p>
          </div>
          <div className="productOverview__actions">
            <ActionLink href="#project-request">Обсудить проект</ActionLink>
            <ActionLink href="#tableware-directions" variant="secondary">Смотреть направления</ActionLink>
          </div>
        </section>

        <section className="productDetails shell" id="tableware-directions" aria-labelledby="tableware-directions-title">
          <div className="sectionHeading">
            <p className="eyebrow">Направления</p>
            <h2 id="tableware-directions-title">Решения для ресторанов и сервировки</h2>
          </div>
          <div className="detailGrid">
            {tableware.directions.map((direction) => (
              <article className="detailCard" key={direction.title}>
                <div className="detailCard__image">
                  <Image
                    src={direction.image}
                    alt={direction.alt}
                    fill
                    quality={92}
                    sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 20vw"
                  />
                </div>
                <h3>{direction.title}</h3>
                <p>{direction.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="productClosing materialBurgundy" aria-labelledby="tableware-closing-title">
          <div className="shell productClosing__inner">
            <div>
              <p className="eyebrow eyebrow--light">VIRDEN</p>
              <h2 id="tableware-closing-title">Посуда под требования вашего объекта</h2>
              <p>Обсудим формат сервиса, нагрузку и состав комплектации.</p>
            </div>
            <ActionLink href="#project-request" variant="secondary">Обсудить проект</ActionLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
