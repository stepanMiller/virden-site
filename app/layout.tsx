import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteUrl } from "@/lib/metadata";
import { MetrikaPageviews } from "@/components/analytics/metrika-pageviews";

const isProductionDomain = new URL(siteUrl()).hostname === "virden.ru";

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
      <body>
        {children}
        {isProductionDomain && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=113124000','ym');ym(113124000,'init',{ssr:true,webvisor:false,clickmap:true,referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
            </Script>
            <MetrikaPageviews />
            <noscript>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://mc.yandex.ru/watch/113124000" style={{ position: "absolute", left: "-9999px" }} alt="" />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
