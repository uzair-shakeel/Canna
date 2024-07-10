import React from "react";

const Delivery = () => {
  return (
    <div className="py-24 mb-10 px-[20%] md:px-[10%] grid md:grid-cols-3 gap-[5%]">
      <div className="relative rounded-full border shadow-2xl border-black p-6 overflow-hidden bg-black/10">
        <img src="/new/delivery.jpg" className="mix-blend-multiply" />
        <p className="font-extrabold text-black  border-black border-[1px] md:border-[2px] bg-white/50 backdrop-blur-sm w-full text-center py-3 absolute -bottom-2 lg:bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md lg:text-2xl ">
          {" "}
          Delivery
        </p>
      </div>
      <div className="relative rounded-full border shadow-2xl border-black p-6 overflow-hidden bg-black/10">
        <img src="/new/pick.png" className="mix-blend-multiply" />
        <p className="font-extrabold text-black  border-black border-[1px] md:border-[2px] bg-white/50 backdrop-blur-sm w-full text-center py-3 absolute -bottom-2 lg:bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md lg:text-2xl ">
          Curbside Pickup
        </p>
      </div>
      <div className="relative rounded-full border shadow-2xl border-black p-6 overflow-hidden bg-black/10">
        <img src="/new/pickup.png" className="mix-blend-multiply" />
        <p className="font-extrabold text-black  border-black border-[1px] md:border-[2px] bg-white/50 backdrop-blur-sm w-full text-center py-3 absolute -bottom-2 lg:bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md lg:text-2xl ">
          {" "}
          Store Pickup
        </p>
      </div>
    </div>
  );
};

export default Delivery;
