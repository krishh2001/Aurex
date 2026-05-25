import React, { useCallback, useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useIntervalWhenVisible } from "../hooks/useIntervalWhenVisible";
import PersonAvatar from "./PersonAvatar";
import { HOME_TESTIMONIALS, HOME_TESTIMONIALS_SECTION } from "../data/company";

/**
 * @param {{ className?: string, headerClassName?: string }} props
 */
export default function TestimonialsSection({ className = "", headerClassName = "reveal" }) {
  const testimonialRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const advanceTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HOME_TESTIMONIALS.length);
  }, []);

  useIntervalWhenVisible(testimonialRef, advanceTestimonial, 4000);

  const getCardClass = (index) => {
    const total = HOME_TESTIMONIALS.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    if (index === currentIndex) return "testimonial-card active";
    if (index === prevIndex) return "testimonial-card prev";
    if (index === nextIndex) return "testimonial-card next";
    return index > currentIndex ? "testimonial-card hidden-right" : "testimonial-card hidden-left";
  };

  return (
    <section
      className={`testimonial-section section-margin${className ? ` ${className}` : ""}`}
      ref={testimonialRef}
    >
      <div className={`section-header ${headerClassName}`.trim()}>
        <span className="section-subtitle">{HOME_TESTIMONIALS_SECTION.subtitle}</span>
        <h2 className="section-title">{HOME_TESTIMONIALS_SECTION.title}</h2>
        <p className="section-desc">{HOME_TESTIMONIALS_SECTION.description}</p>
      </div>
      <div className="slider-wrapper" id="slider-container">
        {HOME_TESTIMONIALS.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className={getCardClass(index)}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setCurrentIndex(index);
            }}
          >
            <div className="quote-box">
              <RiDoubleQuotesL className="quote-icon" />
              <p className="quote-text">{item.text}</p>
            </div>
            <div className="user-info">
              <div className="connection-dot" />
              <PersonAvatar name={item.name} image={item.image} className="avatar" size={56} />
              <h4 className="user-name">{item.name}</h4>
              <span className="user-role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container" id="dots-container">
        {HOME_TESTIMONIALS.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Show testimonial ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </section>
  );
}
