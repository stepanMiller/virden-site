import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ActionLink } from "@/components/ui/action-link";
import { furnitureContent } from "@/content/furniture";
import { ProductGallery } from "@/sections/product/product-gallery";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "Мебель",
  description:
    "Мебель для ресторанов, отелей и общественных пространств. Столы, стулья, шведская линия, лобби и конференц-залы — решения под задачу объекта.",
  path: "/categories/furniture/",
  image: "/assets/categories/furniture/furniture-restaurant-main.jpg",
});

export default function FurniturePage() {
  const furniture = furnitureContent;

  return (
    <>
      <SiteHeader />
      <main className={`productPage ${styles.page}`} id="main-content" tabIndex={-1}>
        <nav className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#directions">Направления</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Мебель</span>
        </nav>

        <section className="productHero shell" aria-labelledby="furniture-title">
          <ProductGallery
            gallery={[...furniture.gallery]}
            mainImage={furniture.gallery[0].src}
            mainImageAlt={furniture.gallery[0].alt}
          />
          <div className="productHero__info productOverview">
            <p className="eyebrow">{furniture.eyebrow}</p>
            <h1 id="furniture-title">{furniture.title}</h1>
            <p className={styles.positioning}>{furniture.positioning}</p>
            <p className="productOverview__description">{furniture.description}</p>
            <ul className="benefitGrid" aria-label="Принципы мебельного направления">
              {furniture.strengths.map((item, index) => (
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
            <ActionLink href="#furniture-directions" variant="secondary">Смотреть направления</ActionLink>
          </div>
        </section>

        <section className="productDetails shell" id="furniture-directions" aria-labelledby="furniture-directions-title">
          <div className="sectionHeading">
            <p className="eyebrow">Направления</p>
            <h2 id="furniture-directions-title">Решения для разных пространств</h2>
          </div>
          <div className="detailGrid">
            {furniture.directions.map((direction) => (
              <article className="detailCard" key={direction.title}>
                <div className={`detailCard__image ${styles.directionImage}`}>
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

        <section className="productClosing materialBurgundy" aria-labelledby="furniture-closing-title">
          <div className="shell productClosing__inner">
            <div>
              <p className="eyebrow eyebrow--light">VIRDEN</p>
              <h2 id="furniture-closing-title">Мебель под требования вашего объекта</h2>
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
