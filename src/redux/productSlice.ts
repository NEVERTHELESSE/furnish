import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    cart: [1, 2],
    wishlist: [1, 2, 2],
  },
  reducers: {
    update: (state, action) => {
      state.cart = action.payload.cart;
      state.wishlist = action.payload.wishlist;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
