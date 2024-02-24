import React from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div className="w-full flex items-center justify-between px-4 md:px-10 py-4">
      {/* Logo Section start */}
      <div className="flex items-center gap-2">
        <ShoppingCart
          size={40}
          className="text-txtColor  text-xl md:text-3xl font-extrabold"
        />
        <Link to="/">
          <span className="text-xl md:text-3xl text-orange font-extrabold">
            dComm
          </span>
        </Link>
      </div>
      {/* Logo Section end */}

      <div className="items-center text-softTxt gap-5 hidden md:block md:flex">
        <div className="flex items-center gap-1">
          <span className="font-bold cursor-pointer">Cateogories</span>
          <ChevronDown />
        </div>

        <span className="font-bold cursor-pointer">Deals</span>
        <span className="font-bold cursor-pointer">Whats'New</span>
        <span className="font-bold cursor-pointer">Delivery</span>
      </div>

      {/* Authenticated Section start */}
      <div className="flex items-center gap-2 md:gap-4 px-5 py-5">
        <Link to="/cart">
          <div className="flex items-center gap-3 md:flex  md:block items-center pr-1 md:pr-4">
            <div className="relative">
              <ShoppingCart
                size={28}
                color="#F86F03"
                className="ml-4 md:ml-0 font-bold"
              />
              <div
                className="w-4 h-4 text-sm  text-white  font-bold flex
          items-center justify-center rounded-full bg-orange 
          absolute top-[-5px] right-[-8px]"
              >
                {item.length || 0}
              </div>
            </div>
            <span className="hidden md:block font-bold text-softTxt">Cart</span>
          </div>
        </Link>
      </div>
      {/* Authenticated Section end */}
    </div>
  );
};

export default Header;
