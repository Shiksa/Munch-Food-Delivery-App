import React from 'react';
import { TiThSmallOutline } from "react-icons/ti";
import { LuCroissant } from "react-icons/lu";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { LuUtensils } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";

export const categories = [
  { id: 1, name: "All", slug: "all", icon: TiThSmallOutline },
  { id: 2, name: "Breakfast", slug: "breakfast", icon: LuCroissant },
  { id: 3, name: "Soups", slug: "soups", icon: TbSoup },
  { id: 4, name: "Pasta", slug: "pasta", icon: CiBowlNoodles },
  { id: 5, name: "Main Course", slug: "main_course", icon: LuUtensils },
  { id: 6, name: "Pizza", slug: "pizza", icon: FaPizzaSlice },
  { id: 7, name: "Burger", slug: "burger", icon: GiHamburger },
];
