// File: src/pages/ShopPage.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />

      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Produkte</h1>
          <p className="text-lg">
            🛒 Warenkorb:{" "}
            <span className="font-semibold">{cartItems.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold mb-4">{product.price.toFixed(2)} €</p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  addToCart(product);
                  setAdded(product.id);
                  setTimeout(() => setAdded(null), 1200);
                }}
                className={`w-full px-4 py-2 rounded text-white font-semibold transition-all ${
                  added === product.id
                    ? "bg-green-600"
                    : "bg-black hover:bg-gray-800"
                }`}
              >
                {added === product.id ? "Hinzugefügt!" : "In den Warenkorb"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
