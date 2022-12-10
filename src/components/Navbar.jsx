import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";
import { getSubtotalPriceQuantity, openCart } from "../features/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { navScrollGreat, navScrollLess } from "../features/NavbarSlice";

const Navbar = () => {
  const { navScroll } = useSelector((store) => store.navbar);
  const { cartTotalQuantity, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubtotalPriceQuantity());
  }, [cartItems, dispatch]);

  const setFixedNav = () => {
    if (window.scrollY > 35) {
      dispatch(navScrollGreat());
    } else {
      dispatch(navScrollLess());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixedNav);
    return () => {
      window.removeEventListener("scroll", setFixedNav);
    };
  }, [navScroll]);

  return (
    <header
      className={`${
        navScroll
          ? " fixed top-0 right-0 left-0 h-[10vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme"
          : "absolute top-7 right-0 left-0 opacity-100 z-50"
      }`}
    >
      <nav className=" flex items-center justify-between nike-container">
        {/* image */}
        <img
          src={logo}
          alt="logo"
          className={`w-20 h-auto ${navScroll ? "filter brightness-0" : null}`}
        />
        {/* list icon links */}
        <ul className="flex items-center justify-center gap-5 md:gap-3">
          <li className="grid items-center sm:mr-2">
            <FaSearch
              className={`icon-style ${
                navScroll ? " text-slate-900" : " text-slate-100"
              }`}
            />
          </li>
          <li className=" grid items-center sm:mr-2">
            <FaHeart
              className={`icon-style ${
                navScroll ? " text-slate-900" : " text-slate-100"
              }`}
            />
          </li>
          <button
            type="button"
            className=" relative border-none outline-none active:scale-110 transition-all duration-300 ease-in-out sm:mr-2"
            onClick={() => dispatch(openCart())}
          >
            <li className="grid items-center">
              <FaShoppingBag
                className={`icon-style ${
                  navScroll ? " text-slate-900" : " text-slate-100"
                }`}
              />
              <span
                className={`absolute top-5 md:top-4 right-0 left-0 shadow rounded-full md:text-sm hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer ${
                  navScroll
                    ? "bg-slate-100 text-slate-900 shadow-slate-100"
                    : "bg-slate-900 text-slate-100 shadow-slate-900"
                }`}
              >
                {cartTotalQuantity}
              </span>
            </li>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
