import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const cartItems = useSelector(state => state.cart.cartItems)
  if (cartItems.length === 0) {
    toast.error("Your cart is empty. Please add items to proceed.")
    return (<Navigate to="/" replace />)
  }
  else {
    return children
  }
}

export default ProtectedRoute
