import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form handler — Brevo (Transactional Email API).
 *
 * Uses raw `fetch` against `https://api.brevo.com/v3/smtp/email` so this
 * route is portable to any runtime (Node, edge, Cloudflare Workers /
 * Pages Functions). No SDK dependency.
 *
 * Env vars (set in your hosting platform — Cloudflare Pages / Workers):
 *   BREVO_API_KEY     (required)  — https://app.brevo.com/settings/keys/api
 *   CONTACT_TO_EMAIL  (optional)  — defaults to "info@2ko.co.za"
 *   BREVO_FROM_EMAIL  (optional)  — defaults to "noreply@2ko.co.za"
 *                                    (must be a verified sender in Brevo)
 *   BREVO_FROM_NAME   (optional)  — defaults to "2KO Website"
 */

// Runs inside the Cloudflare Worker via @opennextjs/cloudflare — no
// explicit `runtime = "edge"` needed (and declaring it actually breaks
// the OpenNext bundler). Uses only fetch + Web APIs so it's portable.

interface ContactBody {
  name: string;
  email: string;
  organisation?: string;
  enquiryType?: string;
  challenge: string;
  website?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

// In-memory rate-limit. Note: on Cloudflare Workers this is per-isolate
// (so loosely effective for one region); for a strict global limit, swap
// for Cloudflare KV / Durable Objects later.
const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, number[]>();

function getClientIp(req: NextRequest) {
  // Cloudflare sets CF-Connecting-IP; standard proxies use x-forwarded-for.
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.headers.get("x-real-ip");
  return realIp?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const attempts = requestLog.get(ip) ?? [];
  const recentAttempts = attempts.filter((ts) => ts > windowStart);

  // Opportunistic cleanup to avoid unbounded memory growth.
  for (const [key, timestamps] of requestLog.entries()) {
    const active = timestamps.filter((ts) => ts > windowStart);
    if (active.length === 0) {
      requestLog.delete(key);
    } else if (active.length !== timestamps.length) {
      requestLog.set(key, active);
    }
  }

  if (recentAttempts.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(ip, recentAttempts);
    return true;
  }

  recentAttempts.push(now);
  requestLog.set(ip, recentAttempts);
  return false;
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, organisation, enquiryType, challenge, website } = body;
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  if (website?.trim()) {
    // Honeypot field populated. Return generic success to avoid signalling.
    return NextResponse.json({
      message: "Message received. We'll be in touch if follow-up is required.",
    });
  }

  if (!name?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email?.trim() || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!challenge?.trim()) {
    return NextResponse.json({ error: "Please describe your challenge." }, { status: 400 });
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim();
  const normalizedOrganisation = organisation?.trim() ?? "";
  const normalizedEnquiryType = enquiryType?.trim() ?? "";
  const normalizedChallenge = challenge.trim();
  const headerSafeName = sanitizeHeaderValue(normalizedName);
  const headerSafeOrg = sanitizeHeaderValue(normalizedOrganisation);

  const safeName = escapeHtml(normalizedName);
  const safeEmail = escapeHtml(normalizedEmail);
  const safeOrganisation = normalizedOrganisation ? escapeHtml(normalizedOrganisation) : "";
  const safeEnquiryType = normalizedEnquiryType ? escapeHtml(normalizedEnquiryType) : "";
  const safeChallenge = escapeHtml(normalizedChallenge);

  if (!process.env.BREVO_API_KEY) {
    console.warn("[Contact] BREVO_API_KEY not set");

    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "Contact form is temporarily unavailable. Please email info@2ko.co.za directly.",
        },
        { status: 503 }
      );
    }

    // In dev with no key: pretend success so the front-end UX works.
    return NextResponse.json({
      message: "Message received. We'll be in touch within one business day.",
    });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@2ko.co.za";
  const fromEmail = process.env.BREVO_FROM_EMAIL ?? "noreply@2ko.co.za";
  const fromName = process.env.BREVO_FROM_NAME ?? "2KO Website";

  const textBody = [
    "New contact enquiry",
    `Name: ${normalizedName}`,
    `Email: ${normalizedEmail}`,
    normalizedOrganisation ? `Organisation: ${normalizedOrganisation}` : null,
    normalizedEnquiryType ? `Enquiry type: ${normalizedEnquiryType}` : null,
    "",
    "Challenge:",
    normalizedChallenge,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #1a1a1a;">
      <h2 style="margin-top: 0;">New contact enquiry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px 0; color: #666; width: 130px;"><strong>Name</strong></td>
          <td style="padding: 8px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
        </tr>
        ${
          safeOrganisation
            ? `<tr>
            <td style="padding: 8px 0; color: #666;"><strong>Organisation</strong></td>
            <td style="padding: 8px 0;">${safeOrganisation}</td>
          </tr>`
            : ""
        }
        ${
          safeEnquiryType
            ? `<tr>
            <td style="padding: 8px 0; color: #666;"><strong>Enquiry type</strong></td>
            <td style="padding: 8px 0;">${safeEnquiryType}</td>
          </tr>`
            : ""
        }
      </table>
      <h3 style="margin-top: 24px; margin-bottom: 8px;">Challenge</h3>
      <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 0;">
        ${safeChallenge}
      </p>
    </div>
  `;

  // Brevo Transactional Email API
  // Docs: https://developers.brevo.com/reference/sendtransacemail
  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: fromName, email: fromEmail },
      to: [{ email: toEmail }],
      replyTo: { email: normalizedEmail, name: headerSafeName },
      subject: `New enquiry from ${headerSafeName}${headerSafeOrg ? ` (${headerSafeOrg})` : ""}`,
      textContent: textBody,
      htmlContent: htmlBody,
    }),
  });

  if (!brevoRes.ok) {
    let detail: unknown = null;
    try {
      detail = await brevoRes.json();
    } catch {
      detail = await brevoRes.text().catch(() => null);
    }
    console.error("[Contact] Brevo error:", brevoRes.status, detail);
    return NextResponse.json(
      { error: "Failed to send message. Please email info@2ko.co.za directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Message sent. We'll be in touch within one business day.",
  });
}
