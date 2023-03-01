import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {

  const [food, setFood] = useState(foods);
  const [foodCopy, setFoodCopy] = useState(foods)

  const createFoods = (newFood) => setFood([newFood,...food]);

  const filterFoods = (look) => {
    if (look === "") setFood(foodCopy)
    else setFood(food.filter(elem => elem.name.toLowerCase().includes(look.toLowerCase())))
  }

  const deleteHandler = (clear) => {
    setFood(food.filter(elem => elem.name !== clear))
  }

  return (
    <div className="App">
    <AddFoodForm createFoods={createFoods}/>
    <Search look = {filterFoods}/>
      {food.map((elem) => {
        return (
            <FoodBox food={{
              name: `${elem.name}`,
              calories: `${elem.calories}`,
              image: `${elem.image}`,
              servings: `${elem.servings}`
            }} key = {elem.name} deleteHandler = {deleteHandler}/>
        )
      })}
    </div>
  );
}

export default App;
