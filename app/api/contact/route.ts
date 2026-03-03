import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  name: string;
  email: string;
  organisation?: string;
  challenge: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, organisation, challenge } = body;

  if (!name?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email?.trim() || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!challenge?.trim()) {
    return NextResponse.json({ error: "Please describe your challenge." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    // In development without a key, log and return success so the form works
    console.warn("[Contact] RESEND_API_KEY not set — skipping send");
    return NextResponse.json({
      message: "Message received. We'll be in touch within one business day.",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "2KO Website <noreply@2ko.co.za>",
    to: "info@2ko.co.za",
    replyTo: email.trim(),
    subject: `New enquiry from ${name.trim()}${organisation ? ` (${organisation.trim()})` : ""}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; color: #1a1a1a;">
        <h2 style="margin-top: 0;">New contact enquiry</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 130px;"><strong>Name</strong></td>
            <td style="padding: 8px 0;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
            <td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
          </tr>
          ${
            organisation?.trim()
              ? `<tr>
              <td style="padding: 8px 0; color: #666;"><strong>Organisation</strong></td>
              <td style="padding: 8px 0;">${organisation.trim()}</td>
            </tr>`
              : ""
          }
        </table>
        <h3 style="margin-top: 24px; margin-bottom: 8px;">Challenge</h3>
        <p style="white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 0;">
          ${challenge.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[Contact] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please email info@2ko.co.za directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message:
      "Message sent. We'll be in touch within one business day.",
  });
}
