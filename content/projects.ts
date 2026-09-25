export type ProjectCase = {
  id: string;
  objectType: string;
  title: string;
  summary: string;
};

// Completion of all four projects was confirmed by the client. Proposal quantities,
// individual line items and visualisations are deliberately not published here.
export const projectCases: ProjectCase[] = [
  {
    id: "hospitality-textiles",
    objectType: "Гостиничный объект",
    title: "Поставка гостиничного текстиля",
    summary: "Текстильная комплектация по согласованной спецификации объекта.",
  },
  {
    id: "branded-products",
    objectType: "Брендированная продукция",
    title: "Изделия по индивидуальному заданию",
    summary: "Поставка брендированных изделий по индивидуальному заданию заказчика.",
  },
  {
    id: "custom-photo-booth",
    objectType: "Объект гостеприимства",
    title: "Фотобудка под задачу объекта",
    summary: "Поставка нестандартного оборудования в рамках индивидуального проекта.",
  },
  {
    id: "winter-sports-equipment",
    objectType: "Горный курорт",
    title: "Горнолыжное оборудование",
    summary: "Поставка специализированной продукции по запросу курорта.",
  },
];
