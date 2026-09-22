import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VIRDEN — комплексное оснащение hospitality-объектов",
    template: "%s | VIRDEN",
  },
  description:
    "Комплексное оснащение отелей, ресторанов, SPA и коммерческих объектов.",
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
