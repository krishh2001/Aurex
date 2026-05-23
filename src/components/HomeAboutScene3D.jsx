import React, { useId } from "react";

/** IT delivery stack — sharp isometric 3D, Aurex-branded code editor */
export default function HomeAboutScene3D() {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="home-about__scene">
      <div className="home-about__scene-ambient" aria-hidden />
      <div className="home-about__scene-particles" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="home-about__particle" style={{ "--i": i }} />
        ))}
      </div>
      <div className="home-about__scene-stage">
        <svg
          className="home-about__scene-svg"
          viewBox="-90 115 660 445"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <SceneSvg uid={uid} />
        </svg>
      </div>
    </div>
  );
}

function SceneSvg({ uid }) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

  return (
    <>
      <defs>
        <linearGradient id={`${uid}-em`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id={`${uid}-bl`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id={`${uid}-vi`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={`${uid}-screen`} x1="240" y1="200" x2="240" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0c1524" />
          <stop offset="1" stopColor="#030712" />
        </linearGradient>
      </defs>

      <g className="home-about__network" opacity="0.45">
        <path
          d="M115 215 C170 235 210 255 240 275 M365 205 C320 235 280 258 240 275 M240 275 L240 415 M165 435 L240 415 L355 365"
          stroke={`url(#${uid}-em)`}
          strokeWidth="1.25"
          strokeOpacity="0.45"
          strokeDasharray="5 9"
          strokeLinecap="round"
        />
        <circle cx="240" cy="275" r="4.5" fill="#34d399" />
        <circle cx="115" cy="215" r="3.5" fill="#60a5fa" />
        <circle cx="365" cy="205" r="3.5" fill="#60a5fa" />
        <circle cx="165" cy="435" r="3.5" fill="#a78bfa" />
      </g>

      <g className="home-about__ring home-about__ring--a">
        <ellipse cx="240" cy="305" rx="155" ry="46" stroke={`url(#${uid}-em)`} strokeWidth="1" strokeOpacity="0.32" strokeDasharray="3 14" />
      </g>
      <g className="home-about__ring home-about__ring--b">
        <ellipse cx="240" cy="305" rx="118" ry="34" stroke={`url(#${uid}-bl)`} strokeWidth="0.9" strokeOpacity="0.26" strokeDasharray="6 10" />
      </g>

      <g className="home-about__float home-about__float--b home-about__cloud">
        <path
          d="M45 200 C45 182 60 170 78 176 C82 158 106 148 124 162 C134 144 160 144 170 162 C188 152 206 166 206 184 C218 188 224 202 218 214 C212 228 196 236 180 232 L68 232 C50 232 38 218 45 200 Z"
          fill="#07090f"
          stroke={`url(#${uid}-bl)`}
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />
        <path d="M82 214 h78 M82 226 h58" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <text x="68" y="206" fill="#93c5fd" fontSize="10" fontFamily={mono} fontWeight="600" opacity="0.9">
          CLOUD
        </text>
        <path d="M136 232 L136 252" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.55" />
        <path d="M130 252 L142 252 L136 260 Z" fill="#34d399" fillOpacity="0.75" />
      </g>

      <g className="home-about__float home-about__float--a">
        <path d="M305 172 L378 208 L378 312 L305 348 L232 312 L232 208 Z" fill="#07080c" stroke={`url(#${uid}-bl)`} strokeWidth="1.5" strokeOpacity="0.85" />
        <path d="M305 172 L378 208 L305 244 L232 208 Z" fill={`url(#${uid}-bl)`} fillOpacity="0.24" />
        <path d="M248 228 h112 M248 248 h92 M248 268 h102" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" opacity="0.42" />
        <circle cx="352" cy="238" r="3.5" fill="#34d399" />
        <circle cx="352" cy="258" r="3.5" fill="#34d399" />
        <circle cx="352" cy="278" r="3.5" fill="#fbbf24" />
        <text x="248" y="222" fill="#94a3b8" fontSize="9" fontFamily={mono} fontWeight="500">
          API · NODE
        </text>
        <path d="M244 288 L368 288" stroke="#1e293b" strokeWidth="1" />
        <path d="M248 300 h88 M248 316 h68" stroke="#64748b" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <circle cx="352" cy="308" r="3.5" fill="#34d399" />
        <text x="248" y="296" fill="#94a3b8" fontSize="9" fontFamily={mono} fontWeight="500">
          DB · REDIS
        </text>
      </g>

      <g className="home-about__float home-about__float--d home-about__db">
        <text x="388" y="348" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily={mono} fontWeight="600">
          SQL
        </text>
        <ellipse cx="388" cy="366" rx="26" ry="9" fill="#050508" stroke={`url(#${uid}-vi)`} strokeWidth="1.2" strokeOpacity="0.8" />
        <path d="M362 366 L362 402 C362 408 374 412 388 412 C402 412 414 408 414 402 L414 366" fill="#06060a" stroke={`url(#${uid}-vi)`} strokeWidth="1.2" strokeOpacity="0.75" />
        <ellipse cx="388" cy="402" rx="26" ry="9" fill="#08080e" stroke={`url(#${uid}-vi)`} strokeWidth="1" strokeOpacity="0.55" />
        <path d="M378 378 h20 M378 388 h14 M378 398 h18" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </g>

      <g className="home-about__float home-about__float--c home-about__ide">
        <path d="M240 152 L312 188 L312 382 L240 418 L168 382 L168 188 Z" fill="#030304" stroke={`url(#${uid}-em)`} strokeWidth="2" />
        <path d="M240 152 L312 188 L240 224 L168 188 Z" fill={`url(#${uid}-em)`} fillOpacity="0.38" />
        <path d="M312 188 L312 382 L240 418 L240 224 Z" fill={`url(#${uid}-em)`} fillOpacity="0.11" />
        <text x="200" y="182" fill="#34d399" fontSize="11" fontFamily={mono} fontWeight="700" letterSpacing="3" opacity="0.95">
          AUREX
        </text>
        <path d="M182 212 L298 212 L298 362 L182 362 Z" fill={`url(#${uid}-screen)`} stroke="#1e293b" strokeWidth="1" />
        <path d="M182 212 L298 212 L298 228 L182 228 Z" fill="#0f172a" />
        <circle cx="192" cy="220" r="3.5" fill="#ef4444" />
        <circle cx="204" cy="220" r="3.5" fill="#fbbf24" />
        <circle cx="216" cy="220" r="3.5" fill="#22c55e" />
        <text x="226" y="223" fill="#34d399" fontSize="9" fontFamily={mono} fontWeight="600">
          aurex.tsx
        </text>
        <text x="190" y="244" fill="#475569" fontSize="9" fontFamily={mono}>1</text>
        <text x="202" y="244" fill="#64748b" fontSize="9" fontFamily={mono}>//</text>
        <text x="214" y="244" fill="#34d399" fontSize="9" fontFamily={mono} fontWeight="600">Aurex</text>
        <text x="248" y="244" fill="#64748b" fontSize="9" fontFamily={mono}>· ship it</text>
        <text x="190" y="260" fill="#475569" fontSize="9" fontFamily={mono}>2</text>
        <text x="202" y="260" fill="#c084fc" fontSize="9" fontFamily={mono}>export const</text>
        <text x="190" y="276" fill="#475569" fontSize="9" fontFamily={mono}>3</text>
        <text x="202" y="276" fill="#fbbf24" fontSize="9" fontFamily={mono} fontWeight="600">AurexApp</text>
        <text x="248" y="276" fill="#e2e8f0" fontSize="9" fontFamily={mono}>= () =&gt; (</text>
        <text x="190" y="292" fill="#475569" fontSize="9" fontFamily={mono}>4</text>
        <text x="206" y="292" fill="#f472b6" fontSize="9" fontFamily={mono}>&lt;AurexStack</text>
        <text x="190" y="308" fill="#475569" fontSize="9" fontFamily={mono}>5</text>
        <text x="214" y="308" fill="#34d399" fontSize="9" fontFamily={mono}>ship</text>
        <text x="190" y="324" fill="#475569" fontSize="9" fontFamily={mono}>6</text>
        <text x="206" y="324" fill="#f472b6" fontSize="9" fontFamily={mono}>/&gt;</text>
        <text x="190" y="340" fill="#475569" fontSize="9" fontFamily={mono}>7</text>
        <text x="202" y="340" fill="#e2e8f0" fontSize="9" fontFamily={mono}>);</text>
        <path className="home-about__scan" d="M186 348 H294" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.65" />
        <rect className="home-about__cursor" x="210" y="352" width="7" height="13" rx="1" fill="#34d399" />
        <path d="M222 418 L258 418 L264 436 L216 436 Z" fill="#0a0a0c" stroke={`url(#${uid}-em)`} strokeWidth="1" strokeOpacity="0.55" />
      </g>

      <g className="home-about__float home-about__mobile">
        <path d="M128 400 L182 427 L182 497 L128 524 L74 497 L74 427 Z" fill="#050506" stroke={`url(#${uid}-em)`} strokeWidth="1.5" strokeOpacity="0.9" />
        <path d="M128 400 L182 427 L128 454 L74 427 Z" fill={`url(#${uid}-em)`} fillOpacity="0.24" />
        <path d="M96 442 L160 442 L160 506 L96 506 Z" fill="#030712" stroke="#1e293b" strokeWidth="0.8" />
        <rect x="102" y="450" width="52" height="7" rx="2" fill="#10b981" fillOpacity="0.4" />
        <rect x="102" y="462" width="48" height="3" rx="1" fill="#334155" />
        <rect x="102" y="470" width="40" height="3" rx="1" fill="#334155" />
        <rect x="102" y="484" width="52" height="14" rx="4" fill="#10b981" fillOpacity="0.28" stroke="#34d399" strokeWidth="0.8" />
        <text x="128" y="494" textAnchor="middle" fill="#34d399" fontSize="7.5" fontFamily={mono} fontWeight="600">
          Launch
        </text>
      </g>

      <g className="home-about__float home-about__deploy">
        <path d="M348 418 L402 444 L402 480 L348 506 L294 480 L294 444 Z" fill="#050508" stroke={`url(#${uid}-em)`} strokeWidth="1.2" strokeOpacity="0.75" />
        <path d="M348 418 L402 444 L348 470 L294 444 Z" fill={`url(#${uid}-em)`} fillOpacity="0.16" />
        <path d="M348 442 L362 450 L362 466 L348 474 L334 466 L334 450 Z" fill="#10b981" fillOpacity="0.18" stroke="#34d399" strokeWidth="1" />
        <path d="M340 456 L346 462 L356 450" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="348" y="492" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily={mono} fontWeight="600">
          CI/CD
        </text>
      </g>

      <g className="home-about__orb home-about__orb--2 home-about__shield">
        <path d="M88 325 L106 316 L124 325 L124 348 C124 360 106 368 106 368 C106 368 88 360 88 348 Z" fill="#06060a" stroke={`url(#${uid}-vi)`} strokeWidth="1.2" strokeOpacity="0.8" />
        <path d="M98 342 L104 348 L116 334" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="home-about__orb home-about__orb--1">
        <rect x="358" y="132" width="50" height="22" rx="4" fill="#06080f" stroke={`url(#${uid}-bl)`} strokeWidth="1" strokeOpacity="0.7" />
        <text x="366" y="147" fill="#60a5fa" fontSize="9" fontFamily={mono} fontWeight="600">REST</text>
      </g>

      <g className="home-about__orb home-about__orb--3">
        <circle cx="68" cy="405" r="5" fill="#34d399" />
      </g>
      <g className="home-about__orb home-about__orb--4">
        <circle cx="418" cy="275" r="4" fill="#60a5fa" />
      </g>
    </>
  );
}
