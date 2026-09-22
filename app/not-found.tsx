import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound shell">
      <p className="eyebrow">404</p>
      <h1>Страница не найдена</h1>
      <Link className="actionLink actionLink--primary" href="/">
        Вернуться на главную <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
