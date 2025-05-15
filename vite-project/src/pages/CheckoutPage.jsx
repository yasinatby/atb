// File: src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "DE"
  });
  const { cartItems, clearCart } = useCart();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStripeCheckout = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, customer: formData }) // 🟢 Sendet Kunde mit
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Stripe-Verbindung fehlgeschlagen.");
      }
    } catch (error) {
      console.error("Stripe-Fehler:", error);
      alert("Fehler bei der Stripe-Zahlung.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer: formData, cartItems })
      });

      if (!res.ok) throw new Error("Fehler beim Checkout");

      const data = await res.json();
      console.log("✅ Bestellung erfolgreich:", data);

      clearCart();
      alert("✅ Bestellung erfolgreich! Danke für deinen Einkauf.");
    } catch (error) {
      console.error("❌ Checkout fehlgeschlagen:", error);
      alert("Fehler beim Abschicken der Bestellung.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Kasse</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Vorname"
              className="border p-2 w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nachname"
              className="border p-2 w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="border p-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Adresse"
            className="border p-2 w-full"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className="flex gap-4">
            <input
              type="text"
              name="city"
              placeholder="Stadt"
              className="border p-2 w-full"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="PLZ"
              className="border p-2 w-full"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="DE">Deutschland</option>
            <option value="AT">Österreich</option>
            <option value="CH">Schweiz</option>
          </select>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleStripeCheckout}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800"
            >
              Mit Stripe bezahlen
            </button>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Nur Bestellung speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
