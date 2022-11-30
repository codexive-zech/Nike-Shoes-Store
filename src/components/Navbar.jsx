import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [myNav, setMyNav] = useState(false);

  const setFixedNav = () => {
    if (window.scrollY > 35) {
      setMyNav(true);
    } else {
      setMyNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixedNav);
    return () => {
      window.removeEventListener("scroll", setFixedNav);
    };
  }, [myNav]);
  return (
    <header
      className={`${
        myNav
          ? " fixed top-0 right-0 left-0 h-[10vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme"
          : "absolute top-7 right-0 left-0 opacity-100 z-50"
      }`}
    >
      <nav className=" flex items-center justify-between nike-container">
        {/* image */}
        <img
          src={logo}
          alt="logo"
          className={`w-20 h-auto ${myNav ? "filter brightness-0" : null}`}
        />
        {/* list icon links */}
        <ul className=" flex items-center justify-center gap-5 md:gap-3">
          <li className=" grid items-center">
            <FaSearch
              className={`icon-style ${
                myNav ? " text-slate-900" : " text-slate-100"
              }`}
            />
          </li>
          <li className=" grid items-center">
            <FaHeart
              className={`icon-style ${
                myNav ? " text-slate-900" : " text-slate-100"
              }`}
            />
          </li>
          <button
            type="button"
            className=" relative border-none outline-none active:scale-110 transition-all duration-300 ease-in-out"
          >
            <li className="grid items-center">
              <FaShoppingBag
                className={`icon-style ${
                  myNav ? " text-slate-900" : " text-slate-100"
                }`}
              />
              <span
                className={`absolute top-5 md:top-4 right-0 left-0 shadow rounded-full md:text-sm hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer ${
                  myNav
                    ? "bg-slate-100 text-slate-900 shadow-slate-100"
                    : "bg-slate-900 text-slate-100 shadow-slate-900"
                }`}
              >
                0
              </span>
            </li>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
