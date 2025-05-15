import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ThankYouPage from './pages/thankyoupage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';

// ➕ NEU:
import About from './pages/about.jsx';
import Legal from './pages/legal.jsx';

import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/success/:orderId" element={<SuccessPage />} />
          
          {/* ➕ NEUE SEITEN */}
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
