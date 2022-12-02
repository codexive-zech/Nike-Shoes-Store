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
  },
});

export const { handleChange } = checkoutSlice.actions;

export default checkoutSlice.reducer;
