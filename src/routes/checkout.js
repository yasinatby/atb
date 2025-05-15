import express from "express";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const prisma = new PrismaClient();

// Transporter für E-Mails (nutze z.B. Gmail, Sendinblue, etc.)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

router.post("/", async (req, res) => {
  const { customer, cartItems } = req.body;

  try {
    const order = await prisma.order.create({
      data: {
        email: customer.email,
        name: `${customer.firstName} ${customer.lastName}`,
        address: `${customer.address}, ${customer.zip} ${customer.city}, ${customer.country}`,
        items: {
          create: cartItems.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
          }))
        }
      },
      include: { items: true }
    });

    // Email-Inhalt
    const mailOptions = {
      from: `"ATABUY" <${process.env.EMAIL_FROM}>`,
      to: customer.email,
      subject: `Deine Bestellung bei ATABUY (#${order.id})`,
      text: `Danke für deine Bestellung, ${customer.firstName}!\n\nBestellnummer: #${order.id}\n\nWir bearbeiten deine Bestellung und melden uns bald.\n\nTeam ATABUY`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Bestellung gespeichert", orderId: order.id });
  } catch (err) {
    console.error("❌ Fehler bei Bestellung:", err);
    res.status(500).json({ error: "Fehler beim Speichern der Bestellung" });
  }
});

export default router;
