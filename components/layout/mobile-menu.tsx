"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { categoryNavigation, mobileNavigation } from "@/content/navigation";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) menuRef.current.open = false; };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape" && menuRef.current?.open) { menuRef.current.open = false; menuRef.current.querySelector("summary")?.focus(); } };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, []);

  return (
    <details className="mobileMenu" ref={menuRef}>
      <summary aria-label="Открыть меню">
        <span>Меню</span>
        <span className="mobileMenu__icon" aria-hidden="true"><i /><i /><i /></span>
      </summary>
      <nav aria-label="Мобильная навигация">
        {mobileNavigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            onClick={() => {
              if (menuRef.current) menuRef.current.open = false;
            }}
          >
            {item.label}
          </Link>
        ))}
        <p className="mobileMenu__groupLabel">Категории продукции</p>
        {categoryNavigation.map(item => <Link key={item.href} href={item.href} onClick={() => { if (menuRef.current) menuRef.current.open = false; }}>{item.label}</Link>)}
      </nav>
    </details>
  );
}
