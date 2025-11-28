import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Gets current URL path

  // Handle Scroll Effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu automatically when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

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
            <Link to="/about" className={isActive("/about")}>About</Link>
        </li>
        <li>
            <Link to="/blog-list" className={isActive("/blog-list")}>Blogs</Link>
        </li>
        <li>
            <Link to="/pricing" className={isActive("/pricing")}>Pricing</Link>
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

      <Link to="/contact" className="nav-btn">Let's Talk</Link>
    </nav>
  );
}