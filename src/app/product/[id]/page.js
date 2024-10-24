// pages/product/[id].js
"use client";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter for navigation
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext"; // Make sure the path is correct

const ProductDetail = () => {
  const pathname = usePathname();
  const router = useRouter(); // useRouter hook to navigate to the cart page
  const id = pathname.split("/").pop(); // Get the last part
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 4,
      name: "50mg THC Mini Syrup (Bottle)",
      price: 50,
      quantity: 1,
      description:
        "Our 50mg THC Pot Shot is a convenient, water-soluble 2oz shot, perfect for a quick and potent experience with fast-acting effects.",
      images: [
        "/products/IMG-20241009-WA0043.jpg", // Replace these with actual image paths
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
        "/products/IMG-20241009-WA0038.jpg", // Replace these with actual image paths
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
        "/products/IMG-20241009-WA0036.jpg", // Replace these with actual image paths
        "/products/IMG-20241009-WA0037.jpg",
        "/products/IMG-20241009-WA0035.jpg",
      ],
    },
    {
      id: 1,
      name: "15mg Delta 9 Vegan Ropes Clustered (3 pcs)",
      price: 30,
      image: "/products/Nerd rope_page-0001.jpg",
      quantity: 1,
      description:
        "Our take on the classic Nerds Rope, these 50mg THC Ropes offer a high-dose, fun, and flavorful option for a potent and nostalgic experience.",
      images: [
        "/products/Nerd rope_page-0001.jpg",
        "/products/Nerd rope copy_page-0001.jpg",
        "/products/Nerd rope copy_page-0002.jpg",
        "/products/IMG-20241009-WA0032.jpg", // Replace these with actual image paths
        "/products/IMG-20241009-WA0033.jpg",
      ],
    },
  ];

  const product = products.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track if product is added to cart

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true); // Set state when product is added
  };

  const handleGoToCart = () => {
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:flex">
      {/* Image Gallery */}
      <div className="md:w-1/2 flex">
        <div className="flex flex-col items-start justify-start space-y-3 w-[15%]">
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
        <div className="h-[400px] w-[85%]">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 h-[400px] flex flex-col justify-between md:pl-10 mt-10 md:mt-0">
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-xl font-light mb-5">{product.description}</p>
        </div>
        <div className="space-y-8">
          <p className="text-2xl font-semibold text-gray-700 mb-5">
            ${product.price.toFixed(2)}
          </p>

          {/* Conditionally render buttons based on whether product is added to cart */}
          {isAddedToCart ? (
            <button
              className="bg-black hover:bg-black/90 duration-150 text-white w-full py-3 rounded-md"
              onClick={handleGoToCart}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="bg-[#3dc2c5] hover:bg-[#2ea4a6] duration-150 text-white w-full py-3 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
