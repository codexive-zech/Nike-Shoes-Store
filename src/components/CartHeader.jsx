import React from "react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";

const CartHeader = () => {
  return (
    <div className=" flex items-center justify-between gap-3 px-4 bg-slate-100 h-14">
      <div className=" flex items-center justify-center gap-5">
        <div className=" grid items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          <button type="button">
            <FaChevronLeft className="icon-style text-slate-900" />
          </button>
        </div>
        <div className=" grid items-center">
          <h1 className=" text-slate-900 font-bold">
            Your Cart
            <span className=" text-slate-100 bg-theme-cart p-1 rounded-md font-normal ml-2">
              (Items)
            </span>
          </h1>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-theme-cart p-1 rounded-lg hover:scale-95 transition-all duration-300 ease-in-out">
        <button type="button">
          <FaTimes className="icon-style text-slate-100" />
        </button>
      </div>
    </div>
  );
};

export default CartHeader;
