import React from "react";
import { Link } from "react-router-dom";
// Import social icons
import { RiFacebookFill, RiTwitterXLine, RiRssFill, RiGoogleFill, RiMoreFill } from "react-icons/ri";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-glow"></div>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="AUREX Logo" className="aurex-logo" />
                        </div>
                        <span className="footer-slogan">PREMIUM SOLUTIONS</span>
                    </div>

                    <div className="footer-col">
                        <a href="#" className="footer-link">Weebly Themes</a>
                        <a href="#" className="footer-link">Pre-Sale FAQs</a>
                        <a href="#" className="footer-link">Submit a Ticket</a>
                    </div>

                    <div className="footer-col">
                        <Link to="/services" className="footer-link">Services</Link>
                        <a href="#" className="footer-link">Theme Tweak</a>
                    </div>

                    <div className="footer-col">
                        <a href="#" className="footer-link">Showcase</a>
                        <a href="#" className="footer-link">Widgetkit</a>
                        <a href="#" className="footer-link">Support</a>
                    </div>

                    <div className="footer-col">
                        <Link to="/about" className="footer-link">About Us</Link>
                        <Link to="/contact" className="footer-link">Contact Us</Link>
                        <a href="#" className="footer-link">Affiliates</a>
                        <a href="#" className="footer-link">Resources</a>
                    </div>
                </div>

                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" className="social-btn"><RiFacebookFill /></a>
                        <a href="#" className="social-btn"><RiTwitterXLine /></a>
                        <a href="#" className="social-btn"><RiRssFill /></a>
                        <a href="#" className="social-btn"><RiGoogleFill /></a>
                        <a href="#" className="social-btn"><RiMoreFill /></a>
                    </div>
                    <p className="copyright">© Copyright 2024. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}