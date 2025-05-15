import React from "react";
import { Link } from "react-router-dom";


export default function Header({ lang, setLang, isAdmin }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-lg font-bold">ATABUY</Link>
          <Link to="/shop" className="text-sm text-gray-600 hover:text-black">Shop</Link>
          <Link to="/about" className="text-sm text-gray-600 hover:text-black">Über uns</Link>
          <Link to="/legal" className="text-sm text-gray-600 hover:text-black">AGB</Link>

          {isAdmin && (
            <Link to="/admin" className="text-sm text-gray-600 hover:text-black">Admin</Link>
          )}
        </div>
        <div className="space-x-2">
          <button onClick={() => setLang("de")} className={lang==="de" ? "font-bold" : "text-gray-600"}>DE</button>
          <button onClick={() => setLang("en")} className={lang==="en" ? "font-bold" : "text-gray-600"}>EN</button>
        </div>
      </div>
    </header>
  );
}