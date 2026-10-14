"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Product } from "@/content/products";
import { thumbnailPath } from "@/lib/site-path";

type ProductGalleryProps = Pick<Product, "gallery" | "mainImage" | "mainImageAlt"> & { note?: string };

export function ProductGallery({ gallery, mainImage, mainImageAlt, note }: ProductGalleryProps) {
  const initialIndex = Math.max(
    0,
    gallery.findIndex((image) => image.src === mainImage),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
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
    swiped.current = false;
    const touch = event.touches[0];
    touchStart.current = touch && event.touches.length === 1 && !zoomed ? { x: touch.clientX, y: touch.clientY } : null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    const end = event.changedTouches[0];
    touchStart.current = null;
    if (!start || !end) return;
    const distance = end.clientX - start.x;
    if (Math.abs(distance) < 45 || Math.abs(distance) <= Math.abs(end.clientY - start.y)) return;
    swiped.current = true;
    if (distance > 0) showPrevious();
    else showNext();
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (["Escape", "ArrowLeft", "ArrowRight"].includes(event.key)) event.preventDefault();
      if (event.key === "Escape") { setLightboxOpen(false); setZoomed(false); }
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      opener?.focus({ preventScroll: true });
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
            <Image src={thumbnailPath(image.src)} alt="" fill sizes="88px" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      <div className="productGallery__stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button
          className="productGallery__main"
          type="button"
          onClick={() => { if (!swiped.current) { setZoomed(false); setLightboxOpen(true); } swiped.current = false; }}
          aria-label={`Открыть фотографию «${activeImage.label}» на весь экран`}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            preload={activeIndex === initialIndex}
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

      {note ? <p className="productGallery__note">{note}</p> : null}

      {lightboxOpen ? (
        <div
          ref={dialogRef}
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
            onClick={() => { setLightboxOpen(false); setZoomed(false); }}
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
            onClick={() => { if (!swiped.current) setZoomed((value) => !value); swiped.current = false; }}
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
