import { HeroMedia } from "@/components/media/hero-media";
import { ActionLink } from "@/components/ui/action-link";
import { heroMedia, homeContent } from "@/content/home";

export function HomeHero() {
  return (
    <main>
      <section className="homeHero" aria-labelledby="home-hero-title">
        <div className="homeHero__layout shell">
          <div className="homeHero__copy">
            <p className="eyebrow">{homeContent.eyebrow}</p>
            <h1 id="home-hero-title">{homeContent.title}</h1>
            <p className="homeHero__description">{homeContent.description}</p>
            <div className="homeHero__actions">
              <ActionLink href="#project-request">{homeContent.primaryCta}</ActionLink>
              <ActionLink href="#directions" variant="secondary">
                {homeContent.secondaryCta}
              </ActionLink>
            </div>
            <div className="homeHero__principles" aria-label="Принципы VIRDEN">
              {homeContent.principles.map((principle) => (
                <p key={principle}>{principle}</p>
              ))}
            </div>
          </div>
          <HeroMedia {...heroMedia} />
        </div>
        <div className="directionRail shell" id="directions">
          <p className="directionRail__label">Направления</p>
          <ul>
            {homeContent.directions.map((direction, index) => (
              <li key={direction}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {direction}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
