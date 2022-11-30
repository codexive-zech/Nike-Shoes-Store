import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navScroll: false,
};

const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    navScrollGreat: (state) => {
      state.navScroll = true;
    },
    navScrollLess: (state) => {
      state.navScroll = false;
    },
  },
});

export const { navScrollGreat, navScrollLess } = NavbarSlice.actions;

export default NavbarSlice.reducer;
