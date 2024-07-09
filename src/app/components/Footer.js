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
            Our CBD products are not for use by or sale to persons under the age
            of 18. All CBD products contain less than 0.3% THC per the
            Controlled Substances Act. These products should be used only as
            directed on the label. They should not be used if you are pregnant
            or nursing. A Doctor's advice should be sought before using these
            and any supplemental dietary products. These statements have not
            been evaluated by the FDA. This product is not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
        </div>
        <div className="lg:w-[60%]  grid grid-cols-3 gap-4">
          <ul className="space-y-3">
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
