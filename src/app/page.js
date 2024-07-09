import Image from "next/image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Line from "./components/Line";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Line />
      <Products />
    </div>
  );
}
