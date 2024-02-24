import React from "react";
import { Heart, Plus, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    console.log(product);
    dispatch(addToCart(product));
    toast.success(`${product.name} is added to cart`);
  };

  return (
    <div className="p-5 transition-all duration-100 hover:scale-105 cursor-pointer">
      <div className="bg-[#DDE6ED]  max-w-[250px] rounded-xl py-4 p-4 relative">
        <img
          className="w-full h-[180px] mix-blend-multiply   rounded-md object-contain"
          src={`http://localhost:5000/image/${product.image}`}
          alt="singleimg"
        />
        <Heart className="bg-bgLight text-softTxt  w-7 h-7 p-1 rounded-full absolute top-3 right-4" />
      </div>

      <div className="flex justify-between pt-2 max-w-[250px]">
        <p className="text-md font-bold text-txtColor">{product.name}</p>
        <p className="text-base text-softTxt font-bold flex items-center">
          <IndianRupee className="text-softTxt" size={14} strokeWidth={1.25} />
          {product.price}
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-2 mb-2">
        <p className="text-base text-softTxt font-medium">
          {product.description.substring(0, 30) + "..."}
        </p>

        <div className="flex items-cener gap-2">
          <Link to={`product/${product._id}`}>
            <button className="w-[100px] text-txtColor  text-sm py-2 mt-2 px-3 border-2 border-softTxt  rounded-full bg-bgLight  border-0 font-bold hover:bg-orange hover:text-white  transition duration-75">
              View
            </button>
          </Link>

          <button
            onClick={() => addToCartHandler(product)}
            className="hidden md:block w-[100px] md:w-[120px] text-txtColor text-sm py-2 mt-2  rounded-3xl bg-[#F94C10] border font-bold hover:bg-white hover:text-black  transition duration-75"
          >
            Add to Cart
          </button>
          <Plus
            onClick={() => addToCartHandler(product)}
            className="md:hidden mt-4 w-8 h-8 text-base bg-[#F94C10] rounded-full text-txtColor font-bolde"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
