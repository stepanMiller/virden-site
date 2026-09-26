import { assetPath } from "@/lib/site-path";

const tablewareAsset = (name: string) => assetPath(`/assets/categories/tableware/${name}`);

export const tablewareContent = {
  title: "Посуда / ресторан",
  eyebrow: "Посуда и решения для ресторанов",
  positioning: "Профессиональная посуда для отелей и ресторанов",
  description:
    "Подбираем посуду и решения для сервировки под формат и нагрузку объекта — для номера, room service, бара, шведской линии и ресторанов à la carte. Учитываем интенсивность эксплуатации и требования к профессиональной мойке.",
  gallery: [
    {
      src: tablewareAsset("tableware-restaurant.webp"),
      alt: "Керамическая чаша на сервированном ресторанном столе",
      label: "Посуда для ресторана",
    },
    {
      src: tablewareAsset("tableware-room-service.webp"),
      alt: "Бульонная чашка на блюдце для подачи в номере",
      label: "Номер и room service",
    },
    {
      src: tablewareAsset("tableware-buffet.webp"),
      alt: "Колпак для выкладки продуктов на шведской линии",
      label: "Шведская линия",
    },
    {
      src: tablewareAsset("tableware-bar.webp"),
      alt: "Набор ёмкостей для соусов и масла на стойке",
      label: "Бар и сервировка",
    },
    {
      src: tablewareAsset("tableware-display.webp"),
      alt: "Многоуровневая витрина с хлебом и выпечкой",
      label: "Выкладка и подача",
    },
  ],
  strengths: [
    {
      title: "Формат сервиса",
      detail: "Номер, room service, бар, buffet и à la carte.",
    },
    {
      title: "Интенсивная эксплуатация",
      detail: "Решения для высокой проходимости и профессионального использования.",
    },
    {
      title: "Профессиональная мойка",
      detail: "Подбор с учётом регулярной эксплуатации в посудомоечных машинах.",
    },
    {
      title: "Под задачу объекта",
      detail: "Состав сервировки и эксплуатационные требования фиксируются в спецификации проекта.",
    },
  ],
  directions: [
    {
      title: "Посуда для ресторана",
      description: "Решения для ресторанов à la carte и повседневной профессиональной сервировки.",
      image: tablewareAsset("tableware-restaurant.webp"),
      alt: "Керамическая чаша для ресторанной сервировки",
    },
    {
      title: "Номер и room service",
      description: "Посуда для обслуживания в номере и room service.",
      image: tablewareAsset("tableware-room-service.webp"),
      alt: "Бульонная чашка на блюдце для подачи в номере",
    },
    {
      title: "Шведская линия",
      description: "Решения для зон завтрака, buffet и самообслуживания.",
      image: tablewareAsset("tableware-buffet.webp"),
      alt: "Колпак для выкладки продуктов на шведской линии",
    },
    {
      title: "Бар и сервировка",
      description: "Предметы сервировки для бара, ресторанного зала и сопутствующей подачи.",
      image: tablewareAsset("tableware-bar.webp"),
      alt: "Набор ёмкостей для соусов и масла на стойке",
    },
    {
      title: "Buffet display / подача",
      description: "Предметные решения для выкладки и подачи в зонах завтрака и buffet.",
      image: tablewareAsset("tableware-display.webp"),
      alt: "Многоуровневая витрина с хлебом и выпечкой",
    },
  ],
} as const;
