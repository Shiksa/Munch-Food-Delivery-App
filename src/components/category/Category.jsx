import React from 'react'
import { categories } from '.'

const Category = () => {
  return (
    <div className="w-full pt-5 px-3">
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5">

        {categories.map((category) => (
          <div
            key={category.id}
            className="
              flex flex-col items-center justify-center
              bg-white shadow-md rounded-lg

              w-[65px] h-[70px]           /* VERY small on mobile */
              sm:w-[90px] sm:h-[100px]    /* slightly bigger */
              md:w-[130px] md:h-[150px]   /* full size */

              p-2 sm:p-3 md:p-5
              text-[10px] sm:text-sm md:text-md
              font-semibold text-gray-800

              hover:scale-105 hover:bg-[#e8d5b8d6]
              transition-all duration-300 cursor-pointer
            "
          >
            <category.icon
              className="
                text-[#de9e38]
                w-[22px] h-[22px]        /* small icon on mobile */
                sm:w-[35px] sm:h-[35px]
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
