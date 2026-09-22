import Link from "next/link";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionLink({ href, children, variant = "primary" }: ActionLinkProps) {
  return (
    <Link className={`actionLink actionLink--${variant}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
