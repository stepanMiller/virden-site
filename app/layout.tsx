import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
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
    index: !new URL(siteUrl()).hostname.endsWith(".github.io"),
    follow: !new URL(siteUrl()).hostname.endsWith(".github.io"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
