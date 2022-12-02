import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeCheckout } from "../features/CartSlice";
import { handleChange } from "../features/checkoutSlice";

const Checkout = () => {
  const { toggleCheckout } = useSelector((store) => store.cart);
  const { name, email, phone, address } = useSelector(
    (store) => store.checkout
  );
  const dispatch = useDispatch();

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <div
      className={`fixed right-0 top-0 left-0 bottom-0 checkout-effect-theme w-full h-screen  transition-all duration-300 ease-in-out ${
        toggleCheckout ? " opacity-100 visible" : " opacity-0 invisible"
      }
      `}
    >
      <div className="absolute right-0 max-w-xl w-full blur-effect-theme h-screen">
        <div className=" flex items-center justify-between px-4 py-4">
          <h1 className="text-4xl md:text-3xl sm:text-2xl text-slate-900 font-bold flex items-center justify-center uppercase">
            Payment Information
          </h1>
          <button
            type="button"
            className="p-1 rounded-md bg-theme-cart hover:scale-105 transitions-theme "
          >
            <FaTimes
              className="icon-style"
              onClick={() => dispatch(closeCheckout())}
            />
          </button>
        </div>
        <form className="grid items-center gap-6 py-4 sm:py-10">
          <div className="px-2 py-2 flex flex-col items-center justify-center gap-2">
            <label
              htmlFor="name"
              className="text-3xl md:text-2xl font-bold text-slate-800 mt-7"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="ml-5 w-[75%] h-8 text-slate-800 rounded-md px-3"
              value={name}
              onChange={changeInput}
            />
            <label
              htmlFor="email"
              className="text-3xl md:text-2xl font-bold text-slate-800 mt-7"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={changeInput}
              className="ml-5 w-[75%] h-8  text-slate-800 rounded-md px-3"
            />
            <label
              htmlFor="phone"
              className="text-3xl md:text-2xl font-bold text-slate-800 mt-7"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={phone}
              onChange={changeInput}
              className="ml-5 w-[75%] h-8 text-slate-800 rounded-md px-3"
            />
            <label
              htmlFor="address"
              className="text-3xl md:text-2xl font-bold text-slate-800 mt-7"
            >
              House Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={changeInput}
              className="ml-5 w-[75%] h-8 text-slate-800 rounded-md px-3"
            />
          </div>
          <div className="absolute bottom-0 right-0 button-theme bg-theme-cart text-slate-100 p-[0.35rem] w-full transitions-theme flex items-center justify-center mb-1">
            <button type="button" className="uppercase font-bold">
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;