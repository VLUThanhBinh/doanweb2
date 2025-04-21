import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/food/${id}`);
        setFood(response.data.data);
      } catch (error) {
        console.error("Failed to fetch food:", error);
        alert("Failed to fetch food details!");
        navigate("/Foods");
      }
    };

    fetchFood();
  }, [id, navigate]);

  if (!food) {
    return <h2>Loading...</h2>;
  }

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === food.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      storedCart.push({ ...food, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(storedCart));
    toast.success("Đã thêm vào giỏ hàng!", {
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: { fontSize: "0.95rem", minWidth: 120, maxWidth: 180, padding: "8px 10px" },
      icon: false,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="product-detail-kfc-wrapper">
        <div className="product-detail-img-col">
          <img src={`http://localhost:8000/images/${food.image}`} alt={food.name} />
        </div>
        <div className="product-detail-info-col">
          <div className="product-detail-title-kfc">{food.name}</div>
          <div className="product-detail-desc-kfc">{food.description}</div>
          <div className="product-detail-price-row">
            {food.oldPrice && (
              <span className="product-detail-oldprice">{food.oldPrice}$</span>
            )}
            <span className="product-detail-price">{food.price}$</span>
          </div>
          <hr className="product-detail-divider" />
          <div className="product-detail-section-label">MÓN CỦA BẠN</div>
          <div className="product-detail-meta">{food.meta || "1 phần " + food.name}</div>
          <div className="product-detail-qty-row">
            <button className="product-detail-qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button className="product-detail-qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
            <button className="product-detail-addcart-btn" onClick={handleAddToCart}>
              Thêm vào giỏ ({food.price * quantity}$)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
