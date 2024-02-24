import React from "react";
import { Phone, ChevronDown } from "lucide-react";
const Offer = () => {
  return (
    <div className="hidden md:block md:flex w-full px-6 py-6 bg-[#FF9B50] font-semibold text-white flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Phone />
        <span className="text-base">+9494849494</span>
      </div>
      <div>
        <p className="text-lg">Get 50% Off on Selected Items | Shop Now </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <span className="text-base">Eng</span>
          <ChevronDown />
        </div>
        <div className="flex items-center">
          <span className="text-base">Location</span>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Offer;
