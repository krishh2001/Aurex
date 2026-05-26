import { buildInquiryEmail, buildThankYouEmail } from "../api/lib/aurexEmail.js";

async function sendResend(apiKey, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Email delivery failed");
  }
}

/**
 * Send branded Aurex HTML emails via Resend.
 * @param {Record<string, string>} body
 * @param {Record<string, string | undefined>} env
 */
export async function handleContactPost(body, env) {
  const apiKey = env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return {
      status: 503,
      body: {
        error:
          "Branded email not configured. Add RESEND_API_KEY to .env.local (dev) or Vercel env vars.",
      },
    };
  }

  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const phone = body?.phone?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !phone || !message) {
    return {
      status: 400,
      body: { error: "Name, email, phone, and message are required" },
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, body: { error: "Invalid email address" } };
  }

  const to = env.CONTACT_TO_EMAIL?.trim() || "aurexitsolutions@gmail.com";
  const from =
    env.RESEND_FROM?.trim() || "Aurex IT Solutions <onboarding@resend.dev>";
  const siteUrl =
    env.VITE_SITE_URL?.trim() ||
    env.SITE_URL?.trim() ||
    "http://localhost:5174";

  const inquiryData = {
    name,
    email,
    company: body.company?.trim() || "",
    phone,
    service: body.service?.trim() || "",
    message,
    siteUrl,
  };

  try {
    await sendResend(apiKey, {
      from,
      to: [to],
      reply_to: email,
      subject: `New project inquiry — ${name}`,
      html: buildInquiryEmail(inquiryData),
    });

    try {
      await sendResend(apiKey, {
        from,
        to: [email],
        subject: "We received your message — Aurex IT Solutions",
        html: buildThankYouEmail({ name }),
      });
    } catch {
      /* visitor thank-you is optional */
    }

    return { status: 200, body: { ok: true } };
  } catch (err) {
    return {
      status: 502,
      body: {
        error: err instanceof Error ? err.message : "Could not send email",
      },
    };
  }
}
