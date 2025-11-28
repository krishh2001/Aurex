import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiQuestionLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiCheckLine
} from "react-icons/ri";

import CTA from "../components/CTA";



export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // --- Particle Effect ---
  useEffect(() => {
    // Parallax background text
    const handleScroll = () => {
      const bgText = document.querySelector('.bg-large-text');
      if (bgText) {
        let scroll = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scroll * 0.15}px)`;
        bgText.style.opacity = 1 - (scroll * 0.001);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Particles logic
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

  // --- Form Handling ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Background Ambience */}
      <div className="ambient-glow"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      <div className="particles" id="particles"></div>
      <div className="tech-line left-line"></div>
      <div className="tech-line right-line"></div>

      {/* Parallax Title */}
      <h1 className="bg-large-text">Contact</h1>

      <main className="container">

        <section className="contact-section">
          <div className="contact-grid">
            {/* Left Content */}
            <div className="contact-content">
              <div className="section-badge"><RiQuestionLine /> Contact</div>
              <h1>Get in touch</h1>
              <p className="contact-text">
                Have questions or ready to transform your business? Drop a message — we'll respond fast.
              </p>
              <p className="contact-text">
                Whether you're looking to start a new project or just want to explore possibilities,
                we're here to help you navigate the digital landscape.
              </p>

              <div className="contact-cards">
                <a href="mailto:hello@nova.com" className="contact-card">
                  <div className="contact-icon"><RiMailLine /></div>
                  <div className="contact-details">
                    <div className="contact-label">Email us</div>
                    <div className="contact-value">hello@nova.com</div>
                  </div>
                  <div className="contact-arrow"><RiArrowRightUpLine /></div>
                </a>

                <a href="tel:+15551234567" className="contact-card">
                  <div className="contact-icon"><RiPhoneLine /></div>
                  <div className="contact-details">
                    <div className="contact-label">Call us</div>
                    <div className="contact-value">+1 (555) 123-4567</div>
                  </div>
                  <div className="contact-arrow"><RiArrowRightUpLine /></div>
                </a>

                <div className="contact-card">
                  <div className="contact-icon"><RiMapPinLine /></div>
                  <div className="contact-details">
                    <div className="contact-label">Our location</div>
                    <div className="contact-value">San Francisco, CA</div>
                  </div>
                  <div className="contact-arrow"><RiArrowRightUpLine /></div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="form-wrapper">
              <form className="glass-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  style={isSent ? { background: '#10b981', color: '#fff' } : {}}
                >
                  {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Submit Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-wrapper">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063683057404!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aurex Location"
            ></iframe>
          </div>
        </section>

        <CTA />


        {/* Success Message Toast */}
        <div className={`success-message ${isSent ? 'active' : ''}`}>
          <div className="success-icon"><RiCheckLine /></div>
          <h3 style={{ color: '#fff', marginBottom: '6px', fontSize: '1.1rem' }}>Message Sent!</h3>
          <p style={{ color: 'var(--contact-text-muted)', margin: 0, fontSize: '0.9rem' }}>We'll get back to you soon.</p>
        </div>

      </main>
    </div>
  );
}