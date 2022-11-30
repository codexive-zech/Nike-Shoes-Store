import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { setShoesInStorage, getShoesFromStorage } from "../utils/helper";

const initialState = {
  toggleCart: false,
  cartItems: getShoesFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.toggleCart = true;
    },
    closeCart: (state) => {
      state.toggleCart = false;
    },
    addToCart: (state, action) => {
      const cartItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItem >= 0) {
        state.cartItems[cartItem].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity Increased`);
      } else {
        const items = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(items);
        toast.success(`${action.payload.title} Added To Cart`);
      }
      setShoesInStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      setShoesInStorage(state.cartItems);
    },
  },
});

export const { openCart, closeCart, addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
