"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  // Fetch orders from localStorage
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleBackToShop = () => {
    router.push("/"); // Navigate to home or shop page
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-blue-50 p-8">
        <h1 className="text-4xl font-bold text-center text-light-blue-500 mb-6">
          Your Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center">
            <p className="text-lg mb-4">You haven't placed any orders yet.</p>
            <button
              onClick={handleBackToShop}
              className="bg-light-blue-500 py-2 px-8 rounded-lg hover:bg-light-blue-600 transition"
            >
              Back to Shop
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Order #{order.id}
                </h2>
                <p className="text-gray-600 mb-4">
                  Placed on: {order.orderDate}
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-bold mb-2">Order Summary:</h3>
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between mb-2 items-center"
                    >
                      <span className="text-gray-800">{item.name}</span>
                      <span className="text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </span>
                      <span className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="text-right font-bold text-lg mt-4">
                    Total: ${order.totalPrice.toFixed(2)}
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">
                    Shipping Information:
                  </h3>
                  <p>
                    {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                  </p>
                  <p>{order.shippingInfo.address}</p>
                  <p>
                    {order.shippingInfo.city}, {order.shippingInfo.zipCode}
                  </p>
                  <p>Phone: {order.shippingInfo.phone}</p>
                  <p>Email: {order.shippingInfo.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
