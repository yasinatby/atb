// File: src/routes/products.js
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import authenticateJWT from "../middlewares/authenticateJWT.js";

const router = Router();
const prisma = new PrismaClient();

// GET /api/products - öffentlich
router.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST /api/products - nur Admin
router.post("/", authenticateJWT, async (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
    const { name, description, price, image } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price: parseFloat(price), image }
    });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});

// PUT /api/products/:id - nur Admin
router.put("/:id", authenticateJWT, async (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
    const { name, description, price, image } = req.body;
    const updated = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, price: parseFloat(price), image }
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/products/:id - nur Admin
router.delete("/:id", authenticateJWT, async (req, res, next) => {
  try {
    if (req.user.role !== "ADMIN") return res.status(403).json({ error: "Forbidden" });
    await prisma.product.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router;
