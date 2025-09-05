import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: { name: name, email: "your_verified_brevo_email@example.com" },
        replyTo: { email: email, name: name },
        to: [{ email: "dnyaneshsb20@gmail.com" }],
        subject: "New Message from Portfolio Contact Form",
        htmlContent: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}