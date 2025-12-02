import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    RiCheckboxCircleFill,
    RiCloseCircleFill,
    RiAddLine,
    RiArrowRightLine
} from "react-icons/ri";

import CTA from "../components/CTA";

// --- Custom Hook for smooth number animation ---
const AnimatedPrice = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        let startValue = displayValue;
        let startTime = null;
        const duration = 300; // ms

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Interpolate
            const current = Math.floor(progress * (value - startValue) + startValue);
            setDisplayValue(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value]);

    return <span>{displayValue}</span>;
};

export default function Pricing() {
    const [plan, setPlan] = useState("yearly"); // 'yearly' | 'monthly'
    const [activeFaq, setActiveFaq] = useState(null);

    // --- Pricing Data Configuration ---
    const prices = {
        pro: { monthly: 14, yearly: 8 },
        growth: { monthly: 99, yearly: 79 }
    };

    // --- 1. Parallax & Particles Effects ---
    useEffect(() => {
        // Parallax Background Text
        const handleScroll = () => {
            const bgText = document.querySelector('.pricing-bg-text'); // Changed class for specificity
            if (bgText) {
                let scroll = window.scrollY;
                bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
                bgText.style.opacity = 1 - (scroll * 0.001);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Particle System
        const particleContainer = document.getElementById('particles');
        if (particleContainer && particleContainer.childElementCount === 0) {
            for (let i = 0; i < 30; i++) {
                const p = document.createElement('div');
                p.className = 'particle';
                let size = Math.random() * 3 + 1;
                p.style.width = `${size}px`;
                p.style.height = `${size}px`;
                p.style.left = `${Math.random() * 100}vw`;
                p.style.top = `${Math.random() * 100}vh`;
                p.style.animationDelay = `-${Math.random() * 20}s`;
                p.style.opacity = Math.random() * 0.5;
                particleContainer.appendChild(p);
            }
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- 2. Handlers ---
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="pricing-page-wrapper">
            {/* Background Elements */}
            <div className="ambient-glow"></div>
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>

            {/* Note: I added a specific class here to target in JS */}
            <h1 className="bg-large-text pricing-bg-text">Pricing</h1>

            <div className="particles" id="particles"></div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <main className="container">

                {/* Header & Toggle */}
                <div className="pricing-header">
                    <h1>Simple, Transparent Pricing</h1>
                    <p>Start building for free, then add a site plan to go live.</p>

                    <div className="toggle-wrapper">
                        <div
                            className={`toggle-btn ${plan === 'yearly' ? 'active' : ''}`}
                            onClick={() => setPlan('yearly')}
                        >
                            Yearly (-43%)
                        </div>
                        <div
                            className={`toggle-btn ${plan === 'monthly' ? 'active' : ''}`}
                            onClick={() => setPlan('monthly')}
                        >
                            Monthly
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid">

                    {/* Card 1: Standard (Free) */}
                    <div className="pricing-card standard">
                        <div className="plan-header">
                            <span className="plan-name text-starter">Start Here</span>
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">0</span>
                                <span className="period">/mo</span>
                            </div>
                        </div>
                        <ul className="features">
                            <li><RiCheckboxCircleFill className="icon-check" /> Access to all modules</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Build first project free</li>
                            <li className="disabled"><RiCloseCircleFill className="icon-close" /> Full database integration</li>
                            <li className="disabled"><RiCloseCircleFill className="icon-close" /> 1:1 Mentorship</li>
                            <li className="disabled"><RiCloseCircleFill className="icon-close" /> Remove branding</li>
                            <li className="disabled"><RiCloseCircleFill className="icon-close" /> Priority Support</li>
                        </ul>
                        <div className="card-footer">
                            <button className="btn-pricing btn-outline">Get Started</button>
                            <span className="savings-text">Free forever</span>
                        </div>
                    </div>

                    {/* Card 2: Featured (Startup) */}
                    <div className="pricing-card featured">
                        <span className="most-popular">Most Popular</span>
                        <div className="plan-header">
                            <span className="plan-name text-pro">Startup</span>
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">
                                    <AnimatedPrice value={plan === 'yearly' ? prices.pro.yearly : prices.pro.monthly} />
                                </span>
                                <span className="period">/mo</span>
                            </div>
                        </div>
                        <ul className="features">
                            <li><RiCheckboxCircleFill className="icon-check" /> Access to all modules</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Build unlimited projects</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Full database integration</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> 1:1 Mentorship (1hr/mo)</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Remove branding</li>
                            <li className="disabled"><RiCloseCircleFill className="icon-close" /> Priority Support</li>
                        </ul>
                        <div className="card-footer">
                            <button className="btn-pricing btn-fill">Start Free Trial</button>
                            <span className="savings-text">
                                {plan === 'yearly' ? "Billed $96 yearly" : "Billed monthly"}
                            </span>
                        </div>
                    </div>

                    {/* Card 3: Growth */}
                    <div className="pricing-card standard">
                        <div className="plan-header">
                            <span className="plan-name text-growth">Growth</span>
                            <div className="price-wrapper">
                                <span className="currency">$</span>
                                <span className="price">
                                    <AnimatedPrice value={plan === 'yearly' ? prices.growth.yearly : prices.growth.monthly} />
                                </span>
                                <span className="period">/mo</span>
                            </div>
                        </div>
                        <ul className="features">
                            <li><RiCheckboxCircleFill className="icon-check" /> Access to all modules</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Unlimited everything</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Advanced Integrations</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Weekly 1:1 sessions</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> Whitelabel Solution</li>
                            <li><RiCheckboxCircleFill className="icon-check" /> 24/7 Priority Support</li>
                        </ul>
                        <div className="card-footer">
                            <button className="btn-pricing btn-outline">Contact Sales</button>
                            <span className="savings-text">
                                {plan === 'yearly' ? "Billed $948 yearly" : "Billed monthly"}
                            </span>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                        <p style={{ color: 'var(--pricing-text-muted)' }}>Got questions? We've got answers.</p>
                    </div>

                    <div className="faq-container">
                        {[
                            { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your plan whenever you'd like. You'll be switched to the free plan at the end of your billing cycle." },
                            { q: "Is there a free trial available?", a: "Absolutely! The 'Start Here' plan is completely free forever. For the Startup plan, we offer a 14-day free trial with no credit card required upfront." },
                            { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise accounts." },
                            { q: "Can I upgrade or downgrade later?", a: "Yes, you can change your plan at any time from your dashboard settings. Prorated charges will apply immediately." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                            >
                                <button className="faq-question" onClick={() => toggleFaq(index)}>
                                    {item.q}
                                    <RiAddLine className="faq-icon" />
                                </button>
                                <div className="faq-answer">
                                    {item.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <CTA />



            </main>
        </div>
    );
}