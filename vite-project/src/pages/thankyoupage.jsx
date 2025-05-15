// File: src/pages/ThankYouPage.jsx
import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

export default function ThankYouPage() {
  const location = useLocation();
  const orderId = location.state?.orderId || Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Vielen Dank für deine Bestellung!</h1>
        <p className="text-lg mb-2">Sie erhalten in Kürze Ihre Bestelldaten per Mail.</p>
        <p className="text-lg font-semibold">Bestellnummer: <span className="text-blue-600">#{orderId}</span></p>
      </div>
    </div>
  );
}
