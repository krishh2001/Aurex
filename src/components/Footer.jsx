import React from "react";
import { Link } from "react-router-dom";
import {
  RiLinkedinFill,
  RiTwitterXLine,
  RiInstagramLine,
  RiGithubFill,
} from "react-icons/ri";
import logo from "../assets/logo.png";
import { COMPANY, FOOTER_COLUMNS, FOOTER_SOCIAL } from "../data/company";

const SOCIAL_ICONS = {
  linkedin: RiLinkedinFill,
  twitter: RiTwitterXLine,
  instagram: RiInstagramLine,
  github: RiGithubFill,
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt={`${COMPANY.name} Logo`} className="aurex-logo" />
            </div>
            <span className="footer-slogan">{COMPANY.footerDescription}</span>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h3 className="footer-col-title">{col.title}</h3>
              {col.links.map((link) => {
                const linkKey = `${col.title}-${link.label}`;
                if (link.static) {
                  return (
                    <span key={linkKey} className="footer-link footer-link--static">
                      {link.label}
                    </span>
                  );
                }
                if (link.to) {
                  return (
                    <Link key={linkKey} to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <a key={linkKey} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="social-links social-links--bottom">
            {FOOTER_SOCIAL.map(({ type, url, label }) => {
              const Icon = SOCIAL_ICONS[type];
              if (!Icon) return null;
              return (
                <a
                  key={type}
                  href={url}
                  className="social-btn"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden />
                </a>
              );
            })}
          </div>
          <p className="copyright">
            © {COMPANY.copyrightYear} {COMPANY.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
