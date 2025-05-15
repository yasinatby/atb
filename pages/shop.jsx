import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const translations = {
  de: { shop: "Shop", noProducts: "Keine Produkte verfügbar.", addToCart: "In den Warenkorb", cart: "Warenkorb", emptyCart: "Dein Warenkorb ist leer.", total: "Gesamt:", checkout: "Zur Kasse gehen", checkoutTitle: "Checkout", name: "Name", email: "E-Mail", address: "Adresse", submit: "Bestellung abschicken", thanks: "Vielen Dank für deine Bestellung!", remove: "Entfernen" },
  en: { shop: "Shop", noProducts: "No products available.", addToCart: "Add to cart", cart: "Cart", emptyCart: "Your cart is empty.", total: "Total:", checkout: "Proceed to Checkout", checkoutTitle: "Checkout", name: "Name", email: "Email", address: "Address", submit: "Submit Order", thanks: "Thank you for your order!", remove: "Remove" }
};

export default function ShopPage() {
  const [lang, setLang] = useState("de");
  const t = translations[lang];

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ATABUY_PRODUCTS");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  const addToCart = (p) => setCart(c => c.find(x=>x.id===p.id)?c:[...c, { ...p, quantity: 1 }]);
  const removeFromCart = (id) => setCart(c => c.filter(x=>x.id!==id));
  const total = cart.reduce((s,i) => s + i.price*(i.quantity||1), 0).toFixed(2);

  const handleFormChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setCart([]); setForm({ name:"", email:"", address:"" }); setShowCheckout(false); };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 text-white">
      <Header lang={lang} setLang={setLang} />...
    </>
  );
}