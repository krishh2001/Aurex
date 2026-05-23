import React from "react";
import { Link } from "react-router-dom";
import {
  RiArrowRightLine,
  RiMailSendLine,
  RiRocketLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiPriceTag3Line,
  RiChat3Line,
} from "react-icons/ri";
import { CTA_BY_PAGE, CTA_DEFAULT } from "../data/company";

const CTA_ICONS = {
  mail: RiMailSendLine,
  rocket: RiRocketLine,
  code: RiCodeSSlashLine,
  team: RiTeamLine,
  price: RiPriceTag3Line,
  chat: RiChat3Line,
};

function resolveCta({ copy, pageKey }) {
  const page = pageKey ? CTA_BY_PAGE[pageKey] : null;
  return { ...CTA_DEFAULT, ...page, ...copy };
}

/**
 * Unified CTA card — same layout on all pages; content via pageKey or copy prop.
 * @param {{ copy?: Partial<typeof CTA_DEFAULT>, pageKey?: keyof typeof CTA_BY_PAGE, className?: string }} props
 */
export default function CTA({ copy, pageKey, className = "" }) {
  const { icon, title, description, button, to } = resolveCta({ copy, pageKey });
  const Icon = CTA_ICONS[icon] ?? RiMailSendLine;
  const isExternal = typeof to === "string" && /^https?:\/\//i.test(to);

  const btnContent = (
    <>
      {button} <RiArrowRightLine aria-hidden />
    </>
  );

  return (
    <section className={`cta-section ${className}`.trim()}>
      <div className="cta-card">
        <div className="cta-card__glow" aria-hidden />
        <div className="cta-card__content">
          <div className="cta-card__icon-wrap" aria-hidden>
            <span className="cta-card__icon-glow" />
            <span className="cta-card__icon-ring" />
            <span className="cta-card__icon-inner">
              <Icon />
            </span>
          </div>
          <h2 className="cta-card__title">{title}</h2>
          <p className="cta-card__desc">{description}</p>
          {isExternal ? (
            <a
              href={to}
              className="cta-card__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {btnContent}
            </a>
          ) : (
            <Link to={to} className="cta-card__btn">
              {btnContent}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
