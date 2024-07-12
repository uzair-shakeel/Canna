"use client";
import { useState } from "react";

const AgeVerification = ({ onVerify }) => {
  const handleVerify = (isAdult) => {
    if (isAdult) {
      onVerify(true);
    } else {
      alert("You must be at least 21 years old to enter this site.");
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage: "url('/verifcationBG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/30 border border-white backdrop-blur-lg text-white p-14 rounded-lg shadow-lg">
        <h2 className="mb-14 text-lg font-bold">
          Are you at least 21 years old?
        </h2>
        <div className="flex justify-around">
          <button
            onClick={() => handleVerify(true)}
            className="bg-blue-500 text-white p-2 rounded w-24"
          >
            Yes
          </button>
          <button
            onClick={() => handleVerify(false)}
            className="bg-black text-white p-2 rounded w-24"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
