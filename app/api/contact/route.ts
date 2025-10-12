// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { name, email, subject, message } = await req.json();

//     const TO_OWNER = process.env.CONTACT_TO || "nathanbinu011@gmail.com";
//     const FROM = process.env.MAIL_FROM || "Nathan <onboarding@resend.dev>";

//     // ✅ FIX: destructure { data, error } from Resend response
//     const { data, error } = await resend.emails.send({
//       from: FROM,
//       to: [TO_OWNER],       // send to you
//       replyTo: email,       // visitor's email
//       subject: subject || "New message from your portfolio",
//       text:
//         `From: ${name} <${email}>\n` +
//         `Subject: ${subject}\n\n` +
//         `${message}`,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return Response.json({ ok: false, error }, { status: 502 });
//     }

//     // FIX: id lives at data?.id, not data.id
//     return Response.json({ ok: true, id: data?.id });
//   } catch (err: any) {
//     return Response.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }

// //-------------------------------------------------------------------------------------

import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY!);

// strip anything unsafe for mail headers
const clean = (s: string) => String(s || "").replace(/[<>\r\n"]/g, "").trim();

export async function POST(req: Request) {
  try {
    const { name = "", email = "", subject = "", message = "" } = await req.json();

    const TO_OWNER = process.env.CONTACT_TO || "nathanbinu011@gmail.com";

    // Pull just the email address from MAIL_FROM (it may or may not include a display name)
    const rawFromEnv = process.env.MAIL_FROM || "onboarding@resend.dev";
    const fromAddr =
      rawFromEnv.match(/<([^>]+)>/)?.[1]?.trim() || rawFromEnv.trim();

    // Use visitor's first name in the display name, but keep OUR sending address
    const firstName = clean(name).split(/\s+/)[0] || "Visitor";
    const displayName = `${firstName} via Nathan’s Portfolio`;
    const FROM = `${displayName} <${fromAddr}>`;

    // Clear, branded subject that also includes the visitor name
    const brandedSubject =
      `[Nathan’s Portfolio] ${firstName}: ${subject || "New message"}`;

    const { data, error } = await resend.emails.send({
      from: FROM,            // shows "<First> via Nathan’s Portfolio"
      to: [TO_OWNER],        // send to you
      replyTo: email,        // so you can hit Reply
      subject: brandedSubject,
      text:
        `From: ${name} <${email}>\n` +
        `Subject: ${subject}\n\n` +
        `${message}`,
      // headers: { "Reply-To": String(email).trim() }, // alternative if you prefer header-style
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error }, { status: 502 });
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (err: any) {
    console.error("CONTACT_API_ERROR", err);
    return Response.json({ ok: false, error: err?.message || "Server error" }, { status: 500 });
  }
}

