import React from "react";
import emptyBag from "../assets/images/emptybag.png";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { closeCart } from "../features/CartSlice";

const CartEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center justify-center flex-col py-16 md:py-20 gap-12">
      <div>
        <img
          src={emptyBag}
          alt="Empty Bag"
          className=" w-52 md:w-44 sm:w-36 h-auto"
        />
      </div>
      <div className="button-theme grid items-center justify-items-center gap-4 bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-500 shadow-md p-2 rounded-md text-slate-900 hover:scale-95 transition-all duration-300 ease-in-out">
        <button
          type="button"
          className="  flex items-center justify-center gap-3"
          onClick={() => dispatch(closeCart())}
        >
          <FaArrowLeft className="icon-style w-7 h-7 text-slate-900" />
          <a href="/">Back To Store</a>
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
