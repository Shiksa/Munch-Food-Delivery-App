import React from 'react'
import Nav from '../components/navbar/Nav'
import Category from '../components/category/Category'
import FoodItems from '../components/card/FoodItems'
import Cart from '../components/cart/Cart'

const Home = () => {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      <Category />
      <FoodItems />
      <Cart />
    </div>
  )
}

export default Home
