import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../data/company";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PAGE,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_STATS,
} from "../data/portfolio";
import { RiBriefcaseLine, RiEyeLine, RiFilterLine } from "react-icons/ri";
import PortfolioProjectCard from "../components/PortfolioProjectCard";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Portfolio() {
  usePageMeta(PAGE_META.portfolio);
  usePageEffects(".bg-large-text");

  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_PAGE.initialVisible);
  const [animateFromIndex, setAnimateFromIndex] = useState(0);

  const filtered = useMemo(() => {
    if (category === "All") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === category);
  }, [category]);

  const displayed = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(PORTFOLIO_PAGE.initialVisible);
    setAnimateFromIndex(0);
  }, [category]);

  const handleViewMore = useCallback(() => {
    setAnimateFromIndex(visibleCount);
    setVisibleCount((prev) =>
      Math.min(prev + PORTFOLIO_PAGE.loadMoreStep, filtered.length)
    );
  }, [visibleCount, filtered.length]);

  return (
    <div className="portfolio-page-wrapper">
      <div className="ambient-glow" aria-hidden />
      <div className="ambient-glow-2" aria-hidden />
      <div className="ambient-glow-3" aria-hidden />
      <div className="bg-large-text" aria-hidden="true">
        Portfolio
      </div>
      <div className="tech-line left-line" aria-hidden />
      <div className="tech-line right-line" aria-hidden />

      <main className="container">
        <section className="services-hero-container portfolio-hero">
          <div className="services-section-header">
            <span className="about-section-badge">
              <RiBriefcaseLine aria-hidden /> {PORTFOLIO_PAGE.badge}
            </span>
            <h1 className="services-section-title">{PORTFOLIO_PAGE.title}</h1>
            <p className="services-section-desc">{PORTFOLIO_PAGE.lead}</p>
          </div>

          <ul className="portfolio-stats" role="list">
            {PORTFOLIO_STATS.map((stat) => (
              <li key={stat.label} className="portfolio-stat">
                <span className="portfolio-stat__value">{stat.value}</span>
                <span className="portfolio-stat__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="portfolio-grid-section">
          <div className="portfolio-grid-head">
            <h2 className="portfolio-section-title">Projects</h2>
            <div className="portfolio-filters" role="tablist" aria-label={PORTFOLIO_PAGE.filterLabel}>
              <RiFilterLine className="portfolio-filters__icon" aria-hidden />
              {PORTFOLIO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  className={`portfolio-filter${category === cat ? " portfolio-filter--active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <>
              <div className="portfolio-grid">
                {displayed.map((project, index) => (
                  <div
                    key={project.id}
                    className={`portfolio-grid__item${
                      index >= animateFromIndex ? " portfolio-grid__item--enter" : ""
                    }`}
                    style={
                      index >= animateFromIndex
                        ? { "--pf-delay": `${((index - animateFromIndex) % 3) * 0.07}s` }
                        : undefined
                    }
                  >
                    <PortfolioProjectCard project={project} />
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="portfolio-view-more">
                  <button
                    type="button"
                    className="portfolio-view-more__btn"
                    onClick={handleViewMore}
                  >
                    <RiEyeLine aria-hidden />
                    {PORTFOLIO_PAGE.viewMoreCta}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="portfolio-empty">
              <h3>{PORTFOLIO_PAGE.emptyTitle}</h3>
              <p>{PORTFOLIO_PAGE.emptyText}</p>
              <button type="button" className="portfolio-filter portfolio-filter--active" onClick={() => setCategory("All")}>
                Show all projects
              </button>
            </div>
          )}
        </section>

        <p className="portfolio-note">
          Client names are anonymized or abbreviated for confidentiality.{" "}
          <Link to="/contact">Tell us about your project</Link> for a tailored case study conversation.
        </p>

        <TestimonialsSection className="portfolio-testimonials" headerClassName="" />
      </main>
    </div>
  );
}
