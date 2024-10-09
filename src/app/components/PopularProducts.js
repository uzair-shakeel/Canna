import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PopularProducts = ({ name, order }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const router = useRouter();

  const products = [
    {
      id: 4,
      name: "50mg THC Mini Syrup (Bottle)",
      price: 50,
      quantity: 1,
      description:
        "Our 50mg THC Pot Shot is a convenient, water-soluble 2oz shot, perfect for a quick and potent experience with fast-acting effects.",
      images: [
        "/products/IMG-20241009-WA0043.jpg",
        "/products/IMG-20241009-WA0042.jpg",
        "/products/IMG-20241009-WA0044.jpg",
      ],
    },
    {
      id: 3,
      name: "10mg D9 Vegan Cubes (30 pcs)",
      price: 40,
      image: "/products/IMG-20241009-WA0038.jpg",
      quantity: 1,
      description:
        "Our classic 10mg THC Gummies, the most popular in our lineup, deliver a mild high with a perfect blend of flavor and consistency for an enjoyable experience.",
      images: [
        "/products/IMG-20241009-WA0038.jpg",
        "/products/IMG-20241009-WA0040.jpg",
        "/products/IMG-20241009-WA0039.jpg",
        "/products/IMG-20241009-WA0041.jpg",
      ],
    },
    {
      id: 2,
      name: "15mg Delta 9 Cube Cluster (20 pcs)",
      price: 35,
      image: "/products/IMG-20241009-WA0036.jpg",
      quantity: 1,
      description:
        "As a unique product in your lineup, our 15mg. THC Clusters feature a delightful crunchy exterior and chewy interior, delivering a balanced and robust dose to enhance your offerings.",
      images: [
        "/products/IMG-20241009-WA0036.jpg",
        "/products/IMG-20241009-WA0037.jpg",
        "/products/IMG-20241009-WA0035.jpg",
      ],
    },
    {
      id: 1,
      name: "15mg Delta 9 Vegan Ropes Clustered (3 pcs)",
      price: 60,
      image: "/products/IMG-20241009-WA0032.jpg",
      quantity: 1,
      description:
        "Our take on the classic Nerds Rope, these 50mg THC Ropes offer a high-dose, fun, and flavorful option for a potent and nostalgic experience.",
      images: [
        "/products/IMG-20241009-WA0032.jpg",
        "/products/IMG-20241009-WA0033.jpg",
        "/products/IMG-20241009-WA0034.jpg",
      ],
    },
  ];

  // Sort products based on the order prop
  const sortedProducts = [...products].sort((a, b) => {
    if (order === "price-asc") {
      return a.price - b.price; // Ascending order by price
    } else if (order === "price-desc") {
      return b.price - a.price; // Descending order by price
    } else if (order === "name-asc") {
      return a.name.localeCompare(b.name); // Ascending order by name
    } else if (order === "name-desc") {
      return b.name.localeCompare(a.name); // Descending order by name
    }
    return 0; // Default order if no order is specified
  });

  return (
    <div className="py-24 px-[5%]">
      <h3 className="font-bold text-3xl pb-8 text-center">{name}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sortedProducts.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="relative group h-[220px] md:h-[340px] overflow-hidden"
            >
              <img
                src={product.images[0]}
                className="h-full w-full object-cover"
                alt={product.name}
              />

              <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
                <Link href={`/product/${product.id}`}>
                  <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
                  <div className="top-1/2 -translate-x-1/2 text-center p-5 w-full left-1/2 cursor-pointer -translate-y-1/2 absolute">
                    <h3 className="font-semibold text-sm md:text-lg text-blue-100 w-full">
                      {product.name}
                    </h3>
                    <p className="text-blue-100 py-3 text-md md:text-3xl font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
                {/* Button logic */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
