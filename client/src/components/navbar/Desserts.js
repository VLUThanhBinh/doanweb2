import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./product.css";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Lấy dữ liệu từ API
  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/food/list");
        // Lọc chỉ các sản phẩm có category là 'DEST' (không phân biệt hoa thường)
        const dessertItems = response.data.data.filter(item => item.category && item.category.toLowerCase() === "dest");
        setDesserts(dessertItems);
        setLoading(false); // Dữ liệu đã tải xong
      } catch (error) {
        console.error("Failed to fetch desserts:", error);
        setError("Failed to fetch desserts. Please try again later.");
        setLoading(false); // Dừng trạng thái tải
      }
    };

    fetchDesserts();
  }, []);

  // Hàm xử lý thêm vào giỏ hàng
  const handleAddToCart = (dessert) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === dessert.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      storedCart.push({ ...dessert, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    alert(`${dessert.name} đã được thêm vào giỏ hàng!`);
  };  

  if (loading) {
    return <div className="loading">Loading desserts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="desserts-container">
      <ul className="desserts-list">
        {desserts.map((dessert) => (
          <li key={dessert.id} className="desserts-item">
            <Link to={`/Desserts/${dessert.id}`} className="dessert-link">
              <img src={`http://localhost:8000/images/${dessert.image}`} alt={dessert.name} />
              {/* Hiển thị tên món ăn */}
              <h2 className="dessert-name">{dessert.name}</h2>
              <p>{dessert.description}</p>
              <p className="price">Price: ${dessert.price}</p>
              <p className="category">Category: {dessert.category}</p>
            </Link>
            {/* Nút thêm vào giỏ hàng */}
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(dessert)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Desserts;