"use client";
import React, { useState } from "react";

const ProductDetail = () => {
  const product = {
    name: "Accento - Xerjoff",
    description:
      "Accento es el epitome de la pura sofisticación: conserva un aura elegante y traviesa.",
    price: "240,000.00 CRC",
    images: [
      "/products/IMG-20241009-WA0032.jpg", // Replace these with actual image paths
      "/products/IMG-20241009-WA0036.jpg",
      "/products/IMG-20241009-WA0038.jpg",
      "/products/IMG-20241009-WA0043.jpg",
    ],
    notes: [
      { name: "Piña", image: "/notes/pineapple.jpg" },
      { name: "Almizcle", image: "/notes/musk.jpg" },
    ],
    accords: ["Iris", "Afrutado", "Almizclado"],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:flex">
      {/* Image Gallery */}
      <div className="md:w-1/2">
        <div className="h-[500px]">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-4 space-x-2">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover cursor-pointer border-2 border-gray-200"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-xl font-light mb-5">{product.description}</p>
        <p className="text-2xl font-semibold text-gray-700 mb-5">
          ₡{product.price}
        </p>
        <div className="mb-5">
          <label htmlFor="quantity" className="block font-medium mb-1">
            Quantity
          </label>
          <select
            id="quantity"
            className="border border-gray-300 rounded-md py-2 px-3"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 text-white w-full py-3 rounded-md">
          Agregar al carrito
        </button>

        {/* Product Notes */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Notas Principales:</h3>
          <div className="flex space-x-4">
            {product.notes.map((note, index) => (
              <div key={index} className="text-center">
                <img
                  src={note.image}
                  alt={note.name}
                  className="w-12 h-12 object-cover mx-auto mb-2"
                />
                <p>{note.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Accords */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Acordes:</h3>
          <div className="flex space-x-2">
            {product.accords.map((accord, index) => (
              <span
                key={index}
                className="border border-gray-300 px-3 py-1 rounded-full"
              >
                {accord}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
