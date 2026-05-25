import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { HOME_PORTFOLIO_SECTION } from "../data/company";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";
import { optimizeImageUrl } from "../utils/imageUrl";

export default function HomePortfolioPreview() {
  const projects = HOME_PORTFOLIO_SECTION.featuredIds
    .map((id) => PORTFOLIO_PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="section-margin" id="portfolio" aria-labelledby="home-portfolio-title">
      <div className="section-header reveal">
        <span className="section-subtitle">{HOME_PORTFOLIO_SECTION.subtitle}</span>
        <h2 id="home-portfolio-title" className="section-title">
          {HOME_PORTFOLIO_SECTION.title}
        </h2>
        <p className="section-desc">{HOME_PORTFOLIO_SECTION.description}</p>
      </div>

      <div className="home-portfolio__grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to="/portfolio"
            className="home-portfolio-card reveal"
          >
            <div className="home-portfolio-card__visual">
              <img
                src={optimizeImageUrl(project.image, 1200)}
                alt={project.imageAlt || project.title}
                loading="lazy"
                decoding="async"
              />
              <span className="home-portfolio-card__overlay" aria-hidden />
              <span className="home-portfolio-card__pill">{project.category}</span>
            </div>
            <div className="home-portfolio-card__body">
              <p className="home-portfolio-card__client">{project.client}</p>
              <h3 className="home-portfolio-card__title">{project.title}</h3>
              <p className="home-portfolio-card__excerpt">{project.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="home-section-cta-row reveal">
        <Link to={HOME_PORTFOLIO_SECTION.cta.to} className="home-section-cta">
          {HOME_PORTFOLIO_SECTION.cta.label}
          <RiArrowRightLine aria-hidden />
        </Link>
      </div>
    </section>
  );
}
