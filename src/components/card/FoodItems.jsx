import { food_items } from "../../data/food"
import Card from "./Card"

const FoodItems = () => {
  return (
    <div className="w-full px-3 sm:px-5 md:px-10 mt-5">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {food_items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FoodItems
