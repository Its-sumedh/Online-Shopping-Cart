// src/pages/Layout.jsx
import React from "react";
import { CartProvider } from "../context/cart-context";



// In Vite, you can use Google Fonts via index.html or @import in CSS
// Example: add in index.html -> <link href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&display=swap" rel="stylesheet">
// Then use className in Tailwind or CSS, not via next/font

export default function Layout({ children }) {
  return (
    <CartProvider>
      <div className="antialiased">{children}</div>
    </CartProvider>
  );
}
