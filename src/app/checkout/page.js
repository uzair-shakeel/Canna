"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const requiredFields =
      deliveryMethod === "Delivery"
        ? [
            "firstName",
            "lastName",
            "email",
            "phone",
            "address",
            "city",
            "zipCode",
          ]
        : ["firstName", "lastName", "email", "phone"];

    const isValid = requiredFields.every((field) => formData[field]);
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: Date.now(),
      items: cartItems,
      totalPrice,
      orderDate: new Date().toLocaleDateString(),
      shippingInfo: formData,
      deliveryMethod,
    };

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    savedOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(savedOrders));

    clearCart();
    router.push("/congratulations");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-light-blue-500">
        Checkout
      </h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. Please add items before proceeding to checkout.
        </p>
      ) : (
        <div className="flex gap-6">
          <div className="w-full">
            {/* Delivery Method Tabs */}
            <div className="mb-6">
              <div className="flex justify-around">
                {["Delivery", "Curbside Pickup", "In-Store Pickup"].map(
                  (method) => (
                    <button
                      key={method}
                      className={`py-2 px-4 ${
                        deliveryMethod === method
                          ? "bg-light-blue-500 text-white"
                          : "bg-gray-300 text-gray-600"
                      } rounded-lg hover:bg-light-blue-400 transition`}
                      onClick={() => setDeliveryMethod(method)}
                    >
                      {method}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full py-2 px-4 rounded-lg border"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full py-2 px-4 rounded-lg border"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full py-2 px-4 rounded-lg border"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full py-2 px-4 rounded-lg border"
                required
              />

              {/* Show address fields only if Delivery is selected */}
              {deliveryMethod === "Delivery" && (
                <>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full py-2 px-4 rounded-lg border"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full py-2 px-4 rounded-lg border"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      className="w-full py-2 px-4 rounded-lg border"
                      required
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 mt-4 rounded-lg ${
                  isFormValid
                    ? "bg-green-500 text-white hover:bg-green-600 transition"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 p-6 w-2/5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
                >
                  <span className="text-white">{item.name}</span>
                  <span className="text-gray-400">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </span>
                  <span className="font-bold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold text-white">
                Total: ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
