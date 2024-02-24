import React from "react";
import { Phone, ChevronDown } from "lucide-react";
const Footer = () => {
  return (
    <div className="hidden md:block md:flex w-full px-20 py-10 bg-black text-white flex bottom-0 justify-between items-center">
      <div className="flex items-center justify-center gap-2">
        <img className="w-10 h-10" src="/shop.png" alt="shop" />
        <span className="text-xl font-bold">dCommerce</span>
      </div>
      <div>
        <p>&copy; All right reserved | dCommerce | Shop Now </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <Phone />
          <span>+9494849494</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
