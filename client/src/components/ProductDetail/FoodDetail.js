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
  

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/food/${id}`);
        setFood(response.data.data);
      } catch (error) {
        console.error("Failed to fetch food:", error);
        toast.error("Không thể tải dữ liệu món ăn!");
      }
    };

    fetchFood();
  }, [id, navigate]);

  if (!food) {
    return <h2>Đang tải dữ liệu món ăn...</h2>;
  }

  

  return (
    <>
      <ToastContainer />
      <div className="product-detail-kfc-wrapper">
        <div className="product-detail-img-col">
          {food.image ? (
            <img src={`http://localhost:8000/images/${food.image}`} alt={food.name || "food"} />
          ) : (
            <div style={{width: 200, height: 200, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Không có ảnh</div>
          )}
        </div>
        <div className="product-detail-info-col">
          <div className="product-detail-title-kfc">{food.name || "(Không có tên)"}</div>
          <div className="product-detail-desc-kfc">{food.description || "(Không có mô tả)"}</div>
          <div className="product-detail-price-row">
            {food.oldPrice && (
              <span className="product-detail-oldprice">{food.oldPrice}$</span>
            )}
            <span className="product-detail-price">{food.price}$</span>
          </div>
          <hr className="product-detail-divider" />
          <div className="product-detail-section-label">MÓN CỦA BẠN</div>
          <div className="product-detail-meta">{food.meta || "1 phần " + food.name}</div>
          
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
