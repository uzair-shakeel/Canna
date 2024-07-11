import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { FaPhone } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { MdSell } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Line />
      <Products />
      <Footer />
      <a
        href="tel:+1234567890"
        className="fixed bottom-[80px] md:bottom-[30px] bg-black/50 backdrop-blur-sm animate-bounce border border-black p-4 rounded-full right-[30px]"
      >
        <FaPhone size={25} className="text-blue-100" />
      </a>

      <div className="fixed w-full bottom-0  py-3 bg-black/10 backdrop-blur-lg border-black  flex justify-evenly md:hidden">
        <img src="/new/CBD.png" className="h-8 w-8" />
        <img src="/new/THCA.png" className="h-8 w-8" />
        <img src="/new/delta8.png" className="h-8 w-8" />
        <HiShoppingCart className="h-8 w-8" />
        <MdSell className="h-8 w-8" />
      </div>
    </div>
  );
}
