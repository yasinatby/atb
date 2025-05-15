import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("ATABUY_PRODUCTS");
    return stored ? JSON.parse(stored) : [];
  });
  const [newProduct, setNewProduct] = useState({ name:"", description:"", price:"", image:"" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("ATABUY_USER");
    if (saved) {
      const u = JSON.parse(saved);
      if (u.email && u.email !== "Gast") setUser(u);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ATABUY_PRODUCTS", JSON.stringify(products));
  }, [products]);

  if (!user) return <p className="text-center p-10">Zugriff verweigert.</p>;

  const handleChange = e => setNewProduct(p=>({...p,[e.target.name]:e.target.value}));
  const addProduct = () => { if (!newProduct.name||!newProduct.price) return; const p = { id: Date.now(), name:newProduct.name, description:newProduct.description, price:parseFloat(newProduct.price), image:newProduct.image||""}; setProducts(ps=>[...ps,p]); setNewProduct({ name:"",description:"",price:"",image:"" }); };
  const deleteProduct = id => setProducts(ps=>ps.filter(p=>p.id!==id));

  return (
    <div className="min-h-screen bg-white p-8">...</div>
  );
}