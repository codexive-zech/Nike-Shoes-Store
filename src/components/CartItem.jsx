import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { formatPrice } from "../utils/helper";
import {
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
} from "../features/CartSlice";
import { Subtotal } from "../components";

const CartItem = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex flex-col justify-start items-start gap-6 md:gap-4 p-5 py-4 overflow-y-scroll scroll-smooth h-[75vh] md:scroll-hidden">
        {cartItems.map((items) => {
          const { id, title, text, color, shadow, cartQuantity, price, img } =
            items;
          return (
            <div key={id} className=" flex items-center justify-between w-full">
              <div className=" flex items-center justify-between gap-4">
                {/* image */}
                <div
                  className={`bg-gradient-to-b ${color} ${shadow} p-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer`}
                >
                  <img
                    src={img}
                    alt={title}
                    className=" w-36 md:w-28 sm:w-24 h-auto"
                  />
                </div>
                {/* text, title, quantity */}
                <div className=" grid items-center justify-items-center gap-2 sm:gap-1">
                  <h1 className=" text-slate-900 font-bold sm:text-sm">
                    {title}
                  </h1>
                  <p className=" text-slate-800 text-sm sm:text-xs">{text}</p>
                  <div className=" flex items-center justify-center gap-5 mt-2">
                    <button
                      type="button"
                      className=" bg-slate-900"
                      onClick={() => dispatch(decreaseCartItem({ id, title }))}
                    >
                      <FaMinus className="icon-style w-6 h-6 md:h-5 md:w-5 font-medium text-sm p-1" />
                    </button>
                    <div className=" bg-slate-900 w-6 h-6 md:h-5 md:w-5 font-normal text-sm p-1 text-slate-100 flex items-center justify-center">
                      {cartQuantity}
                    </div>
                    <button
                      type="button"
                      className=" bg-slate-900"
                      onClick={() => dispatch(increaseCartItem({ id, title }))}
                    >
                      <FaPlus className="icon-style w-6 h-6 md:h-5 md:w-5 font-medium text-sm p-1" />
                    </button>
                  </div>
                </div>
              </div>
              {/* price and trash */}
              <div className=" grid items-center justify-items-center gap-7 md:gap-6">
                <h1 className=" font-medium md:text-sm sm:text-xs">
                  {formatPrice(price * cartQuantity)}
                </h1>
                <button
                  type="button"
                  className=" bg-slate-900 flex items-center justify-center"
                  onClick={() => dispatch(removeCartItem({ id, title }))}
                >
                  <FaTrash className="icon-style w-6 h-6 md:h-5 md:w-5 font-medium text-lg p-1" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Subtotal />
    </>
  );
};

export default CartItem;
