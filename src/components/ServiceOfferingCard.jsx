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

  return (
    <article
      className={`svc-card svc-card--${accent} svc-card--${variant} ${className}`.trim()}
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

        {variant === "full" && service.features?.length > 0 && (
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
        <span className="svc-card__hint">
          {variant === "full" ? "Scoped delivery" : "Learn more"}
        </span>
        <Link to="/contact" className="svc-card__cta">
          {variant === "full" ? "Get a quote" : "Explore"}
          <RiArrowRightLine aria-hidden />
        </Link>
      </div>
    </article>
  );
}
