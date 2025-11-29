// ===== IMAGE IMPORTS =====
import image1 from "../assets/image1.avif";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.avif";
import image5 from "../assets/image5.avif";
import image6 from "../assets/image6.avif";
import image7 from "../assets/image7.avif";
import image8 from "../assets/image8.avif";
import image9 from "../assets/image9.avif";
import image10 from "../assets/image10.avif";
import image11 from "../assets/image11.avif";
import image12 from "../assets/image12.avif";
import image13 from "../assets/image13.avif";
import image14 from "../assets/image14.webp";
import image15 from "../assets/image15.avif";
import image16 from "../assets/image16.avif";
import image17 from "../assets/image17.avif";
import image18 from "../assets/image18.avif";
import image19 from "../assets/image19.avif";
import image20 from "../assets/image20.avif";
import image21 from "../assets/image21.avif";
import image22 from "../assets/image22.avif";
import image23 from "../assets/image23.avif";
import image24 from "../assets/image24.avif";
import image25 from "../assets/image25.avif";


// ===== FOOD DATA =====
export const food_items = [
  { id: 1, food_name: "Pancakes", food_category: "breakfast", food_type: "veg", food_quantity: 1, food_image: image1, price: 499, description: "Fluffy warm pancakes served with maple syrup", rating: 4.6 },
  { id: 2, food_name: "Chicken Soup", food_category: "soups", food_type: "non_veg", food_quantity: 1, food_image: image2, price: 399, description: "Comforting chicken broth with tender pieces", rating: 4.4 },
  { id: 3, food_name: "Minestrone Soup", food_category: "soups", food_type: "veg", food_quantity: 1, food_image: image3, price: 349, description: "Healthy Italian soup loaded with vegetables", rating: 4.3 },
  { id: 4, food_name: "Spaghetti Carbonara", food_category: "pasta", food_type: "non_veg", food_quantity: 1, food_image: image4, price: 999, description: "Creamy rich pasta with bacon and cheese", rating: 4.7 },
  { id: 5, food_name: "Veg Alfredo Pasta", food_category: "pasta", food_type: "veg", food_quantity: 1, food_image: image5, price: 899, description: "Smooth cheesy Alfredo with fresh vegetables", rating: 4.5 },
  { id: 6, food_name: "Chicken Alfredo Pasta", food_category: "pasta", food_type: "non_veg", food_quantity: 1, food_image: image6, price: 1099, description: "Creamy Alfredo pasta topped with tender chicken", rating: 4.7 },
  { id: 7, food_name: "Paneer Butter Masala", food_category: "main_course", food_type: "veg", food_quantity: 1, food_image: image7, price: 799, description: "Rich buttery paneer curry with aromatic spices", rating: 4.8 },
  { id: 8, food_name: "Chicken Biryani", food_category: "main_course", food_type: "non_veg", food_quantity: 1, food_image: image8, price: 1199, description: "Flavourful biryani layered with juicy chicken", rating: 4.9 },
  { id: 9, food_name: "Margherita Pizza", food_category: "pizza", food_type: "veg", food_quantity: 1, food_image: image9, price: 649, description: "Classic cheese pizza with fresh tomato sauce", rating: 4.5 },
  { id: 10, food_name: "Pepperoni Pizza", food_category: "pizza", food_type: "non_veg", food_quantity: 1, food_image: image10, price: 749, description: "Crispy pepperoni slices on cheesy pizza base", rating: 4.7 },
  { id: 11, food_name: "Veggie Burger", food_category: "burger", food_type: "veg", food_quantity: 1, food_image: image11, price: 499, description: "Loaded vegetable patty with fresh crunchy veggies", rating: 4.3 },
  { id: 12, food_name: "Chicken Burger", food_category: "burger", food_type: "non_veg", food_quantity: 1, food_image: image12, price: 599, description: "Crispy chicken patty with creamy mayo filling", rating: 4.6 },
  { id: 13, food_name: "Tomato Soup", food_category: "soups", food_type: "veg", food_quantity: 1, food_image: image13, price: 299, description: "Smooth creamy tomato soup with herbs added", rating: 4.2 },
  { id: 14, food_name: "Egg Sandwich", food_category: "breakfast", food_type: "non_veg", food_quantity: 1, food_image: image14, price: 349, description: "Soft sandwich filled with creamy egg mixture", rating: 4.4 },
  { id: 15, food_name: "Mushroom Soup", food_category: "soups", food_type: "veg", food_quantity: 1, food_image: image15, price: 349, description: "Rich mushroom soup with deep earthy flavour", rating: 4.3 },
  { id: 16, food_name: "Chicken Tikka Masala", food_category: "main_course", food_type: "non_veg", food_quantity: 1, food_image: image16, price: 1199, description: "Bold spicy chicken tikka cooked in creamy gravy", rating: 4.8 },
  { id: 17, food_name: "Cheese Omelette", food_category: "breakfast", food_type: "non_veg", food_quantity: 1, food_image: image17, price: 399, description: "Fluffy omelette generously stuffed with cheese", rating: 4.5 },
  { id: 18, food_name: "Fettuccine Alfredo", food_category: "pasta", food_type: "veg", food_quantity: 1, food_image: image18, price: 949, description: "Classic Alfredo pasta with creamy smooth sauce", rating: 4.6 },
  { id: 19, food_name: "Garlic Bread", food_category: "pizza", food_type: "veg", food_quantity: 1, food_image: image19, price: 299, description: "Crispy garlic bread topped with melted cheese", rating: 4.4 },
  { id: 20, food_name: "Fish and Chips", food_category: "main_course", food_type: "non_veg", food_quantity: 1, food_image: image20, price: 1099, description: "Golden fried fish served with crispy fries", rating: 4.7 },
  { id: 21, food_name: "Hash Browns", food_category: "breakfast", food_type: "veg", food_quantity: 1, food_image: image21, price: 249, description: "Crispy golden hash browns with soft center", rating: 4.3 },
  { id: 22, food_name: "Vegetable Soup", food_category: "soups", food_type: "veg", food_quantity: 1, food_image: image22, price: 329, description: "Light healthy soup made with fresh vegetables", rating: 4.2 },
  { id: 23, food_name: "Egg Fried Rice", food_category: "main_course", food_type: "non_veg", food_quantity: 1, food_image: image23, price: 599, description: "Fluffy rice tossed with eggs and vegetables", rating: 4.5 },
  { id: 24, food_name: "Hawaiian Pizza", food_category: "pizza", food_type: "non_veg", food_quantity: 1, food_image: image24, price: 799, description: "Sweet pineapple chunks with savoury chicken mix", rating: 4.3 },
  { id: 25, food_name: "Pasta Primavera", food_category: "pasta", food_type: "veg", food_quantity: 1, food_image: image25, price: 899, description: "Fresh vegetables tossed lightly with creamy pasta", rating: 4.5 }

];
