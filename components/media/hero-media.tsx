"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroMediaProps = {
  poster: string;
  desktopSource: string | null;
  mobileSource: string | null;
  alt: string;
};

export function HeroMedia({ poster, desktopSource, mobileSource, alt }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const hasVideo = Boolean(desktopSource || mobileSource);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;

    if (reducedMotion) {
      video.pause();
      return;
    }

    void video.play().catch(() => undefined);
  }, [hasVideo, reducedMotion]);

  return (
    <div className="heroMedia" data-video-ready={hasVideo}>
      <Image
        className="heroMedia__poster"
        src={poster}
        alt={alt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 800px) 100vw, 46vw"
      />
      {hasVideo ? (
        <video
          ref={videoRef}
          className="heroMedia__video"
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
          aria-hidden="true"
        >
          {mobileSource ? <source src={mobileSource} media="(max-width: 767px)" type="video/webm" /> : null}
          {desktopSource ? <source src={desktopSource} media="(min-width: 768px)" type="video/webm" /> : null}
        </video>
      ) : null}
      <div className="heroMedia__overlay" aria-hidden="true" />
      <p className="heroMedia__caption">Временный reference crop · видео подключается отдельным source</p>
    </div>
  );
}
