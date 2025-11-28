import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

export default function CTA() {
  return (
    <section className="cta-section reveal">
      <div className="cta-bg"></div>
      <div className="cta-content">
        <h2 className="cta-section-title">Ready to build the future?</h2>
        <p className="cta-section-desc">
          We are currently accepting new projects for Q4. Let's turn your vision into a digital reality.
        </p>
        <Link to="/contact" className="cta-btn">Start Project <RiArrowRightLine /></Link>
      </div>
    </section>
  );
}