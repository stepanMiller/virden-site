"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "@/content/products";

type ProductGalleryProps = Pick<Product, "gallery" | "mainImage" | "mainImageAlt">;

export function ProductGallery({ gallery, mainImage, mainImageAlt }: ProductGalleryProps) {
  const initialIndex = Math.max(
    0,
    gallery.findIndex((image) => image.src === mainImage),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeImage = gallery[activeIndex] ?? { src: mainImage, alt: mainImageAlt, label: "Фото" };

  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
    setZoomed(false);
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % gallery.length);
    setZoomed(false);
  }, [gallery.length]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, showNext, showPrevious]);

  return (
    <div className="productGallery">
      <div className="productGallery__thumbs" aria-label="Фотографии продукта">
        {gallery.map((image, index) => (
          <button
            className="productGallery__thumb"
            data-active={index === activeIndex}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Показать: ${image.label}`}
            aria-pressed={index === activeIndex}
            key={image.src}
          >
            <Image src={image.src} alt="" fill sizes="88px" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      <div className="productGallery__stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button
          className="productGallery__main"
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Открыть фотографию «${activeImage.label}» на весь экран`}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={activeIndex === initialIndex}
            quality={92}
            sizes="(max-width: 900px) 100vw, 47vw"
            style={{ objectPosition: activeImage.position }}
          />
          <span className="productGallery__expand">Увеличить</span>
        </button>
        <div className="productGallery__mobileControls" aria-label="Переключение фотографий">
          <button type="button" onClick={showPrevious} aria-label="Предыдущее фото">
            ←
          </button>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={showNext} aria-label="Следующее фото">
            →
          </button>
        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Галерея: ${activeImage.label}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            ref={closeButtonRef}
            className="lightbox__close"
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Закрыть галерею"
          >
            Закрыть ×
          </button>
          <button className="lightbox__arrow lightbox__arrow--previous" type="button" onClick={showPrevious} aria-label="Предыдущее фото">
            ←
          </button>
          <button
            className="lightbox__image"
            data-zoomed={zoomed}
            type="button"
            onClick={() => setZoomed((value) => !value)}
            aria-label={zoomed ? "Уменьшить фотографию" : "Увеличить фотографию"}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              quality={94}
              sizes="100vw"
              style={{ objectPosition: activeImage.position }}
            />
          </button>
          <button className="lightbox__arrow lightbox__arrow--next" type="button" onClick={showNext} aria-label="Следующее фото">
            →
          </button>
          <div className="lightbox__caption">
            <span>{activeImage.label}</span>
            <span>
              {activeIndex + 1} / {gallery.length}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
