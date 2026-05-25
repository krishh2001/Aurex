import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { RiFlashlightFill } from "react-icons/ri";
import ServiceOfferingCard from "../components/ServiceOfferingCard";
import HomeAboutSection from "../components/HomeAboutSection";
import HomePortfolioPreview from "../components/HomePortfolioPreview";
import TestimonialsSection from "../components/TestimonialsSection";
import CTA from "../components/CTA";
import { RiArrowRightLine } from "react-icons/ri";
import {
    TECH_TICKER,
    HOME_HERO,
    HOME_CAPABILITIES,
    HOME_CAPABILITIES_SECTION,
    HOME_SERVICES_SECTION,
    SERVICE_OFFERINGS,
    PAGE_META,
} from "../data/company";

export default function Home() {
    const pageRef = useRef(null);

    usePageMeta(PAGE_META.home);
    useReveal(".reveal", pageRef);

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
                <HomeAboutSection />

                <section className="section-margin" id="services">
                    <div className="section-header reveal">
                        <span className="section-subtitle">{HOME_SERVICES_SECTION.subtitle}</span>
                        <h2 className="section-title">{HOME_SERVICES_SECTION.title}</h2>
                        <p className="section-desc">{HOME_SERVICES_SECTION.description}</p>
                    </div>

                    <div className="svc-grid home-services-grid">
                        {SERVICE_OFFERINGS.slice(0, 4).map((service, index) => (
                            <ServiceOfferingCard
                                key={service.title}
                                service={service}
                                index={index}
                                variant="home"
                                className="reveal"
                            />
                        ))}
                    </div>

                    <div className="home-section-cta-row reveal">
                        <Link to={HOME_SERVICES_SECTION.cta.to} className="home-section-cta">
                            {HOME_SERVICES_SECTION.cta.label}
                            <RiArrowRightLine aria-hidden />
                        </Link>
                    </div>
                </section>

                <HomePortfolioPreview />

                <section className="learning-section section-margin" id="capabilities">
                    <div className="section-header reveal">
                        <span className="section-subtitle">{HOME_CAPABILITIES_SECTION.subtitle}</span>
                        <h2 className="section-title">{HOME_CAPABILITIES_SECTION.title}</h2>
                        <p className="section-desc">{HOME_CAPABILITIES_SECTION.description}</p>
                    </div>
                    <div className="learning_container">
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

                <TestimonialsSection />

                <CTA pageKey="home" />
            </main>
        </div>
    );
}
