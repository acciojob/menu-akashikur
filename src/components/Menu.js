import React, { useState } from "react";
import dishesData from "../dishesData"; // Import your dish data

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [dishes, setDishes] = useState(dishesData);

  const filterDishes = (category) => {
    if (category === "all") {
      setDishes(dishesData);
    } else {
      const filteredDishes = dishesData.filter(
        (dish) => dish.category === category
      );
      setDishes(filteredDishes);
    }
  };

  return (
    <div>
      {/* Category buttons */}
      <button id="main" onClick={() => filterDishes("all")}>
        All
      </button>
      <button id="filter-btn-1" onClick={() => filterDishes("breakfast")}>
        Breakfast
      </button>
      <button id="filter-btn-2" onClick={() => filterDishes("lunch")}>
        Lunch
      </button>
      <button id="filter-btn-3" onClick={() => filterDishes("shakes")}>
        Shakes
      </button>

      {/* Display dishes */}
      <div className="dishes">
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

const Dish = ({ dish }) => {
  const { title, category, price, img, desc } = dish;
  return (
    <div className="dish">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>${price}</p>
    </div>
  );
};

export default Menu;
