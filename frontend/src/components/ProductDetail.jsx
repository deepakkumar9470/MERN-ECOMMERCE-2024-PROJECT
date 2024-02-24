import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Truck, FileCheck, IndianRupee } from "lucide-react";
import Loader from "./Loader";
import { url } from "../api/api";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fecthSingleProduct = async () => {
      try {
        const res = await axios.get(`${url}/product/${id}`);
        setProduct(res.data.product);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fecthSingleProduct();
    setIsLoading(false);
  }, [id]);

  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="flex justify-between  px-10 py-4 gap-5 flex-col md:flex-row">
        <div>
          <span className="pl-3 ml-5 pt-3 mb-3 text-txtColor">
            Electronics / Audio / Shop {product.category} by type /{" "}
            <span className="font-extrabold text-softTxt">
              {product.category}
            </span>
          </span>
          <div className="flex flex-col gap-6 items-center py-4">
            <div className="bg-[#DDE6ED]  w-[500px] rounded-xl flex items-center justify-center p-6">
              <img
                className="w-[500px] mix-blend-multiply h-[500px] mb-2 
                    object-contain rounded-xl"
                src={`http://localhost:5000/image/${product.image}`}
                alt={product.name}
              />
            </div>

            <div className="flex flex-row justify-between h-24 gap-6">
              <img
                src={`http://localhost:5000/image/${product.image}`}
                alt="singlepic"
                className="w-28 h-28 bg-[#DDE6ED]  ly p-3 rounded-md"
              />
              <img
                src={`http://localhost:5000/image/${product.image}`}
                alt="singlepic"
                className="w-28 h-28 bg-[#DDE6ED] p-3 rounded-md"
              />
              <img
                src={`http://localhost:5000/image/${product.image}`}
                alt="singlepic"
                className="w-28 h-28 bg-[#DDE6ED] p-3 rounded-md"
              />
              <img
                src={`http://localhost:5000/image/${product.image}`}
                alt="singlepic"
                className="w-24 h-28 bg-[#DDE6ED] p-3 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Peoduct details form start */}
        <div className="flex-1 flex-col ">
          <p className="text-2xl text-txtColor font-bold mb-4">
            {product.name}
          </p>
          <p className="text-sm text-softTxt mb-3">{product.description}</p>
          <hr className="h-px my-5 bg-txtColor border-0" />
          <div className="flex items-center gap-2">
            <p className="text-2xl text-txtColor font-bold flex items-center">
              <IndianRupee className="text-txtColor" fontSize={20} />
              {product.price} /-
            </p>
          </div>
          <hr className="h-px my-5 bg-txtColor border-0" />
          <span className="text-lg text-txtColor font-bold">
            Choose a Color
          </span>
          <div className="flex  gap-2 py-3 mb-2 mt-2">
            <div className="w-10 h-10 rounded-full bg-red-500 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-blue-500 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-cyan-500 cursor-pointer"></div>
            <div className="w-10 h-10 rounded-full bg-green-500 cursor-pointer"></div>
          </div>

          <div className="py-3">
            <div className="flex gap-4">
              <div className="flex items-center gap-9 justify-center bg-softBg  rounded-full px-12">
                <span className="font-bold text-softTxt  text-xl">-</span>
                <span className="font-bold text-softTxt  text-xl">1</span>
                <span className="font-bold text-softTxt  text-xl">+</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-softTxt  text-base">
                  Only <span className="text-orange">12 items</span> left!
                </span>
                <span className="font-semibold text-softTxt  text-base">
                  Don't miss it
                </span>
              </div>
            </div>

            <div className="flex gap-2 py-4">
              <button className="w-[200px] text-white text-lg py-2 mt-2 rounded-full bg-orange  font-bold">
                Buy Now
              </button>
              <button className="w-[200px] text-TxtColor text-lg py-2 mt-2 rounded-full bg-white border-1  font-bold">
                Add To Cart
              </button>
            </div>
          </div>

          <div>
            <div className="max-w-[400px] flex gap-4 py-4 rounded-lg border-2 pl-2 border-softTxt p-2">
              <Truck className="w-6 h-6 text-orange" />
              <div className="flex flex-col">
                <span className="font-semibold text-txtColor text-base">
                  Free Delivery
                </span>
                <span className="text-sm font-semibold underline text-softTxt mt-2">
                  Enter your Postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="max-w-[400px] flex gap-4 py-4 border-2 border-softTxt p-2 pl-2">
              <FileCheck className="w-6 h-6 text-orange" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="font-semibold text-base  text-txtColor">
                  Return Delivery
                </span>
                <span className="text-sm font-semibold text-softTxt mt-2">
                  Free 30days Delivery Returns.{" "}
                  <span className="text-sm font-semibold underline">
                    Details
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Peoduct details form end */}
      </div>
    </div>
  );
};

export default ProductDetail;
