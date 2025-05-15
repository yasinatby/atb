// File: src/pages/SuccessPage.jsx
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const fakeOrderId = Math.floor(Math.random() * 900000) + 100000;

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="max-w-2xl mx-auto text-center p-12">
        <h1 className="text-4xl font-bold mb-6 text-green-700">🎉 Danke für deine Bestellung!</h1>
        <p className="text-lg mb-4">
          Du erhältst in Kürze eine E-Mail mit deinen Bestelldaten.
        </p>
        <p className="text-lg font-semibold mb-4">
          Bestellnummer: <span className="text-blue-600">#{fakeOrderId}</span>
        </p>

        <Link to="/shop">
          <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Weiter shoppen
          </button>
        </Link>
      </div>
    </div>
  );
}
