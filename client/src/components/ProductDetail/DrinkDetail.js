import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrinkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [drink, setDrink] = useState(null);
  

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/food/${id}`);
        setDrink(response.data.data);
      } catch (error) {
        console.error("Failed to fetch drink:", error);
        toast.error("Không thể tải dữ liệu thức uống!");
      }
    };

    fetchDrink();
  }, [id, navigate]);

  if (!drink) {
    return <h2>Đang tải dữ liệu thức uống...</h2>;
  }

  

  return (
    <>
      <ToastContainer />
      <div className="product-detail-kfc-wrapper">
        <div className="product-detail-img-col">
          {drink.image ? (
            <img src={`http://localhost:8000/images/${drink.image}`} alt={drink.name || "drink"} />
          ) : (
            <div style={{width: 200, height: 200, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Không có ảnh</div>
          )}
        </div>
        <div className="product-detail-info-col">
          <div className="product-detail-title-kfc">{drink.name || "(Không có tên)"}</div>
          <div className="product-detail-desc-kfc">{drink.description || "(Không có mô tả)"}</div>
          <div className="product-detail-price-row">
            {drink.oldPrice && (
              <span className="product-detail-oldprice">{drink.oldPrice}$</span>
            )}
            <span className="product-detail-price">{drink.price}$</span>
          </div>
          <hr className="product-detail-divider" />
          <div className="product-detail-section-label">MÓN CỦA BẠN</div>
          <div className="product-detail-meta">{drink.meta || "1 phần " + drink.name}</div>
          
        </div>
      </div>
    </>
  );
};

export default DrinkDetail;
