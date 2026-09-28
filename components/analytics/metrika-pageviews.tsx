"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const counterId = 113124000;

export function MetrikaPageviews() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // The counter reports the initial page view itself. Report only client-side navigation.
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    const metrikaWindow = window as Window & { ym?: (id: number, action: string, url: string) => void };
    metrikaWindow.ym?.(counterId, "hit", window.location.href);
  }, [pathname]);

  return null;
}
