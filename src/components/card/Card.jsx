import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { TiStarFullOutline } from "react-icons/ti";

const Card = ({ item }) => {
  return (
    <div
      className="
        w-[46%] sm:w-[48%] md:w-[30%] lg:w-[19%] xl:w-[18%]
        bg-white p-3 rounded-xl 
        flex flex-col gap-2 shadow-lg 
        hover:scale-105 transition-all duration-300 cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="w-full h-[110px] sm:h-[140px] md:h-40 overflow-hidden rounded-lg">
        <img
          src={item.food_image}
          alt={item.food_name}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>

      {/* FOOD NAME */}
      <div className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
        {item.food_name}
      </div>

      {/* PRICE + VEG/NON-VEG */}
      <div className="w-full flex justify-between items-center">

        {/* Price */}
        <div className="text-xs sm:text-sm md:text-base font-bold text-[#de9e38] whitespace-nowrap">
          ₹ {item.price}
        </div>

        {/* Veg / Non-Veg */}
        <div className="flex items-center gap-1 text-[10px] sm:text-xs md:text-sm font-semibold  whitespace-nowrap">
          {item.food_type === "veg" ? <LuLeafyGreen size={14} className='text-green-500' /> : <GiChickenOven size={14} className='text-red-500' />}
          <span>{item.food_type === "veg" ? "Veg" : "Non-veg"}</span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-snug">
        {item.description}
      </p>

      {/* RATING + BUTTON */}
      <div className="flex justify-between items-center mt-auto gap-2 md:gap-5">

        {/* Rating */}
        <span className="flex items-center text-[11px] sm:text-xs md:text-sm font-semibold gap-1 text-gray-700">
          <TiStarFullOutline className="text-[#de9e38]" size={14} /> {item.rating}
        </span>

        {/* Add to Cart */}
        <button className="w-full bg-[#de9e38] rounded-lg text-white py-1 sm:py-2 font-semibold text-[11px] sm:text-xs md:text-sm">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Card
