import React from "react";
import { useSelector } from "react-redux";
import { CartHeader, CartEmpty, CartItem } from "../components";

const Cart = () => {
  const { toggleCart, toggleCheckout, cartItems } = useSelector(
    (store) => store.cart
  );
  return (
    <div
      className={`fixed right-0 top-0 left-0 bottom-0 blur-effect-theme w-full h-screen  transition-all duration-300 ease-in-out ${
        toggleCart ? " opacity-100 visible" : " opacity-0 invisible"
      } ${toggleCheckout ? " opacity-0 invisible" : null}`}
    >
      <div className="absolute right-0 max-w-xl w-full blur-effect-theme h-screen">
        <CartHeader />
        {cartItems.length > 0 ? <CartItem /> : <CartEmpty />}
      </div>
    </div>
  );
};

export default Cart;
