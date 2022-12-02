import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import navbarReducer from "../features/NavbarSlice";
import checkoutReducer from "../features/checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navbar: navbarReducer,
    checkout: checkoutReducer,
  },
});

export default store;
