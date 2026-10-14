export const primaryNavigation = [
  { label: "Направления", href: "/#directions" },
  { label: "Возможности", href: "/#capabilities" },
  { label: "Процесс", href: "/#process" },
  { label: "Проекты", href: "/#projects" },
  { label: "Продукция", href: "/products/bathrobe" },
] as const;

export const mobileNavigation = primaryNavigation;

export const categoryNavigation = [
  { label: "Мебель", href: "/categories/furniture" },
  { label: "Текстиль", href: "/categories/textiles" },
  { label: "Посуда / ресторан", href: "/categories/tableware" },
  { label: "Оснащение номера", href: "/categories/amenities" },
  { label: "Брендированная продукция", href: "/categories/merch" },
  { label: "Оборудование / OEM", href: "/categories/oem" },
] as const;
