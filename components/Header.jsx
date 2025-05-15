import React from "react";
import Link from "next/link";

export default function Header({ lang, setLang, isAdmin }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex space-x-4 items-center">
          <Link href="/"><a className="text-lg font-bold">ATABUY</a></Link>
          <Link href="/shop"><a className="text-sm text-gray-600 hover:text-black">Shop</a></Link>
          <Link href="/about"><a className="text-sm text-gray-600 hover:text-black">Über uns</a></Link>
          <Link href="/legal"><a className="text-sm text-gray-600 hover:text-black">Rechtliches</a></Link>
          <Link href="/paypal-business"><a className="text-sm text-gray-600 hover:text-black">PayPal Business</a></Link>
          {isAdmin && (
            <Link href="/admin"><a className="text-sm text-gray-600 hover:text-black">Admin</a></Link>
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