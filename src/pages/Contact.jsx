import React, { useState } from "react";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiCheckLine,
  RiTimeLine,
  RiMap2Line,
  RiArrowRightLine,
  RiCloseLine,
} from "react-icons/ri";

import {
  COMPANY,
  CONTACT_PAGE,
  CONTACT_CHANNELS,
  CONTACT_SERVICE_OPTIONS,
  PAGE_META,
} from "../data/company";

const CHANNEL_ICONS = {
  mail: RiMailLine,
  phone: RiPhoneLine,
  map: RiMapPinLine,
};

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sentTo, setSentTo] = useState({ name: "", email: "" });

  usePageMeta(PAGE_META.contact);
  usePageEffects(".contact-bg-text");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSentTo({ name: formData.name, email: formData.email });
      setIsSubmitting(false);
      setIsSent(true);
      setFormData(INITIAL_FORM);
    }, 1200);
  };

  const closeSuccess = () => setIsSent(false);

  return (
    <div className="contact-page-wrapper">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2 contact-glow-form"></div>
      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      <div className="bg-large-text contact-bg-text" aria-hidden="true">Contact</div>

      <main className="container">
        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-content">
              <div className="contact-hero-meta">
                <span className="contact-eyebrow">{CONTACT_PAGE.badge}</span>
                <span className="contact-pill">24h response</span>
              </div>
              <h1>{CONTACT_PAGE.title}</h1>
              <p className="contact-lead">{CONTACT_PAGE.lead}</p>

              <ul className="contact-highlights">
                {CONTACT_PAGE.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="contact-cards-grid">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = CHANNEL_ICONS[channel.icon] || RiMailLine;
                  const cardClass = `contact-info-card${channel.static ? " contact-info-card--static" : ""}`;
                  const inner = (
                    <>
                      <span className="contact-info-icon" aria-hidden>
                        <Icon />
                      </span>
                      <span className="contact-info-label">{channel.label}</span>
                      <span className="contact-info-value">{channel.value}</span>
                    </>
                  );

                  if (channel.href) {
                    return (
                      <a key={channel.id} href={channel.href} className={cardClass}>
                        {inner}
                      </a>
                    );
                  }

                  return (
                    <div key={channel.id} className={cardClass}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <p className="contact-hours">
                <RiTimeLine aria-hidden />
                {COMPANY.hours}
              </p>
            </div>

            <div className="form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-head">
                  <h2>{CONTACT_PAGE.formTitle}</h2>
                  <p>{CONTACT_PAGE.formHint}</p>
                </div>

                <div className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="input-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="input-group">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Optional"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 …"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="service">Service</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact-select"
                  >
                    <option value="">Choose one</option>
                    {CONTACT_SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group input-group--grow">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    placeholder="What do you need? Timeline? Budget range?"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                </div>

                <button
                  type="submit"
                  className={`submit-btn${isSent ? " submit-btn--success" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : isSent ? "Sent" : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section" aria-labelledby="map-section-title">
          <div className="map-section-inner">
            <header className="map-hero">
              <div className="map-hero-copy">
                <span className="map-kicker">
                  <RiMap2Line aria-hidden /> Our office
                </span>
                <h2 id="map-section-title" className="map-hero-title">
                  Visit us in <span className="map-hero-accent">Noida</span>
                </h2>
                <p className="map-hero-desc">
                  {COMPANY.name} headquarters — walk-ins welcome by appointment during business hours.
                </p>
              </div>
              <div className="map-hero-badge" aria-hidden>
                <span className="map-hero-badge-label">Region</span>
                <strong>{COMPANY.location}</strong>
              </div>
            </header>

            <div className="map-stage">
              <div className="map-stage-glow" aria-hidden />
              <div className="map-stage-frame">
                <iframe
                  className="map-iframe"
                  src={COMPANY.mapEmbedUrl}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${COMPANY.name} office location`}
                />
              </div>
              <div className="map-stage-marker" aria-hidden>
                <span className="map-stage-marker-ring" />
                <span className="map-stage-marker-dot">
                  <RiMapPinLine />
                </span>
              </div>
            </div>

            <div className="map-info-bar">
              <article className="map-info-tile map-info-tile--wide">
                <span className="map-info-tile-icon" aria-hidden>
                  <RiMapPinLine />
                </span>
                <div className="map-info-tile-body">
                  <span className="map-info-tile-label">Address</span>
                  <p className="map-info-tile-value">{COMPANY.address}</p>
                </div>
              </article>
              <article className="map-info-tile">
                <span className="map-info-tile-icon" aria-hidden>
                  <RiTimeLine />
                </span>
                <div className="map-info-tile-body">
                  <span className="map-info-tile-label">Hours</span>
                  <p className="map-info-tile-value">{COMPANY.hours}</p>
                </div>
              </article>
              <article className="map-info-tile">
                <span className="map-info-tile-icon" aria-hidden>
                  <RiPhoneLine />
                </span>
                <div className="map-info-tile-body">
                  <span className="map-info-tile-label">Phone</span>
                  <a
                    className="map-info-tile-value map-info-tile-link"
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </article>
              <a
                href={COMPANY.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-cta-tile"
              >
                <span className="map-cta-tile-text">
                  <span className="map-cta-tile-label">Navigate</span>
                  <strong>Get directions</strong>
                </span>
                <span className="map-cta-tile-icon" aria-hidden>
                  <RiArrowRightLine />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {isSent && (
        <div className="success-overlay" role="presentation" onClick={closeSuccess}>
          <div
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="success-close" onClick={closeSuccess} aria-label="Close">
              <RiCloseLine />
            </button>
            <div className="success-modal-icon">
              <RiCheckLine aria-hidden />
            </div>
            <h3 id="success-modal-title" className="success-modal-title">
              Thank you{sentTo.name ? `, ${sentTo.name}` : ""}!
            </h3>
            <p className="success-modal-desc">
              Your inquiry was sent successfully. We will reply within one business day
              {sentTo.email ? (
                <>
                  {" "}
                  at <strong>{sentTo.email}</strong>
                </>
              ) : (
                ""
              )}
              .
            </p>
            <button type="button" className="success-modal-btn" onClick={closeSuccess}>
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
