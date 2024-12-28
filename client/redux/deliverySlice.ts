import { createSlice } from "@reduxjs/toolkit";

export const deliverySlice = createSlice({
  name: "delivery",
  initialState: {
    addressAdded: false,
  },
  reducers: {
    addressUpdate: (state, action) => {
      state.addressAdded = action.payload;
    },
  },
});

export const { addressUpdate } = deliverySlice.actions;
export default deliverySlice.reducer;
