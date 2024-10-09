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
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-[#3dc2c5]">
        Checkout
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl font-medium text-gray-500">
          Your cart is empty. Please add items before proceeding to checkout.
        </p>
      ) : (
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-3/5 bg-white p-8 rounded-lg shadow-md">
            {/* Delivery Method Tabs */}
            <div className="mb-8">
              <div className="flex justify-around gap-4">
                {["Delivery", "Curbside Pickup", "In-Store Pickup"].map(
                  (method) => (
                    <button
                      key={method}
                      className={`py-3 px-6 rounded-full transition-colors ${
                        deliveryMethod === method
                          ? "bg-[#3dc2c5] text-white"
                          : "bg-gray-300 text-gray-700"
                      } hover:bg-[#3dc2c5] hover:text-white`}
                      onClick={() => setDeliveryMethod(method)}
                    >
                      {method}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                      className="w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                  isFormValid
                    ? "bg-[#ea0781] text-white hover:bg-[#c63382]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-2/5 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
                >
                  <div className="flex items-start">
                    <span className="text-gray-700 font-medium mr-3">
                      {item.quantity}x
                    </span>
                    <span className="text-gray-900">{item.name}</span>
                  </div>

                  <span className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold text-gray-900">
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
