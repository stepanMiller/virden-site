import Image from "next/image";
import { HeroMedia } from "@/components/media/hero-media";
import { ActionLink } from "@/components/ui/action-link";
import { heroMedia, homeContent } from "@/content/home";

function HeroProofIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M16 3 28 9v14l-12 6L4 23V9L16 3Z" /><path d="m4 9 12 6 12-6M16 15v14" /></>,
    <><path d="M16 3 27 7v9c0 7-4.5 11-11 13C9.5 27 5 23 5 16V7l11-4Z" /><path d="m11 16 3.5 3.5L21 12" /></>,
    <><circle cx="16" cy="16" r="5" /><path d="m13 2-.6 3.2-3 1.2-2.7-1.8-3 3 1.8 2.7-1.2 3L1 14v4l3.3.7 1.2 3-1.8 2.7 3 3 2.7-1.8 3 1.2L13 30h6l.6-3.2 3-1.2 2.7 1.8 3-3-1.8-2.7 1.2-3L31 18v-4l-3.3-.7-1.2-3 1.8-2.7-3-3-2.7 1.8-3-1.2L19 2h-6Z" /></>,
    <><path d="M7 3h13l5 5v21H7V3Z" /><path d="M20 3v6h5M11 14h10M11 19h10M11 24h7" /></>,
  ];

  return <svg className="homeHero__proofIcon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">{paths[index]}</svg>;
}

export function HomeHero() {
  return (
    <section className="homeHero" aria-labelledby="home-hero-title">
      <div className="homeHero__layout shell">
        <div className="homeHero__material" aria-hidden="true">
          <Image src={heroMedia.poster} alt="" fill priority quality={92} sizes="(max-width: 720px) 45vw, 1px" />
        </div>
        <div className="homeHero__visual">
          <HeroMedia {...heroMedia} />
        </div>
        <div className="homeHero__copy">
          <p className="eyebrow">{homeContent.eyebrow}</p>
          <h1 id="home-hero-title">{homeContent.title}</h1>
          <p className="homeHero__description">{homeContent.description}</p>
          <div className="homeHero__actions">
            <ActionLink href="#project-request">{homeContent.primaryCta}</ActionLink>
          </div>
        </div>
        <p className="homeHero__motto">Создаём<br />пространства,<br />в которые<br />хочется<br />возвращаться</p>
      </div>
      <div className="homeHero__proofBar shell" aria-label="Принципы работы">
        {homeContent.heroProof.map((item, index) => (
          <div className="homeHero__proof" key={item.title}>
            <HeroProofIcon index={index} />
            <strong>{item.title}</strong>
            <small>{item.note}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
