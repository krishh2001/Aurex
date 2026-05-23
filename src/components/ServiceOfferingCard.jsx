import { Link } from "react-router-dom";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import PremiumServiceIcon from "./PremiumServiceIcon";

const ACCENTS = ["emerald", "blue", "pink", "amber", "violet", "cyan"];

/** @param {{ service: object, index: number, variant?: "home" | "full", className?: string }} props */
export default function ServiceOfferingCard({
  service,
  index,
  variant = "home",
  className = "",
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const step = String(index + 1).padStart(2, "0");

  if (variant === "home") {
    return (
      <article className={`about-process-card ${className}`.trim()}>
        <span className="about-step-number" aria-hidden>
          {step}
        </span>
        <div className="about-process-icon">
          <PremiumServiceIcon type={service.icon} className="about-process-premium-icon" />
        </div>
        <h3 className="about-process-title">{service.title}</h3>
        <p className="about-process-desc">{service.description}</p>
      </article>
    );
  }

  return (
    <article
      className={`svc-card svc-card--${accent} svc-card--full ${className}`.trim()}
    >
      <div className="svc-card__shine" aria-hidden />
      <div className="svc-card__orb" aria-hidden />
      <span className="svc-card__index" aria-hidden>
        {step}
      </span>

      <div className="svc-card__body">
        <div className="svc-card__top">
          <PremiumServiceIcon type={service.icon} className="svc-card__icon" />
          <div className="svc-card__copy">
            {service.tag ? <span className="svc-card__tag">{service.tag}</span> : null}
            <h3 className="svc-card__title">{service.title}</h3>
            <p className="svc-card__desc">{service.description}</p>
          </div>
        </div>

        {service.features?.length > 0 && (
          <ul className="svc-card__features">
            {service.features.map((feature) => (
              <li key={feature}>
                <RiCheckLine aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="svc-card__footer">
        <span className="svc-card__hint">Scoped delivery</span>
        <Link to="/contact" className="svc-card__cta">
          Get a quote
          <RiArrowRightLine aria-hidden />
        </Link>
      </div>
    </article>
  );
}
