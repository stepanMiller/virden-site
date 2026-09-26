import { ActionLink } from "@/components/ui/action-link";

export default function NotFound() {
  return (
    <main className="notFound shell" id="main-content" tabIndex={-1}>
      <p className="eyebrow">404</p>
      <h1>Страница не найдена</h1>
      <ActionLink href="/">Вернуться на главную</ActionLink>
    </main>
  );
}
