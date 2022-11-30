import React from "react";
import { CartHeader, CartEmpty, CartItem } from "../components";

const Cart = () => {
  return (
    <div className="fixed right-0 top-0 blur-effect-theme w-full h-full">
      <div className="absolute top-0 right-0 max-w-[35rem] md:max-w-none w-full blur-effect-theme h-full">
        <CartHeader />
        <CartEmpty />
        {/* <CartItem /> */}
      </div>
    </div>
  );
};

export default Cart;
