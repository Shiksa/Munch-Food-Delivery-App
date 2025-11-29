import React, { use, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../../features/ui/uiSlice';
import { selectTotalPrice, selectTotalQuantity } from '../../features/cart/cartSelectors';

const Cart = () => {

  const activeCart = useSelector(state => state.ui.cartVisible);

  const cartItems = useSelector((state) => state.cart.cartItems)

  const dispatch = useDispatch();

  const totalQuantity = useSelector(selectTotalQuantity)
  const totalAmount = useSelector(selectTotalPrice)

  return (
    <div className={`
      fixed right-0 top-16 
      w-full md:w-[22vw] 
      h-[calc(100vh-4rem)] 
      bg-[#e8d5b8] shadow-lg p-5 
      flex flex-col
      ${activeCart ? 'translate-x-0' : 'translate-x-full'}
      transition-all duration-500 z-50
    `}>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose
          onClick={() => dispatch(closeCart())}
          className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-md hover:border-[#FCA417] hover:text-[#FCA417] cursor-pointer" />
      </div>

      {/* CART ITEMS AREA (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto">
        {/* Example Placeholder */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : <h3 className="text-gray-500 text-sm justify-center flex">Your cart is empty.</h3>}
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full mt-3 pt-3 border-t">
        <h3 className="text-sm font-semibold text-gray-700">Items: {totalQuantity}</h3>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Total Amount: ₹{totalAmount}</h3>

        <button
          className="
          bg-green-500 w-full py-2 
          text-white font-bold rounded-md 
          hover:bg-green-700 transition-all duration-300
        ">
          Checkout
        </button>
      </div>

    </div>
  )
}

export default Cart
