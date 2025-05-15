// File: src/pages/AdminPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";

export default function AdminPage() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = prompt("Admin-Token eingeben:");
    try {
      const res = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setMessage("Produkt erfolgreich hinzugefügt.");
        setForm({ name: "", description: "", price: "" });
      } else {
        const error = await res.json();
        setMessage(`Fehler: ${error.error}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("Netzwerkfehler.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header />
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow rounded">
        <h1 className="text-3xl font-bold mb-4">Produkt hinzufügen</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
          <input name="description" value={form.description} onChange={handleChange} placeholder="Beschreibung" className="w-full p-2 border rounded" required />
          <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Preis (€)" className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Hinzufügen</button>
        </form>
        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}
      </div>
    </div>
  );
}
