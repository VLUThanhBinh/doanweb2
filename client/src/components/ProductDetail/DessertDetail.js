import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css"; // Import CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DessertDetail = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate(); // Điều hướng khi cần
  const [dessert, setDessert] = useState(null);
  

  // Lấy dữ liệu món ăn từ API
  useEffect(() => {
    const fetchDessert = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/food/${id}`);
        setDessert(response.data.data);
      } catch (error) {
        console.error("Failed to fetch dessert:", error);
        toast.error("Failed to fetch dessert details!");
        navigate("/Desserts");
      }
    };

    fetchDessert();
  }, [id, navigate]);

  if (!dessert) {
    return <h2>Loading...</h2>;
  }

  

  return (
    <>
      <ToastContainer />
      <div className="product-detail-kfc-wrapper">
        <div className="product-detail-img-col">
          <img src={`http://localhost:8000/images/${dessert.image}`} alt={dessert.name} />
        </div>
        <div className="product-detail-info-col">
          <div className="product-detail-title-kfc">{dessert.name}</div>
          <div className="product-detail-desc-kfc">{dessert.description}</div>
          <div className="product-detail-price-row">
            {dessert.oldPrice && (
              <span className="product-detail-oldprice">{dessert.oldPrice}$</span>
            )}
            <span className="product-detail-price">{dessert.price}$</span>
          </div>
          <hr className="product-detail-divider" />
          <div className="product-detail-section-label">MÓN CỦA BẠN</div>
          <div className="product-detail-meta">{dessert.meta || "1 phần " + dessert.name}</div>
          
        </div>
      </div>
    </>
  );
};

export default DessertDetail;