import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { useIntervalWhenVisible } from "../hooks/useIntervalWhenVisible";
import { RiFlashlightFill, RiDoubleQuotesL } from "react-icons/ri";
import PremiumServiceIcon from "../components/PremiumServiceIcon";
import PersonAvatar from "../components/PersonAvatar";
import CTA from "../components/CTA";
import {
    TECH_TICKER,
    HOME_HERO,
    HOME_STATS,
    HOME_CAPABILITIES,
    HOME_TESTIMONIALS,
    HOME_TESTIMONIALS_SECTION,
    SERVICE_OFFERINGS,
    PAGE_META,
} from "../data/company";

export default function Home() {
    const pageRef = useRef(null);
    const testimonialRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    usePageMeta(PAGE_META.home);
    useReveal(".reveal", pageRef);

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
        <div className="home-container" ref={pageRef}>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <header className="hero-section">
                <div className="hero-section__content reveal active">
                    <div className="hero-badge">{HOME_HERO.badge}</div>
                    <h1 className="hero-title">
                        {HOME_HERO.title} <br />
                        <span className="hero-title-accent">{HOME_HERO.titleLine2}</span>
                    </h1>
                    <p className="hero-desc">{HOME_HERO.description}</p>
                    <div className="hero-btns">
                        <Link to={HOME_HERO.primaryCta.to} className="btn-primary">
                            {HOME_HERO.primaryCta.label}
                        </Link>
                        <Link to={HOME_HERO.secondaryCta.to} className="btn-secondary">
                            {HOME_HERO.secondaryCta.label}
                        </Link>
                    </div>
                </div>

                <div className="hero-ticker" aria-hidden>
                    <div className="hero-ticker__track">
                        {[0, 1].map((copy) => (
                            <div className="hero-ticker__group" key={copy}>
                                {TECH_TICKER.map((tech) => (
                                    <span key={`${copy}-${tech}`} className="hero-ticker__item">
                                        <RiFlashlightFill /> {tech}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            <main className="expertise_container">
                <section className="section-margin" id="services">
                    <div className="section-header reveal">
                        <span className="section-subtitle">IT Services</span>
                        <h2 className="section-title">Websites, Apps & IT Delivery</h2>
                        <p className="section-desc">
                            One partner for your client project—from corporate sites to full-stack applications and ongoing support.
                        </p>
                    </div>

                    <div className="services-grid">
                        {SERVICE_OFFERINGS.map((service) => (
                            <div className="service-card reveal" key={service.title}>
                                <PremiumServiceIcon type={service.icon} className="service-icon" />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="stats-section reveal">
                    <div className="stats-container">
                        <div className="stats-grid">
                            {HOME_STATS.map((stat) => (
                                <div className="stat-item" key={stat.label}>
                                    <div className="stat-number">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="learning-section section-margin" id="capabilities">
                    <div className="learning_container">
                        <h2 className="section-title reveal">
                            {HOME_CAPABILITIES.title}{" "}
                            <span className="highlight-text">{HOME_CAPABILITIES.highlight}</span>
                        </h2>
                        <div className="content-wrapper">
                            <div className="center-circle-container">
                                <div className="glowing-ring"></div>
                                <div className="inner-circle">
                                    {HOME_CAPABILITIES.center.map((line, i) => (
                                        <React.Fragment key={line}>
                                            {i > 0 && <div className="divider-line" />}
                                            <span className="inner-text">{line}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            {HOME_CAPABILITIES.items.map((item, idx) => (
                                <div className={`learn-item item-${idx + 1} reveal`} key={item.num}>
                                    <div className="item-number">{item.num}</div>
                                    <div className="item-text">
                                        {item.text.split("\n").map((line, i, arr) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < arr.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="testimonial-section section-margin" ref={testimonialRef}>
                    <div className="section-header reveal">
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
                                    <div className="connection-dot"></div>
                                    <PersonAvatar
                                        name={item.name}
                                        image={item.image}
                                        className="avatar"
                                        size={64}
                                    />
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

                <CTA pageKey="home" />
            </main>
        </div>
    );
}
