"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CongratulationsPage = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/"); // Navigate to home page
  };

  const handleCheckOrder = () => {
    router.push("/orders"); // Navigate to the user's orders page (replace this with your actual order page route)
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-500">
          Congratulations!
        </h1>
        <p className="text-lg mb-8">Your order has been placed successfully.</p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleHome}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Go to Home
          </button>
          <button
            onClick={handleCheckOrder}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Check Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPage;
