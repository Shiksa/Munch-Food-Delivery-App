export const selectTotalQuantity = (state) => {
  return state.cart.cartItems.reduce((total, item) => total + item.food_quantity, 0);
}

export const selectTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, item) => (total + item.food_quantity * item.price), 0)
}