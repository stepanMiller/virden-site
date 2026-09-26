import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ActionLink } from "@/components/ui/action-link";
import { textilesContent } from "@/content/textiles";
import { ProductGallery } from "@/sections/product/product-gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Текстиль",
  description:
    "Текстиль для отелей и SPA: постельное бельё, полотенца, саше, паштемаль и подбор характеристик ткани под требования объекта.",
  openGraph: {
    title: "Текстиль | VIRDEN",
    description:
      "Постельное бельё, полотенца, саше и паштемаль: решения по техническим параметрам и требованиям объекта.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function TextilesPage() {
  const textiles = textilesContent;

  return (
    <>
      <SiteHeader />
      <main className={`productPage ${styles.page}`}>
        <nav className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#directions">Направления</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Текстиль</span>
        </nav>

        <section className="productHero shell" aria-labelledby="textiles-title">
          <ProductGallery
            gallery={[...textiles.gallery]}
            mainImage={textiles.gallery[0].src}
            mainImageAlt={textiles.gallery[0].alt}
          />
          <div className="productHero__info productOverview">
            <p className="eyebrow">{textiles.eyebrow}</p>
            <h1 id="textiles-title">{textiles.title}</h1>
            <p className={styles.positioning}>{textiles.positioning}</p>
            <p className="productOverview__description">{textiles.description}</p>
            <ul className="benefitGrid" aria-label="Принципы текстильного направления">
              {textiles.strengths.map((item, index) => (
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
            <ActionLink href="#textiles-directions" variant="secondary">Смотреть направления</ActionLink>
          </div>
        </section>

        <section className="productDetails shell" id="textiles-directions" aria-labelledby="textiles-directions-title">
          <div className="sectionHeading">
            <p className="eyebrow">Направления</p>
            <h2 id="textiles-directions-title">Решения для текстиля</h2>
          </div>
          <div className="detailGrid">
            {textiles.directions.map((direction) => (
              <article
                className={direction.image ? "detailCard" : `detailCard ${styles.noImageCard}`}
                key={direction.title}
              >
                {direction.image ? (
                  <div className="detailCard__image">
                    <Image
                      src={direction.image}
                      alt={direction.alt}
                      fill
                      quality={92}
                      sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 25vw"
                    />
                  </div>
                ) : null}
                <h3>{direction.title}</h3>
                <p>{direction.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="productClosing materialBurgundy" aria-labelledby="textiles-closing-title">
          <div className="shell productClosing__inner">
            <div>
              <p className="eyebrow eyebrow--light">VIRDEN</p>
              <h2 id="textiles-closing-title">Текстиль под требования вашего объекта</h2>
              <p>Обсудим задачу, параметры и состав комплектации.</p>
            </div>
            <ActionLink href="#project-request" variant="secondary">Обсудить проект</ActionLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
