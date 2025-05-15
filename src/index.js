import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/products.js";
import checkoutRouter from "./routes/checkout.js"; // ✅ NEU
import stripeRouter from "./routes/stripe.js";


dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Routen
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/checkout", checkoutRouter); // ✅ NEU
app.use("/api/stripe", stripeRouter);


// Health-Check
app.get("/api/health", (req, res) => res.json({ status: "OK" }));

// Fehlerbehandlung
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
