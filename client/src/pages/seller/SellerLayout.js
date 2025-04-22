import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SellerLayout.css";

const SellerLayout = () => {
  // ...
  // Hàm xóa sản phẩm
  const handleDeleteFood = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/food/${id}`);
      setFoods(foods.filter((item) => item._id !== id));
      alert("Đã xóa sản phẩm thành công");
    } catch (error) {
      console.error("Failed to delete food:", error);
      alert("Xóa sản phẩm thất bại");
    }
  };
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("add");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/food/list");
        setFoods(response.data.data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      }
    };

    fetchFoods();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "image" && formData.image) {
        formDataToSend.append("image", formData.image);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/food/add",
        formDataToSend
      );
      alert(response.data.message);
      setFoods([...foods, response.data.food]);
      setFormData({ name: "", description: "", price: "", category: "", image: null });
    } catch (error) {
      console.error("Failed to add food:", error);
      alert("Failed to add food");
    }
  };

  const handleEdit = (food) => {
    setEditId(food._id);
    setFormData({
      name: food.name,
      description: food.description,
      price: food.price,
      category: food.category,
      image: null,
    });
    setActiveTab("update");
  };

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        category: formData.category,
      };

      const response = await axios.put(
        `http://localhost:8000/api/food/${editId}`,
        updateData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message);

      const updatedFoods = foods.map((item) =>
        item._id === editId ? response.data.data : item
      );
      setFoods(updatedFoods);

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      setEditId(null);
      setActiveTab("list");
    } catch (error) {
      console.error("Failed to update food:", error);
      alert("Failed to update food");
    }
  };

  return (
    <div className="seller-layout">
      <div className="seller-sidebar">
        <ul>
          <li className={activeTab === "add" ? "active" : ""} onClick={() => setActiveTab("add")}>Add Product</li>
          <li className={activeTab === "list" ? "active" : ""} onClick={() => setActiveTab("list")}>Product List</li>
          <li className={activeTab === "update" ? "active" : ""} onClick={() => setActiveTab("update")}>Update</li>
        </ul>
      </div>

      <div className="seller-content">
        {(activeTab === "add" || activeTab === "update") && (
          <form className="food-form" onSubmit={activeTab === "add" ? handleAddFood : handleUpdateFood}>
            <h2>{activeTab === "add" ? "Add Product" : "Update Product"}</h2>
            {activeTab === "add" && (
              <div className="form-group">
                <label>Product Image</label>
                <input type="file" name="image" accept="image/*" onChange={handleChange} required />
              </div>
            )}
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Product Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Drink">Drink</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>
            <div className="form-group">
              <label>Product Price</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <button type="submit" className="add-button">
              {activeTab === "add" ? "ADD" : "UPDATE"}
            </button>
          </form>
        )}

        {activeTab === "list" && (
          <div className="food-list">
            <h2>Product List</h2>
            <input
              type="text"
              placeholder="Tìm kiếm theo tên sản phẩm..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ marginBottom: 20, padding: 8, width: '100%', borderRadius: 6, border: '1px solid #ccc' }}
            />
            {foods
              .filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((food) => (
                <div key={food._id} className="food-item">
                  <img src={`http://localhost:8000/images/${food.image}`} alt={food.name} />
                  <div>
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>
                    <p>Price: {food.price}đ</p>
                    <p>Category: {food.category}</p>
                    <button onClick={() => handleEdit(food)}>Chỉnh sửa</button>
                    <button className="delete-button" onClick={() => handleDeleteFood(food._id)}>Xóa</button>
                  </div>
                </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerLayout;
