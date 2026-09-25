import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ui/action-link";
import { homeContent } from "@/content/home";
import { assetPath } from "@/lib/site-path";

export function HomeDirections() {
  return (
    <section className="homeDirections shell" id="directions" aria-labelledby="directions-title">
      <div className="homeDirections__mobileIntro">
        <div>
          <p className="eyebrow">Направления</p>
          <h2>Больше, чем поставки. Партнёрство, которое работает.</h2>
          <p>{homeContent.description}</p>
          <Link href="#project-request">Обсудить проект <span aria-hidden="true">→</span></Link>
        </div>
        <div className="homeDirections__mobileImage">
          <Image src={assetPath("/assets/products/bathrobe/bathrobe-embroidery.webp")} alt="Вафельный текстиль с вышивкой VIRDEN" fill quality={92} sizes="(max-width: 720px) 34vw, 1px" />
        </div>
      </div>
      <div className="sectionIntro">
        <p className="eyebrow">Направления</p>
        <h2 id="directions-title">Всё для цельного опыта гостя</h2>
        <p>Категории объединяются одной спецификацией и логикой объекта.</p>
      </div>
      <div className="directionCards">
        {homeContent.directions.map((direction, index) => (
          <article className="directionCard" key={direction.title}>
            <div className="directionCard__media">
              <Image
                src={assetPath(direction.image)}
                alt={direction.imageAlt}
                fill
                quality={92}
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectPosition: direction.position }}
              />
            </div>
            <div className="directionCard__body">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{direction.title}</h3>
              <p>{direction.note}</p>
              {"href" in direction ? (
                <Link className="directionCard__link" href={direction.href} aria-label={`Открыть: ${direction.title}`}>
                  Смотреть продукт <svg className="directionCard__linkArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10" /></svg>
                </Link>
              ) : (
                <svg className="directionCard__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10" /></svg>
              )}
            </div>
            {direction.title === "Мебель" ? (
              <Link className="directionCard__hitarea" href="/categories/furniture" aria-label="Открыть раздел «Мебель»" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomeStatement() {
  return (
    <section className="homeStatement materialBurgundy" aria-labelledby="statement-title">
      <div className="shell homeStatement__inner">
        <p className="eyebrow eyebrow--light">Подход VIRDEN</p>
        <h2 id="statement-title">Не подбираем похожее. Производим нужное.</h2>
        <p>Размер, материал, цвет, конструкция, плотность, брендинг и комплектация определяются задачей конкретного объекта.</p>
      </div>
    </section>
  );
}

export function HomeCustomization() {
  return (
    <section className="homeCustomization shell" id="capabilities" aria-labelledby="customization-title">
      <div className="homeCustomization__media">
        <Image
          src={assetPath("/assets/products/bathrobe/bathrobe-embroidery.webp")}
          alt="Вышивка монограммы VIRDEN на вафельном халате"
          fill
          quality={92}
          sizes="(max-width: 800px) 100vw, 48vw"
        />
      </div>
      <div className="homeCustomization__copy">
        <p className="eyebrow">Индивидуальное производство</p>
        <h2 id="customization-title">Детали, которые работают на бренд объекта</h2>
        <p>Согласуем параметры изделия и его применения: от материала и конструкции до вышивки, комплектации и упаковки.</p>
        <ul>
          {homeContent.customization.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function HomeSelectedProduct() {
  return (
    <section className="selectedProduct shell" aria-labelledby="selected-product-title">
      <div className="selectedProduct__copy">
        <p className="eyebrow">Выбранный продукт</p>
        <h2 id="selected-product-title">Вафельный халат для отелей и SPA</h2>
        <ActionLink href="/products/bathrobe">Открыть карточку</ActionLink>
      </div>
      <Link className="selectedProduct__media" href="/products/bathrobe" aria-label="Открыть карточку вафельного халата">
        <Image
          src={assetPath("/assets/products/bathrobe/bathrobe-front.webp")}
          alt="Белый вафельный халат VIRDEN"
          fill
          quality={92}
          sizes="(max-width: 800px) 100vw, 54vw"
        />
      </Link>
    </section>
  );
}

export function HomeOem() {
  return (
    <section className="homeOem shell" aria-labelledby="oem-title">
      <div className="homeOem__copy">
        <p className="eyebrow">Нестандартное оборудование / OEM</p>
        <h2 id="oem-title">Не только то, что уже есть в каталоге</h2>
        <p>По запросу объекта подбираем производство для нестандартных изделий, фирменного оборудования и продукции под собственной маркой.</p>
        <p>Отправной точкой может быть описание задачи, эскиз или образец.</p>
      </div>
      <div className="homeOem__media">
        <Image src={assetPath("/assets/categories/bakery-display.jpg")} alt="Предметное решение для шведской линии, иллюстрирующее категорию оборудования" fill quality={92} sizes="(max-width: 800px) 100vw, 48vw" />
      </div>
    </section>
  );
}

export function HomeOperations() {
  return (
    <>
      <section className="reliability" aria-labelledby="reliability-title">
        <div className="shell reliability__grid">
          <div>
            <p className="eyebrow">Договорная логика</p>
            <h2 id="reliability-title">Ответственность фиксируется до запуска</h2>
          </div>
          <div className="reliability__points">
            <p>Состав поставки и параметры продукта закрепляются в спецификации.</p>
            <p>Порядок согласования, приёмки и оплаты определяется договором.</p>
          </div>
        </div>
      </section>

      <section className="homeProcess shell" id="process" aria-labelledby="process-title">
        <div className="sectionIntro">
          <p className="eyebrow">Процесс</p>
          <h2 id="process-title">От задачи до готовой комплектации</h2>
        </div>
        <div className="homeProcess__lead">
          <h3>За красивым объектом — управляемая цепочка поставок</h3>
          <p>Пять этапов связывают задачу объекта, согласованный образец, производство и поставку.</p>
        </div>
        <ol>
          {homeContent.process.map((step, index) => (
            <li className="homeProcess__step" key={step.title}>
              <span className="homeProcess__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="homeProcess__title"><h4>{step.title}</h4></div>
              <div className="homeProcess__body">
                {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {"scenarios" in step ? (
                  <div className="homeProcess__scenarios">
                    {step.scenarios.map((scenario) => (
                      <div key={scenario.title}>
                        <strong>{scenario.title}</strong>
                        <p>{scenario.text}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export function HomeFinalCta() {
  return (
    <section className="homeFinalCta materialBurgundy" aria-labelledby="final-cta-title">
      <div className="shell homeFinalCta__inner">
        <div>
          <p className="eyebrow eyebrow--light">VIRDEN</p>
          <h2 id="final-cta-title">Оснащение, собранное вокруг вашего объекта</h2>
        </div>
        <ActionLink href="#project-request" variant="secondary">
          Обсудить проект
        </ActionLink>
      </div>
    </section>
  );
}
