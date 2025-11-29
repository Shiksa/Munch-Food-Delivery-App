import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice"
import uiReducer from "../features/ui/uiSlice"

export const store = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartReducer,
    ui: uiReducer,
  },
});