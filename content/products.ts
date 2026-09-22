export type ProductBenefit = {
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  lead: string;
  description: string;
  contentStatus: string;
  mainImage: string;
  mainImageAlt: string;
  gallery: Array<{ src: string; alt: string }>;
  benefits: ProductBenefit[];
  specs: ProductSpec[];
  details: ProductDetail[];
  personalization: Array<{ title: string; description: string }>;
  qualityPoints: Array<{ title: string; description: string }>;
};

export const products: Product[] = [
  {
    slug: "bathrobe",
    category: "Халаты для отелей и SPA",
    name: "Халат вафельный премиум",
    lead: "Комфорт. Статус. Забота в деталях.",
    description:
      "Временный описательный текст для проверки шаблона карточки. Финальная формулировка будет добавлена после передачи подтверждённых продуктовых материалов.",
    contentStatus:
      "Демонстрационные данные: характеристики и коммерческие формулировки требуют подтверждения.",
    mainImage: "/assets/images/products/bathrobe/bathrobe-main-placeholder.jpg",
    mainImageAlt: "Временный фрагмент утверждённого референса халата VIRDEN",
    gallery: [
      {
        src: "/assets/images/products/bathrobe/bathrobe-main-placeholder.jpg",
        alt: "Общий вид халата — временный референс",
      },
      {
        src: "/assets/images/products/bathrobe/bathrobe-detail-collar-placeholder.jpg",
        alt: "Деталь воротника — временный референс",
      },
      {
        src: "/assets/images/products/bathrobe/bathrobe-detail-piping-placeholder.jpg",
        alt: "Деталь окантовки — временный референс",
      },
      {
        src: "/assets/images/products/bathrobe/bathrobe-detail-logo-placeholder.jpg",
        alt: "Пример персонализации — временный референс",
      },
    ],
    benefits: [
      { title: "Комфорт", description: "Параметры материала уточняются" },
      { title: "Персонализация", description: "Варианты подтверждаются" },
      { title: "Контроль качества", description: "Регламент будет добавлен" },
      { title: "Для hospitality", description: "Сценарии применения уточняются" },
    ],
    specs: [
      { label: "Материал", value: "Уточняется по спецификации" },
      { label: "Плотность", value: "Уточняется по спецификации" },
      { label: "Цвет", value: "По согласованной палитре" },
      { label: "Размеры", value: "По согласованной размерной сетке" },
      { label: "Персонализация", value: "Опции уточняются под проект" },
      { label: "Уход", value: "Инструкция будет добавлена" },
    ],
    details: [
      {
        title: "Шалевый воротник",
        description: "Конструкция показана по утверждённому визуальному направлению.",
        image: "/assets/images/products/bathrobe/bathrobe-detail-collar-placeholder.jpg",
        alt: "Воротник халата — временный референс",
      },
      {
        title: "Контрастная окантовка",
        description: "Цвет и материал окантовки требуют подтверждения.",
        image: "/assets/images/products/bathrobe/bathrobe-detail-piping-placeholder.jpg",
        alt: "Окантовка халата — временный референс",
      },
      {
        title: "Брендирование",
        description: "Способ нанесения согласуется для конкретного проекта.",
        image: "/assets/images/products/bathrobe/bathrobe-detail-logo-placeholder.jpg",
        alt: "Пример брендирования — временный референс",
      },
      {
        title: "Пояс и карманы",
        description: "Функциональные детали настраиваются в рамках спецификации.",
        image: "/assets/images/products/bathrobe/bathrobe-detail-belt-placeholder.jpg",
        alt: "Пояс халата — временный референс",
      },
    ],
    personalization: [
      { title: "Вышивка", description: "Логотип предоставляется заказчиком" },
      { title: "Цвет", description: "Палитра подтверждается образцами" },
      { title: "Размеры", description: "Сетка согласуется до производства" },
      { title: "Упаковка", description: "Формат определяется задачей объекта" },
    ],
    qualityPoints: [
      { title: "Материалы", description: "Подтверждение образцами" },
      { title: "Конструкция", description: "Согласование спецификации" },
      { title: "Стабильность", description: "Проверка перед производством" },
      { title: "Комплектация", description: "Контроль состава поставки" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
