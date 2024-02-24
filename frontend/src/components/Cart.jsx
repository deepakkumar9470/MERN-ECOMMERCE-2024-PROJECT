import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { toast } from "react-hot-toast";
import { Plus, Minus, Trash } from "lucide-react";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const removeHandler = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success(`Item removed from cart`);
  };

  return (
    <div className="bg-mainBg z-20">
      <div className="container mx-auto mt-10">
        <div className="flex  flex-col md:flex-row shadow-md my-10">
          <div className="w-full w-3/4 bg-softBg px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-txtColor text-2xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-txtColor text-2xl">
                {product.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-txtColor text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="text-end font-semibold md:text-center text-txtColor text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="hidden md:block font-semibold text-center text-txtColor text-xs uppercase w-1/5 text-center">
                Price
              </h3>
            </div>
            {/* Card start */}
            {product?.map((item) => (
              <div
                key={item._id}
                className="flex items-center hover:bg-bgLight rouded-sm -mx-8 px-6 py-5 cursor-pointer transition-all duration-100"
              >
                <div className="flex w-full md:w-2/5">
                  <div className="w-20 bg-[#DDE6ED] rounded-md">
                    <img
                      className="w-full h-20 mix-blend-multiply object-contain"
                      src={`http://localhost:5000/image/${item.image}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm text-txtColor">
                      {item.name}
                    </span>
                    <span className="text-orange text-xs">{item.name}</span>
                    <Trash
                      onClick={() => removeHandler(item._id)}
                      size={16}
                      strokeWidth={2.25}
                      className="font-semibold  text-red-500 cursor-pointer text-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/5">
                  <Minus
                    size={18}
                    className="font-bold text-txtColor cursor-pointer"
                  />

                  <input
                    className="mx-2  text-center w-8 rounded-md text-txtColor  bg-mainBg placeholder:text-softTxt"
                    type="text"
                    value="2"
                    onChange={""}
                  />

                  <Plus
                    size={18}
                    className="font-bold text-txtColor cursor-pointer"
                  />
                </div>
                <span className="hidden md:block text-center w-1/5 text-softTxt font-semibold text-sm">
                  $ {item.price}
                </span>
              </div>
            ))}
            {/* Card end */}

            <Link
              to="/"
              className="flex font-semibold text-orange text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-orange-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-3/4 md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-txtColor text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold  text-softTxt text-sm uppercase">
                Items {product.lenght}
              </span>
              <span className="font-semibold  text-softTxt text-sm">
                $ {product.price || 690}
              </span>
            </div>

            <div className="py-10">
              <label
                for="promo"
                className="font-semibold inline-block text-txtColor mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full bg-softBg text-txtColor"
              />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span className="text-txtColor">Total cost</span>
                <span className="text-softTxt">$600</span>
              </div>
              <button className="bg-orange font-semibold hover:bg-orange-700 py-3 text-sm text-txtColor uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
