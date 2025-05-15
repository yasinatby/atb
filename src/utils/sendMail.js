import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendOrderConfirmation(email, orderId) {
  const info = await transporter.sendMail({
    from: '"ATABUY" <no-reply@atabuy.de>',
    to: email,
    subject: "Bestellbestätigung",
    html: `
      <h2>Danke für deine Bestellung bei ATABUY!</h2>
      <p>Deine Bestellnummer lautet: <strong>#${orderId}</strong></p>
      <p>Wir senden dir bald die Versanddetails zu.</p>
    `
  });

  console.log("📨 E-Mail gesendet:", info.messageId);
}
