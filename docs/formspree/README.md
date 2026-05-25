# Branded contact emails (Aurex)

## Recommended: Resend + Vercel API (full Aurex HTML theme)

The site sends inquiries to **`/api/contact`**, which emails **aurexitsolutions@gmail.com** with a dark green Aurex layout and sends the visitor a thank-you email.

1. Create a free account at [resend.com](https://resend.com)
2. Create an API key
3. In **Vercel** → Project → **Settings** → **Environment Variables**, add:
   - `RESEND_API_KEY` = your key
   - `CONTACT_TO_EMAIL` = `aurexitsolutions@gmail.com`
   - `RESEND_FROM` = `Aurex IT Solutions <onboarding@resend.dev>` (until your domain is verified)
   - `VITE_SITE_URL` = your live site URL (for logo in email)
4. Redeploy

Local `npm run dev` still falls back to Formspree (plain email). Test branded mail on the deployed site or `vercel dev`.

Templates live in `api/lib/aurexEmail.js`.

---

## Alternative: Formspree custom templates

Branded emails for form **xeedlbzp** — paste into [Formspree](https://formspree.io) → your **Project** → **Templates** (Business plan).

## 1. Submission notification (to you)

When someone submits the contact form, you receive this email instead of the plain default.

1. **Templates** → **+ New Template** → type: **Submission notification**
2. Name: `Aurex inquiry`
3. **HTML** tab: paste contents of `submission-notification.html`
4. **CSS** tab: paste contents of `submission-notification.css`
5. **Preview** → **Deploy**
6. Open form **xeedlbzp** → **Settings** / Workflow → set notification template to **Aurex inquiry**
7. Set recipient to **aurexitsolutions@gmail.com**

Required: template must include `{{ _unsubscribe }}` (already in the HTML footer).

## 2. Auto-response (to visitor)

Thank-you email after submit (optional; needs **Autoresponse** plugin on the form).

1. New template → type: **Autoresponse**
2. Name: `Aurex thank you`
3. Paste `autoresponse.html` + `autoresponse.css`
4. Deploy, then enable **Autoresponse** on the form and select this template
5. Subject suggestion: `We received your message — Aurex IT Solutions`
6. From name: `Aurex IT Solutions`

> Custom HTML templates require a Formspree **Business** plan. On the free plan, the site still sends clean separate fields (no duplicate text in `message`) — notifications look simpler but readable.

## Form fields (website)

| Field     | Purpose              |
|-----------|----------------------|
| `name`    | Full name            |
| `email`   | Reply-to address     |
| `message` | User message only    |
| `company` | Optional             |
| `phone`   | Optional             |
| `service` | Selected service     |

Subject line is set automatically: `Project inquiry from {name}`.
