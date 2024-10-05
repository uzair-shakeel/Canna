import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-100 px-[15%] lg:px-[2%]">
      <div className="flex flex-col lg:flex-row gap-24 py-14">
        <div className="lg:w-[40%] flex gap-8 flex-col items-center">
          <div className="h-24 w-24 lg:h-40 lg:w-40 rounded-2xl shadow-lg overflow-hidden">
            <img src="/logo.webp" className="h-full w-full object-cover" />
          </div>
          <p className=" font-light text-justify text-sm ">
          Cannamiami operates in compliance with the Agricultural Improvement Act of 2018 (commonly known as the 2018 Farm Bill), which legalized hemp cultivation and the sale of hemp-derived products within the United States. However, the legality of hemp products can vary by state and local jurisdiction, so users should verify the regulations in their area before making a purchase.
Cannamiami does not provide medical advice, and any products or statements made on this website are not intended to diagnose, treat, cure, or prevent any disease or condition. Always consult with a qualified healthcare professional before starting any new health-related product or regimen.

          </p>
        </div>
        <div className="lg:w-[60%]  grid grid-cols-2 md:grid-cols-3 gap-4">
          <ul className="hidden md:block space-y-3">
            <li className="font-bold  underline-offset-4">Shop Now</li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Subsciption
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Store
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="font-bold  underline-offset-4">Work with us</li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Affiliate Program
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              became a Vender
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Wholeseller
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="font-bold  underline-offset-4">Customer Care</li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              How it works
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Support
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Shipping Policy
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Privacy Policies
            </li>
            <li className="cursor-pointer hover:text-blue-800 duration-150">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center py-3">
        Copyright © 2024 CannaMiami - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
