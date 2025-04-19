import React from "react";
import { useParams } from "react-router-dom";
import { desserts } from "../../assets/assets.js";
import "./DessertDetail.css"; // Import CSS file for styling    

const DessertDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const dessert = desserts.find((item) => item.id === parseInt(id)); // Tìm món tráng miệng theo ID

  if (!dessert) {
    return <h2>Dessert not found!</h2>;
  }

  return (
    <div className="dessert-detail">
      <img src={dessert.image} alt={dessert.name} />
      <h1>{dessert.name}</h1>
      <p>{dessert.description}</p>
      <p className="price">Price: {dessert.price}</p>
      <p className="category">Category: {dessert.category}</p>
      {dessert.ingredients && (
        <>
          <h3>Ingredients:</h3>
          <ul>
            {dessert.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
      {dessert.nutrition && (
        <>
          <h3>Nutrition Facts:</h3>
          <p>Calories: {dessert.nutrition.calories}</p>
          <p>Sugar: {dessert.nutrition.sugar}</p>
          <p>Fat: {dessert.nutrition.fat}</p>
        </>
      )}
    </div>
  );
};

export default DessertDetail;