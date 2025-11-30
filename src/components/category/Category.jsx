import React from 'react'
import { categories } from './index'
import { useDispatch } from 'react-redux';
import { categoryFilter } from '../../features/filter/filterSlice';


const Category = () => {

  const dispatch = useDispatch();
  const handleCatagory = (category) => {
    dispatch(categoryFilter(category.slug));
  }

  return (
    <div className="w-full pt-5 px-3 ">
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">

        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCatagory(category)}
            className="
              flex flex-col items-center justify-center
              bg-white shadow-md rounded-lg

              w-[65px] h-[70px]           /* VERY small on mobile */
              md:w-[130px] md:h-[150px]   /* full size */

              p-2 md:p-5
              text-[10px]  md:text-md
              font-semibold text-gray-800

              hover:scale-105 hover:bg-[#e8d5b8d6]
              transition-all duration-300 cursor-pointer
            "
          >
            <category.icon
              className="
                text-[#de9e38]
                w-[22px] h-[22px]        /* small icon on mobile */
                md:w-[60px] md:h-[60px]
              "
            />

            <div className="mt-1 text-center leading-tight">{category.name}</div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Category
