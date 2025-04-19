import React from "react";
import { Link } from "react-router-dom";
import { desserts } from "../../assets/assets.js";
import "./Dessert.css";
import axios from "axios";

const Desserts = () => {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/food/delete/${id}`);
      alert(response.data.message);
      window.location.reload(); // Reload lại danh sách sau khi xóa
    } catch (error) {
      console.error(error);
      alert("Failed to delete food item");
    }
  };

  return (
    <div className="desserts-container">
      <ul className="desserts-list">
        {desserts.map((dessert) => (
          <li key={dessert.id} className="desserts-item">
            <Link to={`/Desserts/${dessert.id}`} className="dessert-link">
              <img src={dessert.image} alt={dessert.name} />
              <h2>{dessert.name}</h2>
              <p>{dessert.description}</p>
              <p className="price">Price: {dessert.price}</p>
              <p className="category">Category: {dessert.category}</p>
            </Link>
            <button onClick={() => handleDelete(dessert.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Desserts;