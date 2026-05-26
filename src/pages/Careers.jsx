import React, { useMemo, useState } from "react";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  RiMapPinLine,
  RiTimeLine,
  RiMailSendLine,
  RiArrowRightLine,
  RiCodeSSlashLine,
  RiReactjsLine,
  RiStackLine,
  RiSmartphoneLine,
  RiCalendarCheckLine,
  RiSearchLine,
  RiCloseLine,
  RiFilterLine,
} from "react-icons/ri";
import PremiumServiceIcon from "../components/PremiumServiceIcon";
import { CAREERS_PAGE, COMPANY, PAGE_META } from "../data/company";

const CULTURE_ACCENTS = ["#4ade80", "#60a5fa", "#22d3ee", "#fb923c"];

const ROLE_ICONS = {
  "react-dev": RiReactjsLine,
  fullstack: RiStackLine,
  mobile: RiSmartphoneLine,
  delivery: RiCalendarCheckLine,
};

const ACCENT_BY_JOB_ID = Object.fromEntries(
  CAREERS_PAGE.openings.map((job, i) => [job.id, CULTURE_ACCENTS[i % CULTURE_ACCENTS.length]])
);

function jobMatchesSearch(job, query) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  const haystack = [
    job.title,
    job.type,
    job.description,
    job.department,
    job.workMode,
    ...job.requirements,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export default function Careers() {
  usePageMeta(PAGE_META.careers);
  usePageEffects(".bg-large-text");

  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [workMode, setWorkMode] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const applyHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent(CAREERS_PAGE.applySubject)}`;

  const departmentCounts = useMemo(() => {
    const counts = { All: CAREERS_PAGE.openings.length };
    for (const opt of CAREERS_PAGE.openingsFilterDepartments) {
      if (opt === "All") continue;
      counts[opt] = CAREERS_PAGE.openings.filter((j) => j.department === opt).length;
    }
    return counts;
  }, []);

  const workModeCounts = useMemo(() => {
    const counts = { All: CAREERS_PAGE.openings.length };
    for (const opt of CAREERS_PAGE.openingsFilterWorkModes) {
      if (opt === "All") continue;
      counts[opt] = CAREERS_PAGE.openings.filter((j) => j.workMode === opt).length;
    }
    return counts;
  }, []);

  const filteredOpenings = useMemo(() => {
    return CAREERS_PAGE.openings.filter((job) => {
      if (department !== "All" && job.department !== department) return false;
      if (workMode !== "All" && job.workMode !== workMode) return false;
      return jobMatchesSearch(job, searchQuery);
    });
  }, [searchQuery, department, workMode]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || department !== "All" || workMode !== "All";

  const clearFilters = () => {
    setSearchQuery("");
    setDepartment("All");
    setWorkMode("All");
  };

  return (
    <div className="careers-page-wrapper">
      <div className="ambient-glow" aria-hidden />
      <div className="ambient-glow-2" aria-hidden />
      <div className="ambient-glow-3" aria-hidden />
      <div className="bg-large-text" aria-hidden="true">
        Careers
      </div>
      <div className="tech-line left-line" aria-hidden />
      <div className="tech-line right-line" aria-hidden />

      <main className="container">
        <header className="careers-hero">
          <span className="careers-hero__badge">
            <span className="careers-hero__badge-dot" aria-hidden />
            {CAREERS_PAGE.badge}
          </span>
          <h1>
            {CAREERS_PAGE.title}{" "}
            <span className="careers-hero__accent">{CAREERS_PAGE.titleAccent}</span>
          </h1>
          <p className="careers-hero__lead">{CAREERS_PAGE.lead}</p>

          <div className="careers-hero__meta">
            <span>
              <RiMapPinLine aria-hidden /> {COMPANY.location}
            </span>
            <span>
              <RiTimeLine aria-hidden /> {COMPANY.hours}
            </span>
          </div>

          <div className="careers-hero__highlights" role="list">
            {CAREERS_PAGE.highlights.map((item, i) => (
              <div
                key={item.label}
                className="careers-highlight"
                role="listitem"
                style={{ "--hl-accent": CULTURE_ACCENTS[i % CULTURE_ACCENTS.length] }}
              >
                <span className="careers-highlight__value">{item.value}</span>
                <span className="careers-highlight__label">{item.label}</span>
              </div>
            ))}
          </div>

          <a href={applyHref} className="careers-hero__cta">
            {CAREERS_PAGE.applyCta} <RiArrowRightLine aria-hidden />
          </a>
        </header>

        <section className="careers-culture" aria-labelledby="careers-culture-title">
          <div className="careers-section-intro">
            <h2 id="careers-culture-title">{CAREERS_PAGE.cultureTitle}</h2>
            <p>{CAREERS_PAGE.cultureSubtitle}</p>
          </div>
          <div className="careers-culture-grid">
            {CAREERS_PAGE.culture.map((item, i) => (
              <article key={item.title} className="careers-culture-card">
                <span className="careers-culture-card__step" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="careers-culture-card__icon">
                  <PremiumServiceIcon
                    type={item.premiumIcon}
                    className="careers-culture-premium-icon"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-openings" aria-labelledby="careers-openings-title">
          <div className="careers-openings__head">
            <span className="careers-openings__count">
              {filteredOpenings.length} of {CAREERS_PAGE.openings.length} positions
            </span>
            <h2 id="careers-openings-title">{CAREERS_PAGE.openingsTitle}</h2>
            <p>{CAREERS_PAGE.openingsNote}</p>
          </div>

          <div className="blog-list-filters-section careers-openings-filters">
            <div className="blog-list-search-container">
              <div className="blog-list-search-box">
                <RiSearchLine className="blog-list-search-icon" aria-hidden />
                <input
                  type="text"
                  className="blog-list-search-input"
                  autoComplete="off"
                  placeholder={CAREERS_PAGE.openingsSearchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search open roles"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    className="blog-list-clear-search"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <RiCloseLine />
                  </button>
                ) : null}
              </div>

              <button
                type="button"
                className="blog-list-filter-toggle"
                onClick={() => setShowFilter((prev) => !prev)}
                aria-expanded={showFilter}
              >
                <RiFilterLine aria-hidden /> Filter
              </button>
            </div>

            <div className={`blog-list-categories-filter ${showFilter ? "active" : ""}`}>
              <div className="blog-list-categories-filter__inner">
              <div className="blog-list-categories-header">
                <span className="blog-list-categories-title">Filter by Team</span>
                {hasActiveFilters ? (
                  <button type="button" className="blog-list-clear-filters" onClick={clearFilters}>
                    Clear All
                  </button>
                ) : null}
              </div>
              <div className="blog-list-categories-grid" role="group" aria-label="Filter by team">
                {CAREERS_PAGE.openingsFilterDepartments.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`blog-list-category-btn ${department === opt ? "active" : ""}`}
                    onClick={() => setDepartment(opt)}
                    aria-pressed={department === opt}
                  >
                    {opt}
                    <span className="blog-list-category-count">{departmentCounts[opt] ?? 0}</span>
                  </button>
                ))}
              </div>

              <div className="blog-list-categories-header careers-openings-filters__subhead">
                <span className="blog-list-categories-title">Filter by Location</span>
              </div>
              <div className="blog-list-categories-grid" role="group" aria-label="Filter by location">
                {CAREERS_PAGE.openingsFilterWorkModes.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`blog-list-category-btn ${workMode === opt ? "active" : ""}`}
                    onClick={() => setWorkMode(opt)}
                    aria-pressed={workMode === opt}
                  >
                    {opt}
                    <span className="blog-list-category-count">{workModeCounts[opt] ?? 0}</span>
                  </button>
                ))}
              </div>
              </div>
            </div>

            <div className="blog-list-results-info">
              <span className="blog-list-results-count">
                Showing {filteredOpenings.length} of {CAREERS_PAGE.openings.length} roles
                {department !== "All" && ` in ${department}`}
                {workMode !== "All" && ` · ${workMode}`}
              </span>
              {searchQuery ? (
                <span className="blog-list-search-info">
                  Search: <strong>&quot;{searchQuery}&quot;</strong>
                </span>
              ) : null}
            </div>
          </div>

          <div className="careers-openings__panel">
            {filteredOpenings.length > 0 ? (
              <div className="careers-roles">
                {filteredOpenings.map((job, i) => {
                  const RoleIcon = ROLE_ICONS[job.id] || RiCodeSSlashLine;
                  const accent = ACCENT_BY_JOB_ID[job.id];

                  return (
                    <article
                      key={job.id}
                      className="careers-role"
                      style={{ "--role-accent": accent }}
                    >
                      <div className="careers-role__side">
                        <span className="careers-role__index" aria-hidden>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="careers-role__icon-wrap" aria-hidden>
                          <RoleIcon />
                        </span>
                      </div>

                      <div className="careers-role__body">
                        <div className="careers-role__top">
                          <h3>{job.title}</h3>
                          <p className="careers-role__type">{job.type}</p>
                        </div>
                        <p className="careers-role__desc">{job.description}</p>
                        <div className="careers-role__tags">
                          {job.requirements.map((req) => (
                            <span key={req} className="careers-role__tag">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="careers-role__actions">
                        <span className="careers-role__dept">{job.department}</span>
                        <a
                          href={`${applyHref}&body=${encodeURIComponent(`Role: ${job.title}\n\n`)}`}
                          className="careers-role__apply"
                        >
                          <span>{CAREERS_PAGE.applyCta}</span>
                          <RiMailSendLine aria-hidden />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="careers-empty" role="status">
                <p>No roles match your search or filters.</p>
                <button type="button" className="careers-empty__btn" onClick={clearFilters}>
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        <aside className="careers-apply-banner">
          <div className="careers-apply-banner__content">
            <h2>Ready to join the team?</h2>
            <p>
              Send your resume, portfolio, and the role you want. We read every application and reply
              within a few business days.
            </p>
          </div>
          <a href={applyHref} className="careers-apply-banner__btn">
            {CAREERS_PAGE.applyCta} <RiArrowRightLine aria-hidden />
          </a>
        </aside>
      </main>
    </div>
  );
}
