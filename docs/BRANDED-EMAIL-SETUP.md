# Aurex branded contact emails (required setup)

**Formspree cannot send your custom HTML design** on the free plan — that is why you still see plain “Formspree” emails.

Branded dark/green **Aurex** emails use **Resend** on the server.

## 1. Get a Resend API key (free)

1. Sign up at https://resend.com  
2. **API Keys** → Create key  
3. Copy the key (`re_...`)

## 2. Local development (`localhost:5174`)

Create a file in the project root named **`.env.local`**:

```env
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=aurexitsolutions@gmail.com
RESEND_FROM=Aurex IT Solutions <onboarding@resend.dev>
VITE_SITE_URL=http://localhost:5174
```

Then **stop and restart**:

```bash
npm run dev
```

Submit the contact form again. Your inbox should show the **Aurex HTML** email (not Formspree).

## 3. Production (Vercel)

Same variables in **Vercel → Settings → Environment Variables**, then **Redeploy**.

| Variable | Value |
|----------|--------|
| `RESEND_API_KEY` | your `re_...` key |
| `CONTACT_TO_EMAIL` | `aurexitsolutions@gmail.com` |
| `RESEND_FROM` | `Aurex IT Solutions <onboarding@resend.dev>` |
| `VITE_SITE_URL` | your live site URL |

After you verify your domain on Resend, change `RESEND_FROM` to e.g. `Aurex IT Solutions <hello@yourdomain.com>`.

## How it works

- Form → `POST /api/contact` → Resend → **branded HTML** (`api/lib/aurexEmail.js`)
- If `RESEND_API_KEY` is missing → fallback **Formspree** (plain email — what you see now)
