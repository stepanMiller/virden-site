import { assetPath } from "@/lib/site-path";

const furnitureAsset = (name: string) => assetPath(`/assets/categories/furniture/${name}`);

export const furnitureContent = {
  title: "Мебель",
  eyebrow: "Мебель для объектов гостеприимства",
  positioning: "Мебель для ресторанов, отелей и общественных пространств",
  description:
    "Подбираем и производим мебель под задачу объекта: с учётом назначения пространства, требований к эксплуатации, материалов, размеров, отделки и визуальной концепции.",
  gallery: [
    {
      src: furnitureAsset("furniture-restaurant-main.jpg"),
      alt: "Ресторанная зона со столом и креслами — визуал направления мебели",
      label: "Ресторанная зона",
    },
    {
      src: furnitureAsset("furniture-buffet.jpg"),
      alt: "Мебель и конструкции для зоны шведской линии",
      label: "Шведская линия",
    },
    {
      src: furnitureAsset("furniture-lobby.jpg"),
      alt: "Мягкая мебель в зоне лобби",
      label: "Лобби",
    },
    {
      src: furnitureAsset("furniture-conference.jpg"),
      alt: "Столы и стулья в конференц-пространстве",
      label: "Конференц-зал",
    },
    {
      src: furnitureAsset("furniture-detail.jpg"),
      alt: "Крупный план обивки и конструкции кресла",
      label: "Деталь мебели",
    },
  ],
  strengths: [
    { title: "Под задачу", detail: "Назначение и планировка пространства" },
    { title: "Согласование", detail: "Размеры, материалы и отделка" },
    { title: "Производство", detail: "Изделие по спецификации объекта" },
    { title: "Комплектация", detail: "Состав решения под проект" },
  ],
  directions: [
    {
      title: "Столы для ресторанов",
      description: "Обеденные и ресторанные столы под планировку и задачу пространства.",
      image: furnitureAsset("furniture-restaurant-main.jpg"),
      alt: "Ресторанный стол в сервированной зоне",
    },
    {
      title: "Стулья",
      description: "Для ресторанов, лобби, общественных зон и конференц-пространств.",
      image: furnitureAsset("furniture-detail.jpg"),
      alt: "Кресло с обивкой и деревянными элементами",
    },
    {
      title: "Шведская линия",
      description: "Мебель и конструкции для зон завтрака и самообслуживания.",
      image: furnitureAsset("furniture-buffet.jpg"),
      alt: "Шведская линия в зоне завтрака",
    },
    {
      title: "Лобби и общественные зоны",
      description: "Мягкая мебель, кресла, диваны и столы для общих пространств.",
      image: furnitureAsset("furniture-lobby.jpg"),
      alt: "Кресла, диван и стол в общественной зоне",
    },
    {
      title: "Конференц-залы",
      description: "Стулья, столы и парты для деловых пространств.",
      image: furnitureAsset("furniture-conference.jpg"),
      alt: "Столы и стулья в конференц-зале",
    },
  ],
  customization: ["Размеры", "Материал", "Цвет", "Конструкция", "Отделка", "Комплектация"],
} as const;
