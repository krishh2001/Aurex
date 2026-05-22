import React, { useId } from "react";

function CloudIcon({ gradId }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="8" y1="14" x2="40" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <path
        className="psi-cloud-fill"
        d="M14 32h22a8 8 0 0 0 2.4-15.6A10 10 0 0 0 18 14a7.5 7.5 0 0 0-1.2 15"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        className="psi-cloud-body"
        d="M14 32h22a8 8 0 0 0 2.4-15.6A10 10 0 0 0 18 14a7.5 7.5 0 0 0-1.2 15"
        stroke={`url(#${gradId})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="psi-dot psi-dot--1" cx="20" cy="26" r="2.25" fill="currentColor" />
      <circle className="psi-dot psi-dot--2" cx="26" cy="24" r="2.25" fill="currentColor" />
      <circle className="psi-dot psi-dot--3" cx="32" cy="26" r="2.25" fill="currentColor" />
    </svg>
  );
}

/** Marketing / corporate website — browser with page layout */
function WebsiteIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect
        className="psi-web-frame"
        x="7"
        y="9"
        width="34"
        height="30"
        rx="5"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path className="psi-web-bar" d="M7 16h34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <circle cx="12" cy="12.5" r="1.75" fill="currentColor" opacity="0.55" />
      <circle cx="17" cy="12.5" r="1.75" fill="currentColor" opacity="0.4" />
      <circle cx="22" cy="12.5" r="1.75" fill="currentColor" opacity="0.4" />
      <rect className="psi-web-hero" x="11" y="19" width="26" height="9" rx="2" fill="currentColor" fillOpacity="0.38" />
      <line className="psi-web-line psi-web-line--1" x1="11" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line className="psi-web-line psi-web-line--2" x1="11" y1="36" x2="22" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

/** Web apps — layered dashboard panels */
function WebAppIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect
        className="psi-app-layer psi-app-layer--back"
        x="15"
        y="7"
        width="26"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
        opacity="0.55"
      />
      <rect
        className="psi-app-layer psi-app-layer--front"
        x="7"
        y="13"
        width="32"
        height="26"
        rx="4"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect className="psi-app-tile psi-app-tile--1" x="11" y="17" width="11" height="9" rx="2" fill="currentColor" fillOpacity="0.42" />
      <rect className="psi-app-tile psi-app-tile--2" x="26" y="17" width="9" height="9" rx="2" fill="currentColor" fillOpacity="0.28" />
      <rect className="psi-app-tile psi-app-tile--3" x="11" y="29" width="24" height="5" rx="1.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

/** Mobile apps — smartphone with app grid */
function MobileIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect
        className="psi-phone-body"
        x="14"
        y="5"
        width="20"
        height="38"
        rx="4.5"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        className="psi-phone-screen"
        x="17"
        y="10"
        width="14"
        height="24"
        rx="2"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle className="psi-phone-home" cx="24" cy="38" r="2" fill="currentColor" />
      <rect className="psi-phone-app" x="19" y="13" width="4.5" height="4.5" rx="1" fill="currentColor" fillOpacity="0.55" />
      <rect className="psi-phone-app" x="25" y="13" width="4.5" height="4.5" rx="1" fill="currentColor" fillOpacity="0.4" />
      <rect className="psi-phone-app" x="19" y="19" width="4.5" height="4.5" rx="1" fill="currentColor" fillOpacity="0.4" />
      <rect className="psi-phone-app psi-phone-app--wide" x="25" y="19" width="4.5" height="10" rx="1" fill="currentColor" fillOpacity="0.32" />
    </svg>
  );
}

/** Custom Software — editor window with clear </> */
function DevIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect
        className="psi-dev-window"
        x="7"
        y="9"
        width="34"
        height="30"
        rx="5"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path className="psi-dev-title" d="M7 16h34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <circle cx="12" cy="12.5" r="1.75" fill="currentColor" opacity="0.55" />
      <circle cx="17" cy="12.5" r="1.75" fill="currentColor" opacity="0.4" />
      <circle cx="22" cy="12.5" r="1.75" fill="currentColor" opacity="0.4" />
      <path
        className="psi-chevron psi-chevron--l"
        d="M16 19 L9 24 L16 29"
        stroke="currentColor"
        strokeWidth="3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="psi-slash"
        d="M21.5 18.5 L26.5 29.5"
        stroke="currentColor"
        strokeWidth="3.75"
        strokeLinecap="round"
      />
      <path
        className="psi-chevron psi-chevron--r"
        d="M32 19 L39 24 L32 29"
        stroke="currentColor"
        strokeWidth="3.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line className="psi-code-line psi-code-line--1" x1="11" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <line className="psi-code-line psi-code-line--2" x1="11" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

const ICONS = {
  website: WebsiteIcon,
  webapp: WebAppIcon,
  mobile: MobileIcon,
  cloud: CloudIcon,
  security: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        className="psi-shield-fill"
        d="M24 6L10 12v10c0 9.2 6 17.8 14 20 8-2.2 14-10.8 14-20V12L24 6z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        className="psi-shield"
        d="M24 6L10 12v10c0 9.2 6 17.8 14 20 8-2.2 14-10.8 14-20V12L24 6z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path className="psi-lock" d="M20 24v-3a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" />
      <rect className="psi-lock" x="17" y="24" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2.75" fill="currentColor" fillOpacity="0.25" />
      <line className="psi-scan" x1="12" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  dev: DevIcon,
  devops: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle className="psi-orbit" cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" opacity="0.5" />
      <path className="psi-link" d="M24 14v6M30 27l5 3M18 27l-5 3" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" />
      <circle className="psi-node psi-node--c" cx="24" cy="24" r="5" fill="currentColor" />
      <circle className="psi-node psi-node--1" cx="24" cy="10" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2.5" />
      <circle className="psi-node psi-node--2" cx="36" cy="30" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2.5" />
      <circle className="psi-node psi-node--3" cx="12" cy="30" r="4" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <line x1="10" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <rect className="psi-bar psi-bar--1" x="11" y="27" width="8" height="9" rx="2" fill="currentColor" />
      <rect className="psi-bar psi-bar--2" x="20" y="21" width="8" height="15" rx="2" fill="currentColor" />
      <rect className="psi-bar psi-bar--3" x="29" y="15" width="8" height="21" rx="2" fill="currentColor" />
      <path className="psi-trend" d="M14 30l8-6 6 4 10-12" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  transform: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle className="psi-globe-ring" cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <ellipse className="psi-globe-fill" cx="24" cy="24" rx="11" ry="15" fill="currentColor" fillOpacity="0.15" />
      <ellipse className="psi-globe" cx="24" cy="24" rx="11" ry="15" stroke="currentColor" strokeWidth="3" />
      <path className="psi-globe-line" d="M13 24h22M24 9c4 4 6 9 6 15s-2 11-6 15M24 9c-4 4-6 9-6 15s2 11 6 15" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <circle className="psi-satellite" cx="36" cy="14" r="3.5" fill="currentColor" stroke="#fff" strokeWidth="1.5" />
    </svg>
  ),
};

export default function PremiumServiceIcon({ type = "dev", className = "" }) {
  const gradId = useId().replace(/:/g, "");
  const IconComponent = ICONS[type] ?? ICONS.dev;
  const svg = typeof IconComponent === "function" ? <IconComponent gradId={gradId} /> : IconComponent;

  return (
    <div className={`premium-service-icon premium-service-icon--${type} ${className}`.trim()} aria-hidden>
      <span className="premium-service-icon__glow" />
      <span className="premium-service-icon__ring" />
      <span className="premium-service-icon__svg">{svg}</span>
    </div>
  );
}
