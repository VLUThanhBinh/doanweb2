import foodModel from "../models/foodModel.js";

// Thêm món ăn
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();
    res.status(201).json({ success: true, message: "Food added successfully", food });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to add food item" });
  }
};

// Lấy danh sách món ăn
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch food items" });
  }
};

// Lấy chi tiết món ăn
const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    res.status(200).json({
      success: true,
      data: {
        ...food.toObject(),
        formattedId: food.formattedId, // Thêm ID định dạng mới
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch food item" });
  }
};

// Xóa món ăn
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findByIdAndDelete(id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    res.status(200).json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to delete food item" });
  }
};

// Sửa món ăn
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const food = await foodModel.findByIdAndUpdate(id, updates, { new: true });

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    res.status(200).json({ success: true, message: "Food item updated successfully", data: food });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to update food item" });
  }
};

// Export các hàm
export { addFood, listFood, getFoodById, deleteFood, updateFood };