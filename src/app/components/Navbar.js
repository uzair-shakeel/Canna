import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext"; // Adjust the path as needed

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useContext(CartContext); // Access cart items from context

  return (
    <div>
      <div className="bg-black px-[5%] md:px-[2%] py-4 flex justify-between">
        <div onClick={() => router.push('/')} className="h-14 w-14 overflow-hidden cursor-pointer">
          <img src="/logo.webp" className="h-full w-full object-cover" />
        </div>
        <div className="text-white flex items-center justify-center gap-6">
          <div className="px-4 hidden md:flex items-center py-2 text-black rounded-md bg-white">
            <input
              placeholder="Search a Product... "
              type="text"
              className="outline-none ml-2"
            />
            <button>
              <CiSearch className="font-bold cursor-pointer h-7 w-7" />
            </button>
          </div>
          {/* Cart icon with item count */}
          <div className="relative">
            <HiShoppingCart onClick={() => router.push('/cart')} className="h-6 w-6 cursor-pointer md:h-8 md:w-8" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-1">
                {cartItems.length}
              </span>
            )}
          </div>
          <FaUserAlt onClick={() => router.push('/')} className="h-6 w-6 cursor-pointer md:h-8 md:w-8" />
        </div>
      </div>
      <div className="bg-black px-[5%] pb-5 flex justify-between md:hidden">
        <div className="px-4 flex items-center justify-between w-full py-2 text-black rounded-md bg-white">
          <input
            placeholder="Search a Product... "
            type="text"
            className="outline-none ml-2"
          />
          <button>
            <CiSearch className="font-bold cursor-pointer h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
