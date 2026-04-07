import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // change later to your domain
      to: "belojonas810@gmail.com", // your email
      subject: "New Contact Form Message",
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
