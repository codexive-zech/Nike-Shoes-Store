import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { setShoesInStorage, getShoesFromStorage } from "../utils/helper";

const initialState = {
  toggleCart: false,
  toggleCheckout: false,
  cartItems: getShoesFromStorage(),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
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
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartItemIndex >= 0) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
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
      toast.success(`Cart Cleared Successfully`);
    },
    removeCartItem: (state, action) => {
      const cartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = cartItem;
      setShoesInStorage(state.cartItems);
      toast.success(`${action.payload.title} Removed from Cart`);
    },
    increaseCartItem: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex >= 0) {
        state.cartItems[cartItemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} Quantity Increased`);
      }
      setShoesInStorage(state.cartItems);
    },
    decreaseCartItem: (state, action) => {
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[cartItemIndex].cartQuantity > 0) {
        state.cartItems[cartItemIndex].cartQuantity -= 1;
        toast.success(`${action.payload.title} Quantity Increased`);
      }
      setShoesInStorage(state.cartItems);
    },
    getSubtotalPriceQuantity: (state) => {
      let { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQuantity += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQuantity;
      setShoesInStorage(state.cartItems);
    },
    openCheckout: (state) => {
      state.toggleCheckout = true;
    },
    closeCheckout: (state) => {
      state.toggleCheckout = false;
    },
    checkoutQuantity: (state) => {
      state.cartTotalQuantity = 0;
      state.cartItems = [];
    },
    emptyDetails: (state) => {
      toast.error("Payment Info Must Not be Empty");
      state.cartItems = state.cartItems;
    },
  },
});

export const {
  openCart,
  closeCart,
  addToCart,
  clearCart,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
  getSubtotalPriceQuantity,
  updateSort,
  openCheckout,
  closeCheckout,
  checkoutQuantity,
  emptyDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
