import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { formatPrice } from "../utils/helper.js";
import { addToCart, openCart } from "../features/CartSlice.js";

const Item = ({
  id,
  title,
  text,
  color,
  shadow,
  price,
  rating,
  btn,
  img,
  isPopularSale,
}) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    const payloadItems = { id, title, text, color, shadow, img, price };
    dispatch(addToCart(payloadItems));
  };

  const openingCart = () => {
    dispatch(openCart());
  };

  return (
    // item container
    <div
      className={`relative grid items-center ${
        isPopularSale ? " justify-items-start" : "justify-items-center"
      } bg-gradient-to-b ${color} ${shadow} cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-lg z-20 px-2 py-2`}
    >
      {/* title and text */}
      <h1 className=" text-slate-100 filter font-bold text-xl lg:text-lg md:text-md  drop-shadow-sm p-1">
        {title}
      </h1>
      <p className="text-slate-100 filter font-normal text-base md:text-sm p-1">
        {text}
      </p>
      {/* price and rating */}
      <div
        className={`flex items-center ${
          isPopularSale ? "justify-start" : "justify-center p-2"
        } gap-3 `}
      >
        <p className=" bg-slate-200 text-slate-900 font-normal sm:text-sm p-1 rounded-lg">
          {formatPrice(price)}
        </p>
        <div className="flex items-center justify-center p-1">
          <FaStar className="style-icon text-slate-100 w-4 h-4" />
          <p className=" text-slate-100 ml-1">{rating}</p>
        </div>
      </div>
      {/* bag and buy button */}
      <div className=" flex items-center justify-center gap-5 py-2">
        <button
          type="button"
          className="bg-slate-200 button-theme p-1 blur-effect-theme sm:mr-2"
          onClick={addProduct}
        >
          <FaShoppingBag className="style-icon text-slate-900 w-5 h-5" />
        </button>
        <button
          type="button"
          className="bg-slate-200 button-theme p-1 blur-effect-theme text-slate-900"
          onClick={() => {
            addProduct();
            openingCart();
          }}
        >
          {btn}
        </button>
      </div>
      {/* image */}
      <div
        className={`grid items-center ${
          isPopularSale
            ? "absolute right-2 top-2 md:top-4"
            : "justify-items-center mt-3"
        }`}
      >
        <img
          src={img}
          alt={title}
          className={`${
            isPopularSale
              ? " h-auto w-52 lg:w-44 -rotate-[25deg]"
              : "w-64 h-32 rotate-12"
          } hover:rotate-0 transition-all duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default Item;
