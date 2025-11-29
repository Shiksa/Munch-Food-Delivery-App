import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const CartItem = () => {
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 bg-white'>
      <MdDelete className='absolute right-7 hover:text-[#FCA417] transition-all ease-linear duration-200 cursor-pointer' />
      <img src="" alt="" className='w-[50px] h-[50px]' />
      <div >
        <h2 className='font-bold text-gray-800'>Onion Pizza</h2>
        <div className='flex justify-between '>
          <span className='text-green-500 font-bold'>
            ₹120
          </span>
          <div className='flex items-center gap-2 absolute right-7'>
            <AiOutlinePlus className='border-2 border-gray-500 text-gray-600 hover:text-[#FCA417] hover:border-[#FCA417] p-1 text-xl rounded-md transition-all ease-linear duration-200 cursor-pointer' />
            <span>1</span>
            <AiOutlineMinus className='border-2 border-gray-500 text-gray-600 hover:text-[#FCA417] hover:border-[#FCA417] p-1 text-xl rounded-md transition-all ease-linear duration-200 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
