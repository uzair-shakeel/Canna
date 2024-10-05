'use client'
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const NewArrivals = () => {
  const { addToCart } = useContext(CartContext); // Get the addToCart function from CartContext

  const products = [
    {
      id: 1,
      name: 'Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape',
      price: 69.99,
      image: '/new/Image1.webp',
    },
    {
      id: 2,
      name: 'Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape 2',
      price: 69.99,
      image: '/new/Image2.webp',
    },
    {
      id: 3,
      name: 'Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape 3',
      price: 69.99,
      image: '/new/Image3.webp',
    },
    {
      id: 4,
      name: 'Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape 4',
      price: 69.99,
      image: '/new/Image4.webp',
    },
  ];

  const handleAddToCart = (product) => {
    // Set initial quantity to 1 when adding the product to the cart
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="pb-24 px-[5%]">
      <h3 className="font-bold text-3xl pb-8 text-center">New Arrivals</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group h-[220px] md:h-[340px] overflow-hidden"
          >
            <img
              src={product.image}
              className="h-full w-full object-cover"
              alt={product.name}
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer -translate-y-1/2 absolute">
                <h3 className="font-semibold text-sm md:text-lg text-blue-100 w-full">
                  {product.name}
                </h3>
                <p className="text-blue-100 py-3 text-md md:text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <button
                className="bg-blue-100 w-full py-1 md:py-3 absolute bottom-0"
                onClick={() => handleAddToCart(product)} // Use the updated function to add to cart
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
