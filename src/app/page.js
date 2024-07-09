import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Line from "./components/Line";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Line />
      <Products />
      <Footer />
    </div>
  );
}
