import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black px-[2%] py-4 flex justify-between">
        <div className="h-14 w-14 overflow-hidden">
          <img src="/logo.webp" className="h-full w-full object-cover" />
        </div>
        <div className="text-white flex items-center justify-center gap-6">
          <div className="px-4 flex items-center py-2 text-black rounded-md bg-white">
            <input
              placeholder="Search a Product... "
              type="text"
              className="outline-none ml-2"
            />
            <button>
              <CiSearch className="font-bold cursor-pointer h-7 w-7" />
            </button>
          </div>
          {/* <CiSearch size={25} /> */}
          <HiShoppingCart size={25} />
          <FaUserAlt size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
