"use client";
import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import Delivery from "./Delivery";

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

      <Delivery />

      <div className="pb-24 px-[5%]">
        <h3 className="font-bold text-3xl pb-8 text-center ">New Arrivals</h3>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image1.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Indacloud - Cereal Milk Beast Mode THC-A Diamonds 6G Vape
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$69.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24 px-[5%]">
        <h3 className="font-bold text-3xl pb-8 text-center ">Back In Stock</h3>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative group overflow-hidden">
            <img
              src="/new/Image2.webp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Hemper - Bonsai Tree XL Bong | Zen Box 1
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$199.99</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24 px-[5%]">
        <h3 className="font-bold text-3xl pb-8 text-center ">Popular Items</h3>
        <div className="grid grid-cols-4 gap-4 ">
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="/new/Image3.jpg" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bottom-[-500px] group-hover:bottom-0 duration-300">
              <span className="w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 duration-300 absolute top-0 cursor-pointer"></span>
              <div className="top-1/2 -translate-x-1/2 w-full left-1/2 cursor-pointer text-center -translate-y-1/2 absolute">
                <h3 className="font-semibold text-lg text-blue-100 w-full">
                  Klear - Kryptonite Cleaner 2oz
                </h3>
                <p className="text-blue-100 py-3 text-3xl font-bold">$5.00</p>
              </div>
              <button className="bg-blue-100 w-full  py-3 absolute bottom-0">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
