import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Gets current URL path

  // Scroll state batched via rAF to avoid layout thrashing
  useEffect(() => {
    let ticking = false;
    let lastScrolled = window.scrollY > 50;

    const update = () => {
      const next = window.scrollY > 50;
      if (next !== lastScrolled) {
        lastScrolled = next;
        setScrolled(next);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <Link to="/">
            <img src={logo} alt="AUREX" className="aurex-logo" />
        </Link>
      </div>

      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        <li>
            <Link to="/" className={isActive("/")}>Home</Link>
        </li>
        <li>
            <Link to="/services" className={isActive("/services")}>Services</Link>
        </li>
        <li>
            <Link to="/portfolio" className={isActive("/portfolio")}>Portfolio</Link>
        </li>
        <li>
            <Link to="/pricing" className={isActive("/pricing")}>Pricing</Link>
        </li>
        <li>
            <Link to="/about" className={isActive("/about")}>About</Link>
        </li>
        <li className="nav-links-contact">
            <Link to="/contact" className={`nav-link-contact ${isActive("/contact")}`}>
              Contact
            </Link>
        </li>
      </ul>

      <button
        className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <Link to="/contact" className="nav-btn">Contact</Link>
    </nav>
  );
}