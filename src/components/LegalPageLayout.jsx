import { Link } from "react-router-dom";
import {
  RiArrowLeftLine,
  RiCalendarLine,
  RiMailLine,
  RiFileTextLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import { COMPANY } from "../data/company";

export default function LegalPageLayout({
  title,
  tagline,
  icon: Icon = RiShieldCheckLine,
  updated,
  sections,
  siblingLink,
}) {
  return (
    <div className="legal-page">
      <div className="legal-page__glow legal-page__glow--left" aria-hidden />
      <div className="legal-page__glow legal-page__glow--right" aria-hidden />

      <div className="legal-page__container container">
        <nav className="legal-page__nav">
          <Link to="/" className="legal-page__back">
            <RiArrowLeftLine /> Back to Home
          </Link>
          <div className="legal-page__nav-links">
            {siblingLink ? (
              <Link to={siblingLink.to} className="legal-page__nav-pill">
                <RiFileTextLine />
                {siblingLink.label}
              </Link>
            ) : null}
            <Link to="/contact" className="legal-page__nav-pill legal-page__nav-pill--accent">
              Contact
            </Link>
          </div>
        </nav>

        <header className="legal-hero">
          <div className="legal-hero__icon" aria-hidden>
            <Icon />
          </div>
          <div className="legal-hero__text">
            <span className="legal-hero__eyebrow">{COMPANY.name} · Legal</span>
            <h1>{title}</h1>
            <p className="legal-hero__tagline">{tagline}</p>
            <span className="legal-hero__date">
              <RiCalendarLine /> Last updated: {updated}
            </span>
          </div>
        </header>

        <div className="legal-toc" aria-label="Sections">
          {sections.map((section) => {
            const SectionIcon = section.icon;
            if (!SectionIcon) return null;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="legal-toc__item"
              >
                <span className="legal-toc__icon" aria-hidden>
                  <SectionIcon />
                </span>
                <span className="legal-toc__label">{section.title}</span>
              </a>
            );
          })}
        </div>

        <div className="legal-sections">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="legal-card">
              <div className="legal-card__head">
                {section.icon ? (
                  <span className="legal-card__icon" aria-hidden>
                    <section.icon />
                  </span>
                ) : null}
                <h2>{section.title}</h2>
              </div>
              <div className="legal-card__body">{section.body}</div>
            </article>
          ))}
        </div>

        <aside className="legal-cta">
          <div className="legal-cta__content">
            <h3>Questions about this page?</h3>
            <p>Reach our team—we typically reply within one business day.</p>
          </div>
          <a href={`mailto:${COMPANY.email}`} className="legal-cta__btn">
            <RiMailLine /> {COMPANY.email}
          </a>
        </aside>
      </div>
    </div>
  );
}
