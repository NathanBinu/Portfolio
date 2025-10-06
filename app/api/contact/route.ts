// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const TO_OWNER = process.env.CONTACT_TO || "nathanbinu011@gmail.com";
    const FROM = process.env.MAIL_FROM || "Nathan <onboarding@resend.dev>";

    // ✅ FIX: destructure { data, error } from Resend response
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO_OWNER],       // send to you
      replyTo: email,       // visitor's email
      subject: subject || "New message from your portfolio",
      text:
        `From: ${name} <${email}>\n` +
        `Subject: ${subject}\n\n` +
        `${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error }, { status: 502 });
    }

    // ✅ FIX: id lives at data?.id, not data.id
    return Response.json({ ok: true, id: data?.id });
  } catch (err: any) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
