import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);

      if (existing) {
        existing.food_quantity += 1;  // allowed in Redux Tool Kit because RTK used Immer library internally , which converts mutations into safe immutable updates.
      } else {
        state.cartItems.push(item)
      }
    }
    ,
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cart) => (cart.id !== action.payload.id))
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.food_quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item && item.food_quantity > 1) {
        item.food_quantity -= 1;
      }
    }
  }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;