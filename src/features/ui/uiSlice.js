import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartVisible: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    openCart: (state) => {
      state.cartVisible = true;
    },
    closeCart: (state) => {
      state.cartVisible = false;
    }
  }
})

export const { toggleCart, openCart, closeCart } = uiSlice.actions;

export default uiSlice.reducer;