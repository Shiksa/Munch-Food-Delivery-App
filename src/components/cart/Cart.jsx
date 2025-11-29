import React from 'react'
import { IoMdClose } from "react-icons/io";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="
      fixed right-0 top-16 
      w-full md:w-[22vw] 
      h-[calc(100vh-4rem)] 
      bg-[#e8d5b8] shadow-lg p-5 
      flex flex-col
    ">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose className="border-2 border-gray-600 text-gray-600 p-1 text-xl rounded-md hover:border-[#FCA417] hover:text-[#FCA417] cursor-pointer" />
      </div>

      {/* CART ITEMS AREA (SCROLLABLE) */}
      <div className="flex-1 overflow-y-auto">
        {/* Example Placeholder */}
        <h3 className="text-gray-500 text-sm">Your cart is empty.</h3>
        <CartItem />
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full mt-3 pt-3 border-t">
        <h3 className="text-sm font-semibold text-gray-700">Items: 0</h3>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Total Amount: ₹0</h3>

        <button className="
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
