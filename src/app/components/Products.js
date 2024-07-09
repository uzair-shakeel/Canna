"use client";
import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Best Seller");
  const [selectedTab, setSelectedTab] = useState("All Collections");

  const handleSelection = (button) => {
    setSelectedButton(button);
  };

  const menuItems = [
    "Best Seller",
    "Shop All",
    "Theme Boxes",
    "Bongs",
    "Dab Rigs",
    "Dab Tools",
    "Glass Pipes",
    "Smoking Accessories",
    "Vaporizers",
    "Brands",
  ];

  const tabData = {
    "All Collections": [
      "/Product1.avif",
      "/Product2.avif",
      "/Product3.avif",
      "/Product4.avif",
      "/Product5.avif",
      "/Product6.avif",
      "/Product7.avif",
      "/Product8.avif",
    ],
    "Theme Boxes": [
      "/Theme1.avif",
      "/Theme2.avif",
      "/Theme3.avif",
      "/Theme4.avif",
      "/Theme5.avif",
      "/Theme6.avif",
      "/Theme7.avif",
      "/Theme8.avif",
    ],
    "Made By CannaMiami": [
      "/Product1.avif",
      "/Product3.avif",
      "/Product5.avif",
      "/Product7.avif",
    ],
  };

  return (
    <div>
      <h2 className="font-bold text-3xl py-8 text-center ">
        Featured Collection
      </h2>
      <div className="flex gap-9 justify-center">
        {["All Collections", "Theme Boxes", "Made By CannaMiami"].map((tab) => (
          <button
            key={tab}
            className={`border-b pb-3 ${
              selectedTab === tab
                ? "border-black font-semibold"
                : "border-transparent"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <h4
        className="pl-[5%] py-3 flex gap-3 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Shop By Menu <IoCaretDown className="mt-0" size={18} />
      </h4>
      <div className={`flex px-[5%]`}>
        <div
          className={`w-[25%] ${
            open === true ? "flex" : "hidden"
          }  flex-col  uppercase`}
        >
          <div className="text-start">
            <ul className="py-4 space-y-2 font-extralight ">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`py-2 px-3 rounded-md font-normal ${
                    selectedButton === item ? "bg-black/10 font-normal" : ""
                  } cursor-pointer`}
                  onClick={() => handleSelection(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`grid  gap-4 ${
            open === true ? "w-[75%] grid-cols-3" : "w-full grid-cols-4"
          } `}
        >
          {tabData[selectedTab].map((src, index) => (
            <div key={index}>
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
