import type { Metadata } from "next";

const siteRoot = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://stepanmiller.github.io/virden-site").replace(/\/+$/, "");

export function siteUrl(path = "/") {
  return `${siteRoot}/${path.replace(/^\/+/, "")}`;
}

export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image: string }): Metadata {
  const url = siteUrl(path);
  const imageUrl = siteUrl(image);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | VIRDEN`, description, url, siteName: "VIRDEN", type: "website", locale: "ru_RU", images: [{ url: imageUrl, alt: title }] },
    twitter: { card: "summary_large_image", title: `${title} | VIRDEN`, description, images: [imageUrl] },
  };
}
