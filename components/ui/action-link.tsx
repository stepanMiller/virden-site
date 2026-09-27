import Link from "next/link";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionLink({ href, children, variant = "primary" }: ActionLinkProps) {
  const content = <><span>{children}</span><span className="actionLink__arrow" aria-hidden="true">→</span></>;
  const className = `actionLink actionLink--${variant}`;

  return href.startsWith("https://") ? (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <Link className={className} href={href}>{content}</Link>
  );
}
