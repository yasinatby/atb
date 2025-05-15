import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

router.post("/create-checkout-session", async (req, res) => {
  const { cartItems, customer } = req.body;

  try {
    // 1. Bestellung lokal speichern
    const order = await prisma.order.create({
      data: {
        email: customer.email,
        status: "PENDING",
        items: {
          create: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    // 2. Stripe-Session mit Weiterleitung zur /success/:id
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:5173/success/${order.id}`,
      cancel_url: "http://localhost:5173/cart",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err);
    res.status(500).json({ error: "Stripe Checkout failed" });
  }
});

export default router;
