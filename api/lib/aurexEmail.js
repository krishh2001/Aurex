function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #1f2937;width:120px;vertical-align:top;">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#10b981;">${label}</span>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #1f2937;font-size:15px;color:#f3f4f6;line-height:1.45;">
        ${value}
      </td>
    </tr>`;
}

/**
 * Branded notification to Aurex team
 */
export function buildInquiryEmail(data) {
  const { name, email, company, phone, service, message, siteUrl } = data;
  const logoUrl = `${siteUrl.replace(/\/$/, "")}/logo.png`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>New project inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#030303;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#030303;">
    <tr>
      <td align="center" style="padding:32px 16px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <img src="${escapeHtml(logoUrl)}" alt="Aurex IT Solutions" width="120" height="auto" style="display:block;margin:0 auto 12px;max-height:48px;" />
              <p style="margin:0;font-size:26px;font-weight:800;letter-spacing:0.18em;color:#10b981;">AUREX</p>
              <p style="margin:6px 0 0;font-size:13px;color:#9ca3af;">Aurex IT Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="background:linear-gradient(155deg,#161817 0%,#0a0a0a 100%);border:1px solid rgba(16,185,129,0.35);border-radius:16px;padding:28px 24px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#ffffff;">New project inquiry</h1>
              <p style="margin:0 0 24px;font-size:12px;color:#6b7280;">Website contact form · Reply to reach the client directly</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", escapeHtml(name))}
                ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#6ee7b7;text-decoration:none;">${escapeHtml(email)}</a>`)}
                ${row("Company", escapeHtml(company))}
                ${row("Phone", escapeHtml(phone))}
                ${row("Service", escapeHtml(service))}
              </table>
              <div style="margin-top:16px;padding:16px;background:rgba(16,185,129,0.1);border-left:3px solid #10b981;border-radius:0 10px 10px 0;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#10b981;">Message</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#d1d5db;white-space:pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top:24px;font-size:13px;color:#6b7280;">
              <a href="mailto:aurexitsolutions@gmail.com" style="color:#10b981;text-decoration:none;">aurexitsolutions@gmail.com</a>
              · Noida, India
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Thank-you email to the person who submitted */
export function buildThankYouEmail({ name }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Thank you</title>
</head>
<body style="margin:0;padding:0;background-color:#030303;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#030303;">
    <tr>
      <td align="center" style="padding:32px 16px 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <p style="margin:0;font-size:26px;font-weight:800;letter-spacing:0.18em;color:#10b981;">AUREX</p>
              <p style="margin:6px 0 0;font-size:13px;color:#9ca3af;">Aurex IT Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="background:linear-gradient(155deg,#161817 0%,#0a0a0a 100%);border:1px solid rgba(16,185,129,0.25);border-radius:16px;padding:28px 24px;">
              <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#ffffff;">Thanks, ${escapeHtml(name)}!</h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.55;color:#d1d5db;">
                We received your project inquiry and will reply within <strong style="color:#fff;">one business day</strong>.
              </p>
              <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#9ca3af;">
                Aurex IT Solutions delivers websites, web applications, and mobile apps for businesses in India and abroad.
              </p>
              <p style="margin:0;font-size:14px;color:#9ca3af;">
                Questions? Email
                <a href="mailto:aurexitsolutions@gmail.com" style="color:#6ee7b7;font-weight:600;text-decoration:none;">aurexitsolutions@gmail.com</a>
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding-top:20px;font-size:12px;color:#4b5563;">— Aurex IT Solutions</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
