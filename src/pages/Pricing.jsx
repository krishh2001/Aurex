import React from "react";
import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";
import {
    RiCheckboxCircleFill,
    RiCloseCircleFill,
} from "react-icons/ri";

import FaqSection from "../components/FaqSection";
import { ENGAGEMENT_PLANS, ENGAGEMENT_FAQ, PRICING_CURRENCY_NOTE, PAGE_META } from "../data/company";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Pricing() {
    usePageMeta(PAGE_META.pricing);
    usePageEffects(".pricing-bg-text");

    return (
        <div className="pricing-page-wrapper">
            <div className="ambient-glow pricing-ambient-main"></div>
            <div className="bg-large-text pricing-bg-text" aria-hidden="true">PLANS</div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <main className="container">
                <div className="pricing-header">
                    <h1>Our Service Plans</h1>
                    <p>
                        Choose a plan that fits your goals—project delivery, a dedicated team, or a full enterprise program.
                        Every plan is tailored after a discovery call; estimates below are starting points.
                    </p>
                    <p className="pricing-currency-note">{PRICING_CURRENCY_NOTE}</p>
                </div>

                <div className="pricing-grid">
                    {ENGAGEMENT_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.featured ? "featured" : "standard"}`}
                        >
                            {plan.featured && <span className="most-popular">Most Popular</span>}
                            <div className="plan-header">
                                <div className="plan-title-block">
                                    <span className={`plan-name text-${plan.id === "project" ? "starter" : plan.id === "retainer" ? "pro" : "growth"}`}>
                                        {plan.name}
                                    </span>
                                    <p className="plan-tagline">{plan.note}</p>
                                </div>
                                <div className="price-block">
                                    {plan.priceLabel ? (
                                        <span className="price-from">{plan.priceLabel}</span>
                                    ) : (
                                        <span className="price-from price-from--placeholder" aria-hidden="true">From</span>
                                    )}
                                    <div className="price-line">
                                        {plan.price !== "Custom" && plan.currency ? (
                                            <span className="currency">{plan.currency}</span>
                                        ) : null}
                                        <span className={`price ${plan.price === "Custom" ? "price--custom" : ""}`}>
                                            {plan.price}
                                        </span>
                                        {plan.period ? <span className="period">{plan.period}</span> : null}
                                    </div>
                                </div>
                            </div>
                            <ul className="features">
                                {plan.features.map((f) => (
                                    <li key={f.text} className={f.ok ? "" : "disabled"}>
                                        {f.ok ? (
                                            <RiCheckboxCircleFill className="icon-check" />
                                        ) : (
                                            <RiCloseCircleFill className="icon-close" />
                                        )}
                                        {f.text}
                                    </li>
                                ))}
                            </ul>
                            <div className="card-footer">
                                <Link
                                    to="/contact"
                                    className={`btn-pricing ${plan.featured ? "btn-fill" : "btn-outline"}`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <FaqSection
                    className="pricing-page-faq"
                    title="Plan FAQs"
                    description="Answers to common questions about how our plans work."
                    items={ENGAGEMENT_FAQ}
                />
            </main>
        </div>
    );
}
