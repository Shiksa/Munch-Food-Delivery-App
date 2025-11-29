import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../features/cart/cartSlice';
import toast from 'react-hot-toast';


const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item))
    handleToast();
  }

  const handleToast = () => {
    toast(`${item.food_name} removed successfully!`, {
      icon: '🗑️',
    });
  }

  const handleIncrement = () => {
    dispatch(incrementQuantity(item))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(item))
  }

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 bg-white'>
      <MdDelete
        onClick={handleRemoveFromCart}
        className='absolute right-7 hover:text-[#FCA417] transition-all ease-linear duration-200 cursor-pointer' />
      <img src={item.food_image} alt="" className='w-[50px] h-[50px]' />
      <div >
        <h2 className='font-bold text-gray-800'>{item.food_name}</h2>
        <div className='flex justify-between '>
          <span className='text-green-500 font-bold'>
            ₹ {item.price}
          </span>
          <div className='flex items-center gap-2 absolute right-7'>
            <AiOutlineMinus
              onClick={handleDecrement}
              className='border-2 border-gray-500 text-gray-600 hover:text-[#FCA417] hover:border-[#FCA417] p-1 text-xl rounded-md transition-all ease-linear duration-200 cursor-pointer' />
            <span>{item.food_quantity}</span>
            <AiOutlinePlus
              onClick={handleIncrement}
              className='border-2 border-gray-500 text-gray-600 hover:text-[#FCA417] hover:border-[#FCA417] p-1 text-xl rounded-md transition-all ease-linear duration-200 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
