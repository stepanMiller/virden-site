import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VIRDEN — комплексное оснащение hospitality-объектов",
    template: "%s | VIRDEN",
  },
  description:
    "Комплексное оснащение отелей, ресторанов, SPA и коммерческих объектов.",
  openGraph: {
    title: "VIRDEN — комплексное оснащение hospitality-объектов",
    description: "Мебель, текстиль, халаты, посуда, оснащение номера и индивидуальное производство.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
