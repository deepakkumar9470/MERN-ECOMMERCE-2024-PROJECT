import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { Search } from "lucide-react";

import Loader from "./Loader";
import { url } from "../api/api";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      try {
        const res = await axios.get(`${url}/product/get`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthProducts();
  }, []);

  return (
    <>
      {/* Product Card List start */}
      <div className="px-10 py-5">
        <h2 className="text-3xl text-center font-extrabold text-txtColor border-b-2 w-[200px] pl-4 mb-4">
          New Arrival's
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Product product={product} key={product._id} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
      {/* Product Card List end */}
    </>
  );
};

export default Products;
