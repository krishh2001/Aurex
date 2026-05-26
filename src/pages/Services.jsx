import React, { useState, useRef, useCallback } from "react";
import { usePageEffects } from "../hooks/usePageEffects";
import { usePageMeta } from "../hooks/usePageMeta";
import { useIntervalWhenVisible } from "../hooks/useIntervalWhenVisible";
import ServiceOfferingCard from "../components/ServiceOfferingCard";
import { SERVICE_OFFERINGS, PAGE_META } from "../data/company";

const TECH_DATA = [
    { name: "React", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TypeScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Docker", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Angular", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
];

export default function Services() {
  const [techIndex, setTechIndex] = useState(2);
  const techOrbitRef = useRef(null);

  usePageMeta(PAGE_META.services);
  usePageEffects(".services-bg-text");

  const advanceTech = useCallback(() => {
    setTechIndex((prev) => (prev + 1) % TECH_DATA.length);
  }, []);

  useIntervalWhenVisible(techOrbitRef, advanceTech, 3000);

  const getTechItemClass = (index) => {
    const len = TECH_DATA.length;
    const diff = (index - techIndex + len) % len;

    if (diff === 0) return 'services-tech-item--active';
    if (diff === len - 1) return 'services-tech-item--prev';
    if (diff === 1) return 'services-tech-item--next';
    if (diff === len - 2) return 'services-tech-item--prev-secondary';
    if (diff === 2) return 'services-tech-item--next-secondary';
    return 'services-tech-item--hidden';
  };

  return (
    <div className="services-page-wrapper">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>

      <div className="bg-large-text services-bg-text" aria-hidden="true">SERVICES</div>

      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      <main className="container">

        {/* Hero */}
        <section className="services-hero-container">
          <div className="services-section-header">
            <span className="services-section-subtitle">IT Services</span>
            <h1 className="services-section-title">Websites & Applications<br />Built for Your Clients</h1>
            <p className="services-section-desc">
              AUREX takes your IT project requirements and delivers production-ready websites, web apps, and mobile applications—with cloud, security, and support when you need them.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="sp-margin-lg">
          <div className="svc-grid">
            {SERVICE_OFFERINGS.map((service, index) => (
              <ServiceOfferingCard
                key={service.title}
                service={service}
                index={index}
                variant="full"
              />
            ))}
          </div>
        </section>

        {/* Tech Stack Header */}
        <div className="services-section-header services-tech-header">
          <span className="services-section-subtitle">Our Arsenal</span>
          <h2 className="services-section-title">Tech Stack</h2>
          <p className="services-section-desc">Powered by next-generation technologies.</p>
        </div>

        {/* Tech Stack 3D Orbit */}
        <section className="services-tech-orbit-section" ref={techOrbitRef}>
          {/* Animated Rings */}
          <div className="services-orbit-rings-container">
            <div className="services-orbit-ring services-orbit-ring--primary"></div>
            <div className="services-orbit-ring services-orbit-ring--secondary"></div>
            <div className="services-orbit-ring services-orbit-ring--tertiary"></div>
          </div>

          <div className="services-center-guide-line"></div>

          {/* Carousel */}
          <div className="services-tech-carousel-wrapper">
            {TECH_DATA.map((tech, index) => (
              <div
                key={index}
                className={`services-tech-item ${getTechItemClass(index)}`}
                onClick={() => setTechIndex(index)}
              >
                <img src={tech.img} alt={tech.name} loading="lazy" decoding="async" width={64} height={64} />
              </div>
            ))}
          </div>

          {/* Dynamic Info Label */}
          <div className="services-tech-info-container">
            <svg className="services-tech-connector-svg" viewBox="0 0 280 70">
              <defs>
                <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                </linearGradient>
              </defs>
              <path className="services-connector-path" d="M140,0 V25 Q140,50 100,50 H20 M140,25 Q140,50 180,50 H260" />
              <circle cx="20" cy="50" r="3" fill="#10b981" />
              <circle cx="260" cy="50" r="3" fill="#10b981" />
            </svg>

            <div className="services-tech-label-card">
              <span className="services-tech-name">{TECH_DATA[techIndex].name}</span>
              <span className="services-tech-category">({TECH_DATA[techIndex].category})</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}