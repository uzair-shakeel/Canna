"use client"; // Mark this file as client-side only

import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; // Import your context

export default function ClientLayout({ children }) {
  return (
    <CartProvider>
      <Navbar />
      {children} {/* This wraps everything inside CartProvider */}
    </CartProvider>
  );
}
