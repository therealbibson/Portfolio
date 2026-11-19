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
  const htmlBody = [
    `<p>New message from your portfolio contact form.</p>`,
    `<p><strong>Name:</strong> ${escapeHtml(name)}<br />`,
    `<strong>Email:</strong> ${escapeHtml(email)}<br />`,
    `<strong>Subject:</strong> ${escapeHtml(emailSubject)}</p>`,
    `<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
  ].join('\n');

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
