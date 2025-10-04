// src/pages/Layout.jsx
import React from "react";
import { CartProvider } from "../context/cart-context";

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="antialiased">{children}</div>
    </CartProvider>
  );
}
