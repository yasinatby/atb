import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();
const { hash, compare } = bcrypt;
const { JWT_SECRET } = process.env;


router.post("/register", async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    const hashed = await hash(password, 10);
    const user = await prisma.user.create({ data: { email, password: hashed, role: role || 'CUSTOMER' } });
    res.json({ id: user.id, email: user.email, role: user.role });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });
    const valid = await compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

export default router;