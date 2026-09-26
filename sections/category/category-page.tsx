import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ActionLink } from "@/components/ui/action-link";
import { ProductGallery } from "@/sections/product/product-gallery";
import { illustrationNote, type CategoryContent } from "@/content/category";
import styles from "./category-page.module.css";

export function CategoryPage({ content }: { content: CategoryContent }) {
  const id = content.slug;
  return (
    <>
      <SiteHeader />
      <main className={`productPage ${styles.page}`} id="main-content" tabIndex={-1}>
        <nav className="breadcrumbs shell" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link><span aria-hidden="true">/</span>
          <Link href="/#directions">Направления</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{content.breadcrumb}</span>
        </nav>
        <section className="productHero shell" aria-labelledby={`${id}-title`}>
          <ProductGallery gallery={[...content.gallery]} mainImage={content.gallery[0].src} mainImageAlt={content.gallery[0].alt} note={illustrationNote} />
          <div className="productHero__info productOverview">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id={`${id}-title`}>{content.title}</h1>
            <p className={styles.positioning}>{content.positioning}</p>
            <p className="productOverview__description">{content.description}</p>
            <ul className="benefitGrid" aria-label="Возможности направления">
              {content.strengths.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.detail}</small></li>)}
            </ul>
            <p className={styles.specificationNote}>{content.specificationNote}</p>
          </div>
          <div className="productOverview__actions">
            <ActionLink href="#project-request">Обсудить проект</ActionLink>
            <ActionLink href={`#${id}-directions`} variant="secondary">Смотреть направления</ActionLink>
          </div>
        </section>
        <section className="productDetails shell" id={`${id}-directions`} aria-labelledby={`${id}-directions-title`}>
          <div className="sectionHeading"><p className="eyebrow">Направления</p><h2 id={`${id}-directions-title`}>{content.directionsTitle}</h2></div>
          <div className={`detailGrid ${styles.directions}`} data-count={content.directions.length}>
            {content.directions.map(item => <article className="detailCard" key={item.title}>
              <div className="detailCard__image"><Image src={item.image} alt={item.alt} fill quality={92} sizes={content.directions.length === 2 ? "(max-width: 540px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"} /></div>
              <h3>{item.title}</h3><p>{item.description}</p>
            </article>)}
          </div>
          <p className={styles.imageNote}>{illustrationNote}</p>
        </section>
        <section className="productClosing materialBurgundy" aria-labelledby={`${id}-closing-title`}>
          <div className="shell productClosing__inner"><div><p className="eyebrow eyebrow--light">VIRDEN</p><h2 id={`${id}-closing-title`}>{content.closingTitle}</h2><p>{content.closingDescription}</p></div><ActionLink href="#project-request" variant="secondary">Обсудить проект</ActionLink></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
