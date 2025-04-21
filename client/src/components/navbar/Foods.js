import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./product.css"; 

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lấy dữ liệu từ API và lọc category là 'food'
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/food/list");
        // Lọc ra các sản phẩm có category là 'food'
        const foodItems = response.data.data.filter(item => item.category && item.category.toLowerCase() === "food");
        setFoods(foodItems);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
        setError("Failed to fetch foods. Please try again later.");
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  const handleAddToCart = (food) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === food.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      storedCart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${food.name} đã được thêm vào giỏ hàng!`);
  };

  if (loading) {
    return <div className="loading">Loading foods...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="desserts-container">
      <ul className="desserts-list">
        {foods.map((food) => (
          <li key={food.id} className="desserts-item">
            <Link to={`/Foods/${food.id}`} className="dessert-link">
              <img src={`http://localhost:8000/images/${food.image}`} alt={food.name} />
              <h2 className="dessert-name">{food.name}</h2>
              <p>{food.description}</p>
              <p className="price">Price: ${food.price}</p>
              <p className="category">Category: {food.category}</p>
            </Link>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(food)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foods;
