import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { clearCart } from '../features/cart/cartSlice';

const Success = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   dispatch(clearCart());   // CLEAR CART SAFELY
  // }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {loading ?
        <DotLoader color="#de9e38" /> :
        <div className='text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Order Successful!</h2>
          <p>Your order has been placed successfullly</p>
        </div>
      }
    </div>
  )
}

export default Success
