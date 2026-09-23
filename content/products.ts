import { assetPath } from "@/lib/site-path";

export type ProductBenefit = {
  title: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
  position?: string;
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
  gallery: ProductImage[];
  benefits: ProductBenefit[];
  specs: ProductSpec[];
  details: ProductDetail[];
  personalization: Array<{ title: string; description: string }>;
  qualityPoints: Array<{ title: string; description: string }>;
};

const bathrobeAsset = (file: string) => assetPath(`/assets/products/bathrobe/${file}`);

const bathrobeGallery: ProductImage[] = [
  {
    src: bathrobeAsset("bathrobe-front.webp"),
    alt: "Белый вафельный халат VIRDEN — вид спереди",
    label: "Вид спереди",
    position: "center 22%",
  },
  {
    src: bathrobeAsset("bathrobe-back.webp"),
    alt: "Белый вафельный халат VIRDEN — вид сзади",
    label: "Вид сзади",
    position: "center 20%",
  },
  {
    src: bathrobeAsset("bathrobe-collar.webp"),
    alt: "Шалевый воротник вафельного халата VIRDEN",
    label: "Воротник",
  },
  {
    src: bathrobeAsset("bathrobe-embroidery.webp"),
    alt: "Вышитая монограмма V на халате VIRDEN",
    label: "Вышивка",
  },
  {
    src: bathrobeAsset("bathrobe-belt-pocket.webp"),
    alt: "Пояс и накладной карман халата VIRDEN",
    label: "Пояс и карман",
  },
  {
    src: bathrobeAsset("bathrobe-texture-piping.webp"),
    alt: "Вафельная фактура и бронзовая окантовка халата",
    label: "Фактура",
  },
  {
    src: bathrobeAsset("bathrobe-folded.webp"),
    alt: "Сложенный халат VIRDEN в SPA-интерьере",
    label: "В интерьере",
  },
];

export const products: Product[] = [
  {
    slug: "bathrobe",
    category: "Халаты для отелей и SPA",
    name: "Халат вафельный премиум",
    lead: "Комфорт. Статус. Забота в деталях.",
    description:
      "Двухслойный халат для отелей и SPA: с одной стороны вафельная ткань, с другой — махровая. Шалевый воротник, контрастная бейка и возможность брендирования под фирменный стиль объекта.",
    contentStatus:
      "Характеристики приведены по утверждённому макету и требуют финального подтверждения в технической спецификации.",
    mainImage: bathrobeGallery[0].src,
    mainImageAlt: bathrobeGallery[0].alt,
    gallery: bathrobeGallery,
    benefits: [
      { title: "Комфорт", description: "Вафельная ткань снаружи, махровая сторона внутри" },
      { title: "Персонализация", description: "Вышивка логотипа и контрастная бейка" },
      { title: "Конструкция", description: "Двухслойный дизайн, пояс и карманы" },
      { title: "Для hospitality", description: "Отели, SPA и wellness" },
    ],
    specs: [
      { label: "Материал", value: "100% хлопок; с одной стороны вафельная ткань, с другой — махровая" },
      { label: "Плотность", value: "370–380 г/м²" },
      { label: "Цвет", value: "Белый с контрастной бейкой" },
      { label: "Размеры", value: "S / M / L / XL; возможно изготовление по размерной сетке" },
      { label: "Особенности", value: "Шалевый воротник; воротник, края карманов и рукава отделаны контрастной бейкой; пояс и карманы" },
      { label: "Брендирование", value: "Вышитый логотип на левом верхнем кармане" },
    ],
    details: [
      {
        title: "Шалевый воротник",
        description: "Шалевый воротник с контрастной бейкой.",
        image: bathrobeAsset("bathrobe-collar.webp"),
        alt: "Шалевый воротник халата",
      },
      {
        title: "Контрастная окантовка",
        description: "Контрастная бейка проходит по воротнику, краям карманов и рукавам.",
        image: bathrobeAsset("bathrobe-texture-piping.webp"),
        alt: "Бронзовая окантовка на вафельной ткани",
      },
      {
        title: "Брендирование",
        description: "Логотип вышивается на левом верхнем кармане.",
        image: bathrobeAsset("bathrobe-embroidery.webp"),
        alt: "Вышитая монограмма на халате",
      },
      {
        title: "Пояс и карманы",
        description: "Функциональные детали для ежедневного использования.",
        image: bathrobeAsset("bathrobe-belt-pocket.webp"),
        alt: "Пояс и накладной карман халата",
      },
      {
        title: "Подача продукта",
        description: "Комплектация и упаковка определяются задачей объекта.",
        image: bathrobeAsset("bathrobe-folded.webp"),
        alt: "Сложенный халат в SPA-интерьере",
      },
    ],
    personalization: [
      { title: "Вышивка", description: "Монограмма или логотип объекта" },
      { title: "Цвет", description: "Окантовка по согласованной палитре" },
      { title: "Размеры", description: "Размерная сетка под проект" },
      { title: "Упаковка", description: "Формат под задачу объекта" },
    ],
    qualityPoints: [
      { title: "Образец", description: "Фиксируем материал, цвет и конструкцию" },
      { title: "Спецификация", description: "Согласуем параметры до производства" },
      { title: "Контроль партии", description: "Проверяем соответствие согласованному образцу" },
      { title: "Комплектация", description: "Контролируем состав поставки" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
