import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiCodeSSlashLine, RiPaletteLine, RiSmartphoneLine, RiCloudLine,
  RiShoppingBag3Line, RiBarChartGroupedLine, RiCheckLine, RiArrowRightLine
} from "react-icons/ri";
import CTA from "../components/CTA";

export default function Services() {
  const [techIndex, setTechIndex] = useState(2);

  const techData = [
    { name: "React", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", category: "Backend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TypeScript", category: "Language", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Docker", category: "DevOps", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", category: "Database", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Angular", category: "Frontend", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const bgText = document.querySelector('.services-bg-text');
      if (bgText) {
        let scroll = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
        bgText.style.opacity = 1 - (scroll * 0.001);
      }
    };
    window.addEventListener('scroll', handleScroll);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prevIndex) => (prevIndex + 1) % techData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [techData.length]);

  const getTechItemClass = (index) => {
    const len = techData.length;
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

      <h1 className="bg-large-text services-bg-text">SERVICES</h1>

      <div className="particles" id="particles"></div>
      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      <main className="container">

        {/* Hero */}
        <section className="services-hero-container">
          <div className="services-section-header">
            <span className="services-section-subtitle">Our Expertise</span>
            <h2 className="services-section-title">Digital Excellence,<br />Engineered for Impact</h2>
            <p className="services-section-desc">
              Experience our services through an immersive interface. We deliver
              high-performance solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="sp-margin-lg">
          <div className="services-cards-grid">

            {/* Service 1 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiCodeSSlashLine /></div>
              <h3>Web Development</h3>
              <p>Custom web applications built with modern frameworks. Fast, secure, and scalable solutions tailored to your business needs.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> React & Next.js Development</li>
                <li><RiCheckLine /> Node.js Backend Systems</li>
                <li><RiCheckLine /> Progressive Web Apps</li>
                <li><RiCheckLine /> API Integration</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

            {/* Service 2 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiPaletteLine /></div>
              <h3>UI/UX Design</h3>
              <p>Intuitive interfaces that users love. From wireframes to high-fidelity prototypes, we design with the user in mind.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> User Research & Strategy</li>
                <li><RiCheckLine /> Interactive Prototyping</li>
                <li><RiCheckLine /> Design Systems</li>
                <li><RiCheckLine /> Mobile-First Approach</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

            {/* Service 3 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiSmartphoneLine /></div>
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android devices.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> React Native & Flutter</li>
                <li><RiCheckLine /> iOS & Android Native</li>
                <li><RiCheckLine /> App Store Optimization</li>
                <li><RiCheckLine /> Performance Tuning</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

            {/* Service 4 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiCloudLine /></div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure, migration services, and optimization to ensure 99.9% uptime and security.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> AWS & Azure Architecture</li>
                <li><RiCheckLine /> DevOps Automation</li>
                <li><RiCheckLine /> Serverless Computing</li>
                <li><RiCheckLine /> Cloud Security</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

            {/* Service 5 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiShoppingBag3Line /></div>
              <h3>E-commerce</h3>
              <p>Complete e-commerce solutions that convert visitors into customers with seamless checkout experiences.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> Shopify & WooCommerce</li>
                <li><RiCheckLine /> Custom Payment Gateways</li>
                <li><RiCheckLine /> Inventory Management</li>
                <li><RiCheckLine /> Sales Analytics</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

            {/* Service 6 */}
            <div className="services-offering-card">
              <div className="services-card-icon-container"><RiBarChartGroupedLine /></div>
              <h3>Digital Marketing</h3>
              <p>Data-driven marketing strategies that increase visibility, drive traffic, and generate qualified leads.</p>
              <ul className="services-card-features">
                <li><RiCheckLine /> SEO Optimization</li>
                <li><RiCheckLine /> Social Media Strategy</li>
                <li><RiCheckLine /> Content Marketing</li>
                <li><RiCheckLine /> PPC Campaigns</li>
              </ul>
              <Link to="/contact" className="services-learn-more-link">Learn More <RiArrowRightLine /></Link>
            </div>

          </div>
        </section>

        {/* Tech Stack Header */}
        <div className="services-section-header" style={{ marginTop: '150px' }}>
          <span className="services-section-subtitle">Our Arsenal</span>
          <h2 className="services-section-title">Tech Stack</h2>
          <p className="services-section-desc">Powered by next-generation technologies.</p>
        </div>

        {/* Tech Stack 3D Orbit */}
        <section className="services-tech-orbit-section">
          {/* Animated Rings */}
          <div className="services-orbit-rings-container">
            <div className="services-orbit-ring services-orbit-ring--primary"></div>
            <div className="services-orbit-ring services-orbit-ring--secondary"></div>
            <div className="services-orbit-ring services-orbit-ring--tertiary"></div>
          </div>

          <div className="services-center-guide-line"></div>

          {/* Carousel */}
          <div className="services-tech-carousel-wrapper">
            {techData.map((tech, index) => (
              <div
                key={index}
                className={`services-tech-item ${getTechItemClass(index)}`}
                onClick={() => setTechIndex(index)}
              >
                <img src={tech.img} alt={tech.name} />
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
              <span className="services-tech-name">{techData[techIndex].name}</span>
              <span className="services-tech-category">({techData[techIndex].category})</span>
            </div>
          </div>
        </section>

        <CTA />

      </main>
    </div>
  );
}