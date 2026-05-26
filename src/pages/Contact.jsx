import React, { useState, useEffect } from "react";
import FaqSection from "../components/FaqSection";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  RiMailLine,
  RiMailSendLine,
  RiPhoneLine,
  RiMapPin2Line,
  RiCheckLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCloseLine,
  RiSendPlaneFill,
  RiMailCheckLine,
  RiSparkling2Line,
} from "react-icons/ri";

import {
  COMPANY,
  CONTACT_PAGE,
  CONTACT_CHANNELS,
  CONTACT_SERVICE_OPTIONS,
  CONTACT_FAQ,
  PAGE_META,
} from "../data/company";
import { submitContactForm } from "../lib/contactSubmit";

const CHANNEL_ICONS = {
  general: RiMailLine,
  sales: RiMailSendLine,
  phone: RiPhoneLine,
  hours: RiTimeLine,
};

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

function ContactChannelCard({ channel }) {
  const Icon = CHANNEL_ICONS[channel.id] || RiMailLine;
  const isLink = Boolean(channel.href);
  const Tag = isLink ? "a" : "div";

  return (
    <Tag
      className="contact-channel-card"
      href={isLink ? channel.href : undefined}
      style={{ "--channel-accent": channel.accent }}
    >
      <div className="contact-channel-card__icon-wrap" aria-hidden>
        <span className="contact-channel-card__glow" />
        <span className="contact-channel-card__ring" />
        <span className="contact-channel-card__icon">
          <Icon />
        </span>
      </div>
      <div className="contact-channel-card__body">
        <span className="contact-channel-card__label">{channel.label}</span>
        <span className="contact-channel-card__value">{channel.value}</span>
        {channel.hint ? (
          <p className="contact-channel-card__hint">{channel.hint}</p>
        ) : null}
      </div>
      {isLink ? (
        <span className="contact-channel-card__action" aria-hidden>
          <RiArrowRightLine className="contact-channel-card__arrow" />
        </span>
      ) : null}
    </Tag>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sentTo, setSentTo] = useState({ name: "", email: "" });
  const [submitError, setSubmitError] = useState("");
  const [submitInfo, setSubmitInfo] = useState("");

  usePageMeta(PAGE_META.contact);
  usePageEffects(".contact-bg-text");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitInfo("");
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      setSentTo({ name: formData.name, email: formData.email });
      setFormData(INITIAL_FORM);
      setIsSent(true);
      if (result.fallback && import.meta.env.DEV) {
        setSubmitInfo(
          "Backup delivery used (plain email). Add RESEND_API_KEY to .env.local and restart the dev server for Aurex-branded mail."
        );
      }
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please email or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccess = () => setIsSent(false);

  useEffect(() => {
    if (!isSent) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeSuccess();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isSent]);

  return (
    <div className="contact-page-wrapper">
      <div className="ambient-glow" aria-hidden />
      <div className="ambient-glow-2 contact-glow-form" aria-hidden />
      <div className="tech-line left-line" aria-hidden />
      <div className="tech-line right-line" aria-hidden />

      <div className="bg-large-text contact-bg-text" aria-hidden="true">Contact</div>

      <main className="container">
        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-content">
              <span className="contact-eyebrow">{CONTACT_PAGE.badge}</span>
              <h1>{CONTACT_PAGE.title}</h1>
              <p className="contact-lead">{CONTACT_PAGE.lead}</p>

              <ul className="contact-highlights">
                {CONTACT_PAGE.highlights.map((item) => (
                  <li key={item}>
                    <RiCheckLine aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="contact-aside">
                <div className="contact-aside-panel">
                  <h3 className="contact-aside__title">{CONTACT_PAGE.nextStepsTitle}</h3>
                  <ol className="contact-steps">
                    {CONTACT_PAGE.nextSteps.map((step, index) => (
                      <li key={step.title}>
                        <span className="contact-steps__num" aria-hidden>
                          {index + 1}
                        </span>
                        <div className="contact-steps__body">
                          <strong>{step.title}</strong>
                          <p>{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="contact-aside-stats" role="list">
                    {CONTACT_PAGE.asideStats.map((stat) => (
                      <div key={stat.label} className="contact-aside-stat" role="listitem">
                        <span className="contact-aside-stat__value">{stat.value}</span>
                        <span className="contact-aside-stat__label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                      <label htmlFor="name">Your name *</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Full name"
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
                        placeholder="Email address"
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
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Phone number"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="service">Service needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="contact-select"
                    >
                      <option value="">Choose one (optional)</option>
                      {CONTACT_SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="input-group input-group--grow">
                    <label htmlFor="message">Your message *</label>
                    <textarea
                      id="message"
                      placeholder="What are you building? Any timeline in mind?"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {submitError ? (
                  <p className="contact-form-error" role="alert">
                    {submitError}
                  </p>
                ) : null}
                {submitInfo ? (
                  <p className="contact-form-info" role="status">
                    {submitInfo}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className={`submit-btn${isSent ? " submit-btn--success" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : isSent ? (
                    "Message sent"
                  ) : (
                    <>
                      Send message <RiSendPlaneFill aria-hidden />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="map-section" aria-labelledby="contact-channels-title">
          <div className="map-section-inner">
            <header className="contact-channels-head">
              <h2 id="contact-channels-title">{CONTACT_PAGE.contactTitle}</h2>
              <p>Pick the channel that fits—you can also use the form above.</p>
            </header>

            <div className="contact-channels-grid">
              {CONTACT_CHANNELS.map((channel) => (
                <ContactChannelCard key={channel.id} channel={channel} />
              ))}
            </div>

            <div className="map-stage">
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
            </div>

            <div className="map-info-bar">
              <div className="map-info-bar__location">
                <div className="map-info-bar__icon-wrap" aria-hidden>
                  <span className="map-info-bar__glow" />
                  <span className="map-info-bar__ring" />
                  <span className="map-info-bar__icon">
                    <RiMapPin2Line />
                  </span>
                </div>
                <div className="map-info-bar__text">
                  <p className="map-info-address">{COMPANY.location}</p>
                  <p className="map-info-desc">{CONTACT_PAGE.mapLocationDesc}</p>
                </div>
              </div>
              <a
                href={COMPANY.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-btn"
              >
                Get directions <RiArrowRightLine aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <FaqSection
          id="contact-faq"
          className="contact-faq-section"
          title={CONTACT_FAQ.title}
          description={CONTACT_FAQ.description}
          items={CONTACT_FAQ.items}
        />
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
            <div className="success-modal__shine" aria-hidden />
            <div className="success-modal__aurora" aria-hidden />
            <div className="success-modal__noise" aria-hidden />
            <span className="success-confetti success-confetti--1" aria-hidden />
            <span className="success-confetti success-confetti--2" aria-hidden />
            <span className="success-confetti success-confetti--3" aria-hidden />
            <span className="success-confetti success-confetti--4" aria-hidden />
            <span className="success-confetti success-confetti--5" aria-hidden />

            <button type="button" className="success-close" onClick={closeSuccess} aria-label="Close">
              <RiCloseLine />
            </button>

            <div className="success-modal__hero">
              <span className="success-ring success-ring--1" aria-hidden />
              <span className="success-ring success-ring--2" aria-hidden />
              <span className="success-ring success-ring--3" aria-hidden />
              <div className="success-modal-icon">
                <RiCheckLine aria-hidden />
              </div>
            </div>

            <p className="success-modal-badge">
              <RiSparkling2Line aria-hidden />
              Message delivered
            </p>

            <h3 id="success-modal-title" className="success-modal-title">
              <span className="success-modal-title__lead">You&apos;re all set</span>
              {sentTo.name ? (
                <span className="success-modal-title__name">{sentTo.name}</span>
              ) : (
                <span className="success-modal-title__name">Thank you!</span>
              )}
            </h3>

            <p className="success-modal-desc">
              Our team has your inquiry. Expect a thoughtful reply within one business day
              {sentTo.email ? " at the address below." : "."}
            </p>

            {sentTo.email ? (
              <div className="success-email-pill">
                <span className="success-email-pill__icon" aria-hidden>
                  <RiMailCheckLine />
                </span>
                <span className="success-email-pill__text">{sentTo.email}</span>
              </div>
            ) : null}

            <div className="success-modal-actions">
              <button type="button" className="success-modal-btn" onClick={closeSuccess}>
                <RiCheckLine aria-hidden />
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
