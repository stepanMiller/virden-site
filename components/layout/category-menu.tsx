"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { categoryNavigation } from "@/content/navigation";

export function CategoryMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) ref.current.open = false; };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape" && ref.current?.open) { ref.current.open = false; ref.current.querySelector("summary")?.focus(); } };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, []);
  return <details className="categoryMenu" ref={ref}>
    <summary>Направления <span aria-hidden="true">⌄</span></summary>
    <nav aria-label="Категории продукции" onClick={() => { if (ref.current) ref.current.open = false; }}>
      <Link href="/#directions">Все направления</Link>
      {categoryNavigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}
    </nav>
  </details>;
}
