import type { ProductImage } from "./products";

export type CategoryContent = {
  slug: string;
  title: string;
  breadcrumb: string;
  eyebrow: string;
  positioning: string;
  description: string;
  gallery: readonly ProductImage[];
  strengths: readonly { title: string; detail: string }[];
  specificationNote: string;
  directionsTitle: string;
  directions: readonly { title: string; description: string; image: string; alt: string }[];
  closingTitle: string;
  closingDescription: string;
};

export const illustrationNote = "Иллюстрации направления — не фотографии поставленных изделий. Внешний вид и параметры согласуются в проекте.";
