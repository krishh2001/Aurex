import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiExternalLinkLine } from "react-icons/ri";
import { optimizeImageUrl } from "../utils/imageUrl";
import { PORTFOLIO_PAGE } from "../data/portfolio";

/**
 * @param {{ project: import("../data/portfolio").PORTFOLIO_PROJECTS[number] }} props
 */
export default function PortfolioProjectCard({ project }) {
  const imageSrc = optimizeImageUrl(project.image, 1200);

  const visualClass = `pf-card__visual${project.lightBanner ? " pf-card__visual--light" : ""}`;

  return (
    <article className="pf-card">
      <div className={visualClass}>
        <img
          className="pf-card__image"
          src={imageSrc}
          alt={project.imageAlt || project.title}
          loading="lazy"
          decoding="async"
        />
        <span className="pf-card__visual-overlay" aria-hidden />
        <div className="pf-card__badges">
          <span className="pf-card__pill">{project.category}</span>
          <span className="pf-card__pill pf-card__pill--year">{project.year}</span>
        </div>
      </div>

      <div className="pf-card__body">
        <p className="pf-card__client">{project.client}</p>
        <h2 className="pf-card__title">{project.title}</h2>
        <p className="pf-card__excerpt">{project.excerpt}</p>

        <ul className="pf-card__tech" aria-label="Technologies">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="pf-card__footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-card__btn pf-card__btn--live"
            >
              {PORTFOLIO_PAGE.liveCta}
              <RiExternalLinkLine aria-hidden />
            </a>
          )}
          <Link to="/contact" className="pf-card__btn pf-card__btn--quote">
            {PORTFOLIO_PAGE.quoteCta}
            <RiArrowRightLine aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
