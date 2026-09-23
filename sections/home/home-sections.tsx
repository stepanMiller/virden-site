import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ui/action-link";
import { homeContent } from "@/content/home";
import { assetPath } from "@/lib/site-path";

export function HomeDirections() {
  return (
    <section className="homeDirections shell" id="directions" aria-labelledby="directions-title">
      <div className="sectionIntro">
        <p className="eyebrow">Направления</p>
        <h2 id="directions-title">Всё для цельного опыта гостя</h2>
        <p>Категории объединяются одной спецификацией и логикой объекта.</p>
      </div>
      <div className="directionCards">
        {homeContent.directions.map((direction, index) => (
          <article key={direction.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{direction.title}</h3>
            <p>{direction.note}</p>
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
        <p>Конструкция, материал, цвет, размер и брендирование собираются вокруг задачи конкретного объекта.</p>
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
        <p>
          Вместо компромисса с готовым каталогом — согласованное решение: от фактуры и размера до фирменной отделки и упаковки.
        </p>
        <ul>
          <li>Материалы и отделка</li>
          <li>Цвет и размерная сетка</li>
          <li>Логотип и брендирование</li>
          <li>Комплектация и упаковка</li>
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
        <p>Production-карточка показывает систему продукта: фотографии, характеристики, детали и персонализацию.</p>
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

export function HomeOperations() {
  return (
    <>
      <section className="operations shell" aria-labelledby="operations-title">
        <div className="sectionIntro sectionIntro--wide">
          <p className="eyebrow">Управляемый процесс</p>
          <h2 id="operations-title">За красивым объектом — управляемая supply chain.</h2>
          <p>Визуальное решение связано с образцами, спецификацией, производством, контролем и комплектацией.</p>
        </div>
        <div className="capabilityGrid">
          {homeContent.capabilities.map((capability, index) => (
            <article key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reliability" aria-labelledby="reliability-title">
        <div className="shell reliability__grid">
          <div>
            <p className="eyebrow">Договорная логика</p>
            <h2 id="reliability-title">Ответственность фиксируется до запуска</h2>
          </div>
          <div className="reliability__points">
            <p>Состав поставки и параметры продукта закрепляются в спецификации.</p>
            <p>Порядок согласования, приёмки и оплаты определяется договором.</p>
            <p className="structuralPlaceholder">Реквизиты и конкретная платёжная схема будут опубликованы после подтверждения.</p>
          </div>
        </div>
      </section>

      <section className="homeProcess shell" id="process" aria-labelledby="process-title">
        <div className="sectionIntro">
          <p className="eyebrow">Процесс</p>
          <h2 id="process-title">От задачи до готовой комплектации</h2>
        </div>
        <ol>
          {homeContent.process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
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
