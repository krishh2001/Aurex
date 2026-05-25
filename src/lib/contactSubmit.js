import { COMPANY } from "../data/company";

const FORMSPREE = "https://formspree.io/f/xeedlbzp";
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || FORMSPREE;
const AUREX_API =
  import.meta.env.VITE_CONTACT_API_URL?.trim() || "/api/contact";

/** Branded Aurex HTML email via Resend (requires RESEND_API_KEY on server) */
async function submitViaAurexApi(data) {
  try {
    const res = await fetch(AUREX_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json().catch(() => ({}));

    if (res.ok) {
      return { ok: true, method: "aurex" };
    }

    if (res.status === 503) {
      return { ok: false, reason: "no-resend" };
    }

    throw new Error(json.error || "Could not send message");
  } catch (err) {
    if (err instanceof TypeError) {
      return { ok: false, reason: "network" };
    }
    throw err;
  }
}

/** Plain Formspree email — only used if Resend is not configured */
async function submitViaFormspree(data) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message.trim());
  if (data.company?.trim()) formData.append("company", data.company.trim());
  if (data.phone?.trim()) formData.append("phone", data.phone.trim());
  if (data.service?.trim()) formData.append("service", data.service.trim());
  formData.append("_subject", `Project inquiry from ${data.name}`);
  formData.append("_replyto", data.email);

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      err.error || `Could not send message. Email us at ${COMPANY.email}`
    );
  }

  return { ok: true, method: "formspree" };
}

/** @param {{ name: string, email: string, company?: string, phone?: string, service?: string, message: string }} data */
export async function submitContactForm(data) {
  const aurex = await submitViaAurexApi(data);
  if (aurex.ok) {
    return { method: aurex.method };
  }

  const fs = await submitViaFormspree(data);
  return { method: fs.method, fallback: true };
}

export function hasContactApiEndpoint() {
  return true;
}
