export type ProjectCase = {
  id: string;
  objectType: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

// Completion of all four projects was confirmed by the client. Proposal quantities,
// individual line items and client identities are deliberately not published here.
// Images are neutral illustrative derivatives, not documentary delivery photos.
export const projectCases: ProjectCase[] = [
  {
    id: "hospitality-textiles",
    objectType: "Гостиничный объект",
    title: "Поставка гостиничного текстиля",
    summary: "Текстильная комплектация по согласованной спецификации объекта.",
    image: "/assets/projects/hospitality-textiles-illustration.jpg",
    imageAlt: "Иллюстрация гостиничного текстиля: белые махровые полотенца",
  },
  {
    id: "branded-products",
    objectType: "Брендированная продукция",
    title: "Изделия по индивидуальному заданию",
    summary: "Поставка брендированных изделий по индивидуальному заданию заказчика.",
    image: "/assets/projects/branded-products-illustration.jpg",
    imageAlt: "Иллюстрация категории брендированной продукции: нейтральные аксессуары без логотипов",
  },
  {
    id: "custom-photo-booth",
    objectType: "Объект гостеприимства",
    title: "Фотобудка под задачу объекта",
    summary: "Поставка нестандартного оборудования в рамках индивидуального проекта.",
    image: "/assets/projects/custom-photo-booth-illustration.jpg",
    imageAlt: "Обезличенная иллюстрация отдельностоящей фотобудки",
  },
  {
    id: "winter-sports-equipment",
    objectType: "Горный курорт",
    title: "Горнолыжное оборудование",
    summary: "Поставка специализированной продукции по запросу курорта.",
    image: "/assets/projects/winter-sports-equipment-illustration.jpg",
    imageAlt: "Обезличенная иллюстрация горнолыжного оборудования",
  },
];
