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

function getBotReply(input) {
  const q = input.toLowerCase().trim();

  if (/service|website|app|develop|build/.test(q)) {
    return {
      text: "We deliver custom websites, web applications, mobile apps, cloud/DevOps, and security. Explore details on our Services page.",
      link: { label: "View services", to: "/services" },
    };
  }
  if (/price|cost|budget|plan|₹|rupee/.test(q)) {
    return {
      text: "Plans start from project-based and dedicated-team engagements in INR. See indicative pricing and FAQs on our Plans page.",
      link: { label: "See pricing", to: "/pricing" },
    };
  }
  if (/portfolio|work|project|client/.test(q)) {
    return {
      text: "We've shipped work across pharma, FMCG, fintech, fitness, and more—with live links on our portfolio.",
      link: { label: "View portfolio", to: "/portfolio" },
    };
  }
  if (/career|job|hiring|join|vacancy/.test(q)) {
    return {
      text: "We're hiring in Indore for React, full-stack, mobile, and delivery roles. Open positions are listed on Careers.",
      link: { label: "Open roles", to: "/careers" },
    };
  }
  if (/contact|email|phone|call|reach/.test(q)) {
    return {
      text: `Reach us at ${COMPANY.email} or ${COMPANY.phone}. Or send a brief via the contact form—we reply within one business day.`,
      link: { label: "Contact form", to: "/contact" },
    };
  }
  if (/hour|time|ist|open/.test(q)) {
    return {
      text: `Business hours: ${COMPANY.hours}. We're based in ${COMPANY.location}.`,
      link: { label: "Get directions", href: COMPANY.mapDirectionsUrl },
    };
  }
  if (/hello|hi|hey|namaste/.test(q)) {
    return {
      text: "Hello! How can we help with your website or application project today?",
      link: null,
    };
  }

  return {
    text: "Thanks for your message. For a tailored answer, use the contact form or email us—our team replies within one business day.",
    link: { label: "Start a project", to: "/contact" },
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
