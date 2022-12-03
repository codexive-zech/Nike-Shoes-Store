import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubtotalPriceQuantity,
  openCheckout,
  closeCart,
} from "../features/CartSlice";
import { formatPrice } from "../utils/helper";

const Subtotal = () => {
  const { cartTotalAmount, cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubtotalPriceQuantity());
  }, [cartItems, dispatch]);

  return (
    <div className=" fixed bottom-0 bg-slate-100 w-full">
      <div className=" flex items-center justify-between px-3 py-2">
        <h1 className=" text-slate-900 text-base font-bold uppercase">
          Subtotal
        </h1>
        <h1 className="bg-theme-cart text-slate-100 px-[0.5rem] py-[0.2rem] rounded">
          {formatPrice(cartTotalAmount)}
        </h1>
      </div>
      <div className=" grid items-center gap-2">
        <p className=" text-md sm:text-sm font-medium text-center">
          Taxes and shipping will calculate at shipping
        </p>
        <button
          type="button"
          className=" button-theme bg-theme-cart text-slate-100 p-[0.35rem] w-full mb-1 sm:mb-0 uppercase transitions-theme "
          onClick={() => {
            dispatch(openCheckout());
            dispatch(closeCart());
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
