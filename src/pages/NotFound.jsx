import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { COMPANY, PAGE_META } from "../data/company";
import {
  RiHome4Line,
  RiMailLine,
  RiArrowRightLine,
  RiWifiOffLine,
  RiCodeSSlashLine,
  RiServiceLine,
  RiPriceTag3Line,
  RiBriefcaseLine,
} from "react-icons/ri";

const ROUTES = [
  { to: "/", label: "Home", icon: RiHome4Line },
  { to: "/services", label: "Services", icon: RiServiceLine },
  { to: "/contact", label: "Contact", icon: RiMailLine },
  { to: "/pricing", label: "Plans", icon: RiPriceTag3Line },
  { to: "/careers", label: "Careers", icon: RiBriefcaseLine },
];

const LOG_LINES = [
  "> scanning route table...",
  "> ERROR: endpoint unreachable",
  "> status: 404 NOT_FOUND",
  "> hint: return to a known path",
];

const FLOAT_CHARS = ["{", "}", "</>", "λ"];

export default function NotFound() {
  const { pathname } = useLocation();
  const [logIndex, setLogIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  usePageMeta(PAGE_META.notFound);

  useEffect(() => {
    if (logIndex >= LOG_LINES.length) return undefined;
    const t = setTimeout(() => setLogIndex((i) => i + 1), 480);
    return () => clearTimeout(t);
  }, [logIndex]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const safePath = pathname.length > 42 ? `${pathname.slice(0, 42)}…` : pathname;

  return (
    <div className="nf-page">
      <div className="nf-aurora nf-aurora--1" aria-hidden />
      <div className="nf-aurora nf-aurora--2" aria-hidden />
      <div className="nf-vignette" aria-hidden />

      <div className="nf-wrap">
        <div className="nf-top-meta">
          <div className="nf-badge">
            <RiWifiOffLine aria-hidden />
            <span>Signal lost</span>
          </div>
          <div className="nf-chips">
            <span className="nf-chip">ERR 404</span>
            <span className="nf-chip nf-chip--blue">ROUTE_NULL</span>
          </div>
        </div>

        <div className="nf-stage">
          <div className="nf-orbit nf-orbit--1" aria-hidden />
          <div className="nf-orbit nf-orbit--2" aria-hidden />
          <div className="nf-floaters" aria-hidden>
            {FLOAT_CHARS.map((ch, i) => (
              <span key={ch} className={`nf-float nf-float--${i + 1}`}>
                {ch}
              </span>
            ))}
          </div>
          <div className="nf-glitch-block">
            <h1 className="nf-glitch" data-text="404">
              404
            </h1>
            <div className="nf-glow-burst" aria-hidden />
          </div>
        </div>

        <h2 className="nf-title">This page took a wrong turn</h2>
        <p className="nf-lead">
          The URL you hit isn&apos;t on our map. Pick a route below—or start a real IT project with{" "}
          <strong>{COMPANY.name}</strong>.
        </p>

        <div className="nf-terminal-wrap">
          <div className="nf-terminal" role="status" aria-live="polite">
            <div className="nf-terminal__bar">
              <span className="nf-terminal__dot nf-terminal__dot--r" />
              <span className="nf-terminal__dot nf-terminal__dot--y" />
              <span className="nf-terminal__dot nf-terminal__dot--g" />
              <span className="nf-terminal__title">aurex://route-check</span>
            </div>
            <div className="nf-terminal__body">
              <p className="nf-terminal__line nf-terminal__line--path">
                <RiCodeSSlashLine aria-hidden />
                GET <code>{safePath || "/unknown"}</code>
              </p>
              {LOG_LINES.slice(0, logIndex).map((line) => (
                <p key={line} className="nf-terminal__line nf-terminal__line--err">
                  {line}
                </p>
              ))}
              <p className="nf-terminal__line nf-terminal__line--cursor">
                {showCursor ? "█" : " "}
              </p>
            </div>
          </div>
        </div>

        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            <span className="nf-btn__shine" aria-hidden />
            <RiHome4Line /> Back to Home
          </Link>
          <Link to="/contact" className="nf-btn nf-btn--ghost">
            Contact Us <RiArrowRightLine />
          </Link>
        </div>

        <nav className="nf-routes" aria-label="Suggested pages">
          {ROUTES.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} className="nf-route">
              <span className="nf-route__icon" aria-hidden>
                <Icon />
              </span>
              <span className="nf-route__label">{label}</span>
              <RiArrowRightLine className="nf-route__arrow" aria-hidden />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
