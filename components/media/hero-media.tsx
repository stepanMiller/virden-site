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
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
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
        priority
        quality={92}
        sizes="(max-width: 800px) 100vw, 46vw"
      />
      {hasVideo ? (
        <video
          ref={videoRef}
          className="heroMedia__video"
          data-ready={videoReady}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
        >
          {mobileSource ? <source src={mobileSource} media="(max-width: 767px)" type="video/mp4" /> : null}
          {desktopSource ? <source src={desktopSource} type="video/mp4" /> : null}
        </video>
      ) : null}
      <div className="heroMedia__overlay" aria-hidden="true" />
    </div>
  );
}
