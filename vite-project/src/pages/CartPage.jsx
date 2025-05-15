
import React from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, changeQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Warenkorb</h1>

        {cartItems.length === 0 ? (
          <p>Dein Warenkorb ist leer.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => changeQuantity(item.id, -1)} className="px-2 py-1 border">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)} className="px-2 py-1 border">+</button>
                  <span className="font-bold">{(item.price * item.quantity).toFixed(2)} €</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-sm">Entfernen</button>
                </div>
              </div>
            ))}

            <div className="text-right font-bold text-xl mt-6">Gesamt: {total.toFixed(2)} €</div>

            <div className="text-right mt-4">
              <Link to="/checkout">
                <button className="bg-green-600 text-white px-6 py-2 rounded">Zur Kasse</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
