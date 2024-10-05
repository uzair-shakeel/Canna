"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Line from "./components/Line";
import Footer from "./components/Footer";
import AgeVerification from "./components/AgeVerification";
import { FaPhone } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { MdSell } from "react-icons/md";
import AgeRestrictionBanner from "./components/AgeRestriction";
import ExternalLinksDisclaimer from "./components/Disclaimer";
import { CartContext } from "./context/CartContext";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  if (!isVerified) {
    return <AgeVerification onVerify={setIsVerified} />;
  }

  return (
    <div>
      <Navbar />
      <Line />
      <Products />
      <ExternalLinksDisclaimer />
      <AgeRestrictionBanner />
      <Footer />
      <a
        href="tel:+17862226781"
        className="fixed bottom-[80px] md:bottom-[30px] bg-black/50 backdrop-blur-sm animate-bounce border border-black p-4 rounded-full right-[30px]"
      >
        <FaPhone size={25} className="text-blue-100" />
      </a>

      <div className="fixed w-full bottom-0 py-3 bg-blue-100 flex justify-evenly md:hidden">
        <Image
          src="/new/CBD.png"
          alt="CBD"
          className="h-8 w-8"
          width={32}
          height={32}
        />
        <Image
          src="/new/THCA.png"
          alt="THCA"
          className="h-8 w-8"
          width={32}
          height={32}
        />
        <Image
          src="/new/delta8.png"
          alt="Delta 8"
          className="h-8 w-8"
          width={32}
          height={32}
        />
        <HiShoppingCart className="h-8 w-8" />
        <MdSell className="h-8 w-8" />
      </div>
    </div>
  );
}
