"use client";

import { useRef } from "react";
import Link from "next/link";
import { mobileNavigation } from "@/content/navigation";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);

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
      </nav>
    </details>
  );
}
