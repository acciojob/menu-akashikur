import React from "react";
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
export default Dish;
