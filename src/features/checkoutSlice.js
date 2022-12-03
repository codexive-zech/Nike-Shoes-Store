import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    defaultValue: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.address = "";
    },
  },
});

export const { handleChange, defaultValue } = checkoutSlice.actions;

export default checkoutSlice.reducer;
