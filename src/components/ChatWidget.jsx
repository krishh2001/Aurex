import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiCloseLine,
  RiCustomerService2Line,
  RiSendPlaneFill,
  RiArrowRightLine,
} from "react-icons/ri";
import { COMPANY } from "../data/company";

const GREETING = {
  role: "bot",
  text: `Hi! I'm the ${COMPANY.name} assistant. Ask about services, pricing, careers, or how to start a project.`,
};

const QUICK_REPLIES = [
  { id: "services", label: "Your services" },
  { id: "pricing", label: "Pricing" },
  { id: "portfolio", label: "Portfolio" },
  { id: "careers", label: "Careers" },
  { id: "contact", label: "Contact us" },
];

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[’'`"]/g, "")
    .replace(/[^a-z0-9\s/₹@.+-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const hasAny = (haystack, needles) => needles.some((n) => haystack.includes(n));

function getBotReply(input) {
  const q = normalize(input);

  // Direct navigation style questions (more "real" sounding)
  if (
    hasAny(q, [
      "how do i connect",
      "how to connect",
      "connect you",
      "connect with you",
      "talk to you",
      "get in touch",
      "contact page",
      "reach you",
      "reach out",
    ])
  ) {
    return {
      text: `You can reach ${COMPANY.name} from the Contact page. Share your requirements and we’ll reply within one business day.`,
      link: { label: "Go to Contact", to: "/contact" },
    };
  }

  if (hasAny(q, ["service", "services", "website", "websites", "web app", "app", "application", "develop", "development", "build"])) {
    return {
      text: "We deliver websites, web applications, mobile apps, cloud/DevOps, and security—end to end. Want a quick overview or should I send you the Services page?",
      link: { label: "View services", to: "/services" },
    };
  }
  if (hasAny(q, ["price", "pricing", "cost", "budget", "plan", "plans", "₹", "rupee", "inr"])) {
    return {
      text: "Sure—our starting prices and plan comparison are on the Pricing page (Project-Based, Dedicated Team, Enterprise).",
      link: { label: "See pricing", to: "/pricing" },
    };
  }
  if (hasAny(q, ["portfolio", "work", "projects", "project", "case study", "clients", "client"])) {
    return {
      text: "Here’s our portfolio with recent projects and categories. Tell me your industry and I’ll point you to the closest examples.",
      link: { label: "View portfolio", to: "/portfolio" },
    };
  }
  if (hasAny(q, ["career", "careers", "job", "jobs", "hiring", "join", "vacancy", "openings", "open roles"])) {
    return {
      text: "We’re hiring in Indore. You can see current openings and apply from the Careers page.",
      link: { label: "Open roles", to: "/careers" },
    };
  }
  if (hasAny(q, ["contact", "email", "mail", "phone", "call", "reach", "number", "connect"])) {
    return {
      text: `Reach us at ${COMPANY.email} or ${COMPANY.phone}. Or send a brief via the contact form—we reply within one business day.`,
      link: { label: "Contact form", to: "/contact" },
    };
  }
  if (hasAny(q, ["hour", "hours", "time", "ist", "open", "office hours", "timing", "timings"])) {
    return {
      text: `Business hours: ${COMPANY.hours}. We're based in ${COMPANY.location}.`,
      link: { label: "Get directions", href: COMPANY.mapDirectionsUrl },
    };
  }
  if (hasAny(q, ["hello", "hi", "hey", "namaste", "hii", "hlo"])) {
    return {
      text: "Hi! What are you looking to build—website, web app, or mobile app?",
      link: null,
    };
  }

  return {
    text:
      "I can help with services, pricing, portfolio, and careers. If you want to start a project, the fastest path is the Contact page.",
    link: { label: "Open Contact", to: "/contact" },
  };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const panelRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushBotReply = (userText) => {
    setTyping(true);
    window.setTimeout(() => {
      const reply = getBotReply(userText);
      setMessages((prev) => [
        ...prev,
        { role: "user", text: userText },
        { role: "bot", text: reply.text, link: reply.link },
      ]);
      setTyping(false);
    }, 500);
  };

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setDraft("");
    pushBotReply(trimmed);
  };

  const handleQuickReply = (id) => {
    const label = QUICK_REPLIES.find((r) => r.id === id)?.label;
    if (label) sendMessage(label);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(draft);
  };

  return (
    <div className={`chat-widget${open ? " chat-widget--open" : ""}`}>
      {open ? (
        <div
          className="chat-widget__panel"
          ref={panelRef}
          role="dialog"
          aria-label={`${COMPANY.name} chat assistant`}
        >
          <div className="chat-widget__panel-shine" aria-hidden />
          <div className="chat-widget__panel-orb chat-widget__panel-orb--tl" aria-hidden />
          <div className="chat-widget__panel-orb chat-widget__panel-orb--br" aria-hidden />
          <header className="chat-widget__header">
            <div className="chat-widget__header-main">
              <span className="chat-widget__avatar" aria-hidden>
                <span className="chat-widget__avatar-ring" />
                <RiCustomerService2Line />
                <span className="chat-widget__avatar-dot" />
              </span>
              <div className="chat-widget__header-text">
                <strong>{COMPANY.name} Assistant</strong>
                <span className="chat-widget__status">Typically replies instantly</span>
              </div>
            </div>
            <button
              type="button"
              className="chat-widget__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <RiCloseLine />
            </button>
          </header>

          <div className="chat-widget__body">
            <div className="chat-widget__messages">
              {messages.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={`chat-widget__bubble chat-widget__bubble--${msg.role}`}
                >
                  <p>{msg.text}</p>
                  {msg.link ? (
                    msg.link.href ? (
                      <a
                        href={msg.link.href}
                        className="chat-widget__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {msg.link.label} <RiArrowRightLine aria-hidden />
                      </a>
                    ) : (
                      <Link
                        to={msg.link.to}
                        className="chat-widget__link"
                        onClick={() => setOpen(false)}
                      >
                        {msg.link.label} <RiArrowRightLine aria-hidden />
                      </Link>
                    )
                  ) : null}
                </div>
              ))}
              {typing ? (
                <div
                  className="chat-widget__bubble chat-widget__bubble--bot chat-widget__typing"
                  aria-live="polite"
                >
                  <span />
                  <span />
                  <span />
                </div>
              ) : null}
              <div ref={endRef} />
            </div>

            {!typing ? (
              <div className="chat-widget__suggestions">
                <span className="chat-widget__suggestions-label">Suggested</span>
                <div className="chat-widget__quick" role="group" aria-label="Suggested questions">
                  {QUICK_REPLIES.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="chat-widget__chip"
                      onClick={() => handleQuickReply(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <footer className="chat-widget__footer">
            <form className="chat-widget__form" onSubmit={handleSubmit}>
              <label className="chat-widget__input-wrap">
                <span className="visually-hidden">Message</span>
                <input
                  type="text"
                  className="chat-widget__input"
                  placeholder="Ask about services, pricing…"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  autoComplete="off"
                />
              </label>
              <button
                type="submit"
                className="chat-widget__send"
                disabled={!draft.trim() || typing}
                aria-label="Send message"
              >
                <RiSendPlaneFill aria-hidden />
              </button>
            </form>
          </footer>
        </div>
      ) : null}

      <button
        type="button"
        className="chat-widget__fab"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        {open ? <RiCloseLine aria-hidden /> : <RiCustomerService2Line aria-hidden />}
      </button>
    </div>
  );
}
