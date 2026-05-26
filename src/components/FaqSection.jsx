import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   items: { q: string; a: string }[];
 *   className?: string;
 *   id?: string;
 * }} props
 */
export default function FaqSection({ title, description, items, className = "", id }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section
      className={`faq-section site-faq ${className}`.trim()}
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="faq-header">
        <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>

      <div className="faq-container">
        {items.map((item, index) => (
          <div
            key={item.q}
            className={`faq-item ${activeFaq === index ? "active" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => toggleFaq(index)}
              aria-expanded={activeFaq === index}
            >
              {item.q}
              <RiAddLine className="faq-icon" aria-hidden />
            </button>
            <div className="faq-answer" role="region" aria-hidden={activeFaq !== index}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
