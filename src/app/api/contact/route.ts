import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, details } = await req.json();

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Debug léger pour vérifier la configuration serveur (visible uniquement dans la console serveur)
    console.log(
      "Env keys (filtered):",
      Object.keys(process.env).filter((key) =>
        key.toUpperCase().includes("CONTACT") ||
        key.toUpperCase().includes("RESEND")
      )
    );

    const toOwner = process.env.CONTACT_EMAIL;
    const apiKey = process.env.RESEND_API_KEY;

    if (!toOwner) {
      return NextResponse.json(
        { error: "CONTACT_EMAIL non configuré." },
        { status: 500 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY non configuré côté serveur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subjectOwner = `New lead from your website from${name}`;
    const subjectSender = "Thank you for your message";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const ownerHtml = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f4; padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 24px; padding: 32px;">
          <tr>
            <td>
              <h1 style="font-size: 24px; margin: 0 0 16px; color: #111827;">New lead from your website</h1>
              <p style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                You just received a new message from the contact form on your portfolio.
              </p>

              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 4px; font-weight: 600; color: #111827;">Full name</p>
                <p style="margin: 0; color: #4b5563;">${name}</p>
              </div>

              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 4px; font-weight: 600; color: #111827;">Email</p>
                <p style="margin: 0; color: #4b5563;">${email}</p>
              </div>

              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 4px; font-weight: 600; color: #111827;">Project details</p>
                <p style="margin: 0; color: #4b5563; white-space: pre-line;">${details}</p>
              </div>

              <p style="margin: 24px 0 0; font-size: 13px; color: #9ca3af;">
                This email was generated automatically from the contact form on khalilbencherifa.com.
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    const senderHtml = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f4; padding: 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 24px; padding: 32px;">
          <tr>
            <td>
              <h1 style="font-size: 24px; margin: 0 0 16px; color: #111827;">Thank you for your message 👋</h1>
              <p style="margin: 0 0 16px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                Hi ${name},
              </p>
              <p style="margin: 0 0 16px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                Thank you for taking the time to share the details of your project. I&apos;ll get back to you shortly to discuss the best way to build your MVP or AI solution.
              </p>
              <p style="margin: 0 0 24px; color: #4b5563; font-size: 15px; line-height: 1.6;">
                Here&apos;s a quick recap of what you sent:
              </p>

              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 4px; font-weight: 600; color: #111827;">Project details</p>
                <p style="margin: 0; color: #4b5563; white-space: pre-line;">${details}</p>
              </div>

              <p style="margin: 24px 0 0; font-size: 13px; color: #9ca3af;">
                Talk soon,<br/>
                Khalil
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: `Khalil Portfolio <${fromEmail}>`,
      to: [toOwner],
      replyTo: email,
      subject: subjectOwner,
      html: ownerHtml,
    });

    await resend.emails.send({
      from: `Khalil Portfolio <${fromEmail}>`,
      to: [email],
      subject: subjectSender,
      html: senderHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}


