import React, { useEffect, useState } from "react";
// 1. Import the icons from react-icons/ri (Remix Icons)
import {
    RiShiningFill, RiGlobalLine, RiCommandFill, RiShape2Fill, RiFlashlightFill, RiCodeBoxLine,
    RiCloudLine, RiShieldKeyholeLine, RiCodeSSlashLine,
    RiRocket2Line, RiShieldCheckLine, RiLineChartLine,
    RiArrowRightLine, RiDoubleQuotesL
} from "react-icons/ri";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const testimonials = [
        {
            name: "Carol D. Story",
            role: "CTO, TechCorp",
            text: "AUREX transformed our cloud infrastructure, reducing costs by 40% while improving performance and scalability.",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
            name: "Sarah J. Christopher",
            role: "CEO, InnovateX",
            text: "Their security solutions protected us from a major cyber attack. Their team's expertise is truly exceptional.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Martin A. Wright",
            role: "Director, Global Solutions",
            text: "The custom software they developed streamlined our operations and improved efficiency by 60%. Outstanding work!",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
        },
        {
            name: "James L. Smith",
            role: "Tech Lead, FutureStack",
            text: "Working with AUREX was a game-changer for our digital transformation journey. Professional, knowledgeable, and results-driven.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        {
            name: "Emily R. Davis",
            role: "Product Manager, QuantumSoft",
            text: "Their team delivered beyond our expectations. The solution was scalable, secure, and perfectly aligned with our business goals.",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    useEffect(() => {
        // Scroll Reveal
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("active");
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

        // Particles
        const particleContainer = document.getElementById("particles");
        if (particleContainer && particleContainer.childElementCount === 0) {
            for (let i = 0; i < 20; i++) {
                const span = document.createElement("span");
                span.className = "particle";
                span.style.left = Math.random() * 100 + "%";
                span.style.top = Math.random() * 100 + "%";
                span.style.animationDuration = Math.random() * 10 + 5 + "s";
                span.style.animationDelay = Math.random() * 5 + "s";
                particleContainer.appendChild(span);
            }
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getCardClass = (index) => {
        const total = testimonials.length;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;
        if (index === currentIndex) return "testimonial-card active";
        if (index === prevIndex) return "testimonial-card prev";
        if (index === nextIndex) return "testimonial-card next";
        return index > currentIndex ? "testimonial-card hidden-right" : "testimonial-card hidden-left";
    };

    return (
        <div className="home-container">
            <div className="ambient-glow-2"></div>
            <div className="ambient-glow-3"></div>
            <div className="particles" id="particles"></div>
            <div className="tech-line left-line"></div>
            <div className="tech-line right-line"></div>

            <header className="hero-section">
                <div className="reveal active">
                    <div className="hero-badge">AUREX DIGITAL</div>
                    <h1 className="hero-title">
                        Digital Transformation <br /> for Modern Businesses
                    </h1>
                    <p className="hero-desc">
                        AUREX creates fast, scalable and modern digital solutions that help
                        brands grow, perform and lead with confidence.
                    </p>
                    <div className="hero-btns">
                        <a href="#" className="btn-primary">Explore Our Work</a>
                        <a href="#" className="btn-secondary">Book a Call</a>
                    </div>
                </div>
            </header>

            {/* TICKER SECTION (Updated with Icons) */}
            <div className="ticker-wrap">
                <div className="ticker">
                    {/* We repeat this block twice for the infinite scroll effect */}
                    {[1, 2].map((i) => (
                        <React.Fragment key={i}>
                            <div className="ticker-item"><RiShiningFill /> MICROSOFT</div>
                            <div className="ticker-item"><RiGlobalLine /> GOOGLE</div>
                            <div className="ticker-item"><RiCommandFill /> AMAZON</div>
                            <div className="ticker-item"><RiShape2Fill /> IBM</div>
                            <div className="ticker-item"><RiFlashlightFill /> TESLA</div>
                            <div className="ticker-item"><RiCodeBoxLine /> NETFLIX</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <main className="expertise_container">
                {/* SERVICES */}
                {/* SERVICES - Updated with 6 cards */}
                <section className="section-margin" id="services">
                    <div className="section-header reveal">
                        <span className="section-subtitle">Our Expertise</span>
                        <h2 className="section-title">Digital Solutions That Deliver</h2>
                        <p style={{ color: "var(--text-muted)" }}>High-performance technology services designed to accelerate your business.</p>
                    </div>

                    <div className="services-grid">
                        {/* Existing 3 cards + 3 new cards */}
                        <div className="service-card reveal">
                            <div className="service-icon"><RiCloudLine /></div>
                            <h3>Cloud Engineering</h3>
                            <p>Powerful, secure and scalable cloud setups for fast-growing businesses.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><RiShieldKeyholeLine /></div>
                            <h3>Security & Protection</h3>
                            <p>Advanced cybersecurity, proactive monitoring and full data protection systems.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><RiCodeSSlashLine /></div>
                            <h3>Custom Development</h3>
                            <p>Web, mobile and software products built for speed, precision and long-term growth.</p>
                        </div>

                        {/* NEW SERVICE CARDS */}
                        <div className="service-card reveal">
                            <div className="service-icon"><RiCommandFill /></div>
                            <h3>DevOps & Automation</h3>
                            <p>CI/CD pipelines, infrastructure as code, and deployment automation for efficiency.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><RiLineChartLine /></div>
                            <h3>Data Analytics</h3>
                            <p>Business intelligence, data visualization, and predictive analytics solutions.</p>
                        </div>
                        <div className="service-card reveal">
                            <div className="service-icon"><RiGlobalLine /></div>
                            <h3>Digital Transformation</h3>
                            <p>End-to-end modernization of legacy systems and processes for digital-first operations.</p>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section className="section-margin" id="about">
                    <div className="about-grid">
                        <div className="about-content reveal">
                            <span className="section-subtitle">About AUREX</span>
                            <h2>Engineering Digital Excellence<br /><span style={{ color: "var(--accent-primary)" }}>Since 2015</span></h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                                AUREX is a next-generation digital company focused on building systems that are fast, secure and future-ready.
                            </p>
                            <a href="#" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid var(--accent-primary)" }}>
                                Discover our journey
                            </a>
                        </div>
                        <div className="about-img-wrapper reveal">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Modern Office" className="about-img" />
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="stats-section reveal">
                    <div className="stats-container">
                        <div className="stats-grid">
                            <div className="stat-item"><div className="stat-number">250+</div><div className="stat-label">Projects Delivered</div></div>
                            <div className="stat-item"><div className="stat-number">98%</div><div className="stat-label">Client Retention</div></div>
                            <div className="stat-item"><div className="stat-number">50+</div><div className="stat-label">Tech Experts</div></div>
                            <div className="stat-item"><div className="stat-number">8 Years</div><div className="stat-label">Industry Experience</div></div>
                        </div>
                    </div>
                </section>

                {/* LEARNING */}
                <section className="learning-section section-margin" id="learning">
                    <div className="learning_container">
                        <h2 className="section-title reveal">What You’ll Master with <span className="highlight-text">AUREX</span></h2>
                        <div className="content-wrapper">
                            <div className="center-circle-container">
                                <div className="glowing-ring"></div>
                                <div className="inner-circle">
                                    <span className="inner-text">Cloud Architecture</span>
                                    <div className="divider-line"></div>
                                    <span className="inner-text">Security Systems</span>
                                    <div className="divider-line"></div>
                                    <span className="inner-text">DevOps Pipelines</span>
                                </div>
                            </div>
                            <div className="learn-item item-1 reveal"><div className="item-number">01</div><div className="item-text">Infrastructure<br />Engineering</div></div>
                            <div className="learn-item item-2 reveal"><div className="item-number">02</div><div className="item-text">Modern<br />Development</div></div>
                            <div className="learn-item item-3 reveal"><div className="item-number">03</div><div className="item-text">Security<br />Fundamentals</div></div>
                            <div className="learn-item item-4 reveal"><div className="item-number">04</div><div className="item-text">Performance<br />Scaling</div></div>
                            <div className="learn-item item-5 reveal"><div className="item-number">05</div><div className="item-text">Compliance &<br />Standards</div></div>
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="section-margin" id="process">
                    <div className="section-header reveal">
                        <span className="section-subtitle">Our Workflow</span>
                        <h2 className="section-title">The AUREX Method</h2>
                    </div>
                    <div className="process-grid">
                        {[{ num: "01", t: "Discovery" }, { num: "02", t: "Design & Build" }, { num: "03", t: "Launch" }, { num: "04", t: "Optimization" }, { num: "05", t: "Future-Proofing" }, { num: "06", t: "Training" }].map((p, idx) => (
                            <div className="process-card reveal" key={idx}>
                                <span className="process-num">{p.num}</span>
                                <h3>{p.t}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Standardized high-quality workflow ensuring consistent results.</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* CASE STUDIES */}
                <section className="case-studies-section section-margin" id="case-studies">
                    <div className="section-header reveal">
                        <span className="section-subtitle">Client Wins</span>
                        <h2 className="section-title">Case Studies</h2>
                        <p style={{ color: "var(--text-muted)" }}>Real results from real partnerships.</p>
                    </div>
                    <div className="case-studies-grid">
                        <div className="case-study-card reveal">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Case Study" className="case-study-img" />
                            <div className="case-study-content">
                                <h3>Enterprise Cloud Upgrade</h3>
                                <p>A complete cloud overhaul that reduced infrastructure cost and improved system performance.</p>
                                <a href="#" className="case-study-link">Read More <RiArrowRightLine style={{ marginLeft: 5 }} /></a>
                            </div>
                        </div>
                        <div className="case-study-card reveal">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Case Study" className="case-study-img" />
                            <div className="case-study-content">
                                <h3>Security Overhaul</h3>
                                <p>Full cybersecurity setup for a financial brand—blocking threats before they could cause damage.</p>
                                <a href="#" className="case-study-link">Read More <RiArrowRightLine style={{ marginLeft: 5 }} /></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="testimonial-section section-margin">
                    <div className="section-header reveal">
                        <span className="section-subtitle">Testimonials</span>
                        <h2 className="section-title">What Clients Say</h2>
                    </div>
                    <div className="slider-wrapper" id="slider-container">
                        {testimonials.map((item, index) => (
                            <div key={index} className={getCardClass(index)} onClick={() => setCurrentIndex(index)}>
                                <div className="quote-box">
                                    <RiDoubleQuotesL className="quote-icon" />
                                    <p className="quote-text">{item.text}</p>
                                </div>
                                <div className="user-info">
                                    <div className="connection-dot"></div>
                                    <img src={item.image} alt={item.name} className="avatar" />
                                    <h4 className="user-name">{item.name}</h4>
                                    <span className="user-role">{item.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dots-container" id="dots-container">
                        {testimonials.map((_, index) => (
                            <div key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}