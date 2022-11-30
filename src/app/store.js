import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import navbarReducer from "../features/NavbarSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    navbar: navbarReducer,
  },
});

export default store;
