"use client"; // Mark this file as client-side only

import { CartProvider } from "./context/CartContext"; // Import your context

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      {children} {/* This wraps everything inside CartProvider */}
    </CartProvider>
  );
}
