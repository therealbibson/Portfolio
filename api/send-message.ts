// Vercel Serverless Function: POST /api/send-message
//
// Delivers contact-form messages via Brevo (Transactional API).
// The Brevo API key lives ONLY in server-side environment variables
// (BREVO_API_KEY, set in the Vercel dashboard) — it is never exposed
// to the browser, and the frontend never talks to Brevo directly.
//
// Required server env vars (Vercel dashboard -> Settings -> Environment Variables):
//   BREVO_API_KEY       — Brevo API key (Settings -> SMTP & API -> API Keys)
//   BREVO_SENDER_EMAIL  — optional, defaults to uabeeb3@gmail.com.
//                         This address must be a verified sender in Brevo
//                         (Settings -> Senders & IP -> Senders).
//
// Local testing: run `vercel dev` (not `vite dev`) so /api/* is served,
// with BREVO_API_KEY set in your local environment.

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = (req.body ?? {}) as ContactPayload;
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!isNonEmptyString(name) || name.length > 100) {
    return res.status(400).json({ error: 'Please provide your name.' });
  }
  if (!isValidEmail(email) || email.length > 254) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (!isNonEmptyString(message) || message.length > 5000) {
    return res.status(400).json({ error: 'Please write a message.' });
  }
  if (subject.length > 200) {
    return res.status(400).json({ error: 'Subject is too long.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service is not configured yet.' });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'uabeeb3@gmail.com';
  const emailSubject = subject || `New Portfolio Message from ${name}`;
  const textBody = [
    `New message from your portfolio contact form.`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${emailSubject}`,
    ``,
    message,
  ].join('\n');
  // Branded HTML email — table layout with inline styles, so it renders
  // consistently across email clients. Matches the portfolio: deep teal
  // (#0f3d3e) header with the UA. brand, warm off-white background,
  // white card, and a reply button. All visitor content is escaped.
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${emailSubject}`)}`;
  const htmlBody = [
    `<!DOCTYPE html><html><body style="margin:0;padding:0;background-color:#f7f5f0;font-family:Arial,Helvetica,sans-serif;">`,
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f5f0;padding:24px 12px;">`,
    `<tr><td align="center">`,
    `<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #e7e0d3;border-radius:12px;overflow:hidden;">`,
    // Header — deep teal with UA. brand
    `<tr><td style="background-color:#0f3d3e;padding:24px 28px;">`,
    `<p style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:-0.5px;">UA<span style="color:#7fb5b3;">.</span></p>`,
    `<p style="margin:6px 0 0;color:#c8ddd9;font-size:13px;">New message from your portfolio contact form</p>`,
    `</td></tr>`,
    // Body — sender details
    `<tr><td style="padding:28px;">`,
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">`,
    `<tr><td style="padding:6px 0;font-size:14px;color:#556662;">Name</td><td style="padding:6px 0;font-size:14px;color:#1e2a28;font-weight:bold;">${escapeHtml(name)}</td></tr>`,
    `<tr><td style="padding:6px 0;font-size:14px;color:#556662;">Email</td><td style="padding:6px 0;font-size:14px;color:#1e2a28;font-weight:bold;"><a href="mailto:${escapeHtml(email)}" style="color:#0f3d3e;">${escapeHtml(email)}</a></td></tr>`,
    `<tr><td style="padding:6px 0;font-size:14px;color:#556662;">Subject</td><td style="padding:6px 0;font-size:14px;color:#1e2a28;font-weight:bold;">${escapeHtml(emailSubject)}</td></tr>`,
    `</table>`,
    // Message
    `<p style="margin:24px 0 8px;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#0f3d3e;">Message</p>`,
    `<div style="background-color:#f7f5f0;border:1px solid #e7e0d3;border-radius:8px;padding:16px 18px;font-size:14px;line-height:1.6;color:#1e2a28;">${escapeHtml(message).replace(/\n/g, '<br />')}</div>`,
    // Reply button
    `<p style="margin:24px 0 0;text-align:center;"><a href="${replyHref}" style="display:inline-block;background-color:#0f3d3e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 28px;border-radius:8px;">Reply to ${escapeHtml(name)}</a></p>`,
    `<p style="margin:16px 0 0;font-size:12px;color:#556662;text-align:center;">Replying goes straight to the sender — no need to copy their address.</p>`,
    `</td></tr>`,
    // Footer
    `<tr><td style="padding:16px 28px;border-top:1px solid #e7e0d3;">`,
    `<p style="margin:0;font-size:12px;color:#556662;">Sent from <a href="https://usmanabeeb.vercel.app/" style="color:#0f3d3e;">usmanabeeb.vercel.app</a> &middot; Usman Abeeb, Full-Stack Developer</p>`,
    `</td></tr>`,
    `</table>`,
    `</td></tr>`,
    `</table>`,
    `</body></html>`,
  ].join('');

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'Portfolio Contact Form' },
        to: [{ email: senderEmail, name: 'Usman Abeeb' }],
        replyTo: { email, name },
        subject: emailSubject,
        textContent: textBody,
        htmlContent: htmlBody,
      }),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text().catch(() => '');
      console.error('Brevo API error:', brevoResponse.status, errorText);
      return res.status(502).json({ error: 'Email service could not deliver the message.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Brevo request failed:', error);
    return res.status(502).json({ error: 'Email service could not deliver the message.' });
  }
}
