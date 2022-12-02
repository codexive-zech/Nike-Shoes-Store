import React from "react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";
import { closeCart, clearCart } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartHeader = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity } = useSelector((store) => store.cart);
  return (
    <div className=" flex items-center justify-between gap-3 px-5 sm:px-4 bg-slate-100 h-14">
      <div className=" flex items-center justify-center gap-5 sm:gap-3">
        <div className=" grid items-center cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          <button type="button" onClick={() => dispatch(closeCart())}>
            <FaChevronLeft className="icon-style text-slate-900 hover:text-orange-500" />
          </button>
        </div>
        <div className=" grid items-center">
          <h1 className=" text-slate-900 font-bold">
            Your Cart
            {cartItems.length > 0 ? (
              <span className=" text-slate-100 bg-theme-cart p-1 rounded-md font-normal ml-2">
                {`(${cartTotalQuantity} Items)`}
              </span>
            ) : null}
          </h1>
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div className=" flex items-center justify-center bg-theme-cart p-1 rounded-lg hover:scale-95 transition-all duration-300 ease-in-out">
          <button type="button" onClick={() => dispatch(clearCart())}>
            <FaTimes className="icon-style text-slate-100" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CartHeader;
