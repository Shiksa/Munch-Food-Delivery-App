import { food_items } from "../../data/food"
import Card from "./Card"
import { useSelector } from "react-redux"

const FoodItems = () => {

  const { category, search } = useSelector((state) => state.filter);

  const filteredItems = food_items.filter((item) => {
    const matchesCategory =
      category === "all" ? true : item.food_category === category;

    const matchesSearch = item.food_name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full px-3 sm:px-5 md:px-10 mt-5">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default FoodItems
