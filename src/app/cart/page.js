"use client";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Adjust path
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext); // Use context directly
  const router = useRouter(); // Router for redirect

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateCartItemQuantity(id, newQuantity); // Update directly in context
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    router.push("/checkout"); // Redirect to checkout page
  };

  return (
    <div>
      <div className="p-8 bg-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-light-blue-500">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 mx-4">
                  <h2 className="text-xl font-semibold text-light-blue-500 text-white">
                    {item.name}
                  </h2>
                  <p className="text-md text-gray-400">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="bg-gray-600 text-white py-1 px-3 rounded-lg hover:bg-gray-700 transition"
                    >
                      -
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-600 text-white py-1 px-3 rounded-lg hover:bg-gray-700 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-8">
              <h3 className="text-2xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h3>
              <button
                onClick={handleCheckout}
                className="bg-light-blue-500 py-2 px-8 rounded-lg hover:bg-light-blue-600 transition mt-4"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
