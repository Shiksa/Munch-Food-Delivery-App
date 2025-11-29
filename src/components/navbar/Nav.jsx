import React, { use } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../features/ui/uiSlice';
import { selectTotalQuantity } from '../../features/cart/cartSelectors';

const Nav = () => {

  const dispatch = useDispatch()

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className='w-full h-16 bg-gray-800 text-white flex justify-between items-center px-5'>

      <div className='h-10 w-auto overflow-hidden'>
        <img src="/logo.webp" alt="" className='h-full w-auto object-contain' />
      </div>

      <form action="" className='w-[60%] bg-white flex items-center px-2 md-px-5 py-2 rounded-xl gap-2 shadow-xl'>
        <IoSearchSharp className='text-gray-800 text-xl' />
        <input type="search" name='search' placeholder='Search for dishes . . .' autoComplete='off' className=' rounded-md text-black w-full outline-none ' />
      </form>

      <div onClick={handleToggleCart} className={`h-10 w-10 flex justify-center items-center 
      rounded-full relative
      `}>
        <span className='absolute -top-0.5 -right-0.5 bg-[#FCA417] text-gray-800 font-bold text-sm border rounded-full w-4 h-4 flex items-center justify-center '>{totalQuantity}</span>
        <FiShoppingBag className='text-[#FCA417] h-6 w-6' />
      </div>

    </div>
  )
}

export default Nav