import foodModel from "../models/foodModel.js";
import drinkModel from "../models/drinkModel.js";

// Tìm kiếm toàn cục cho cả food và drink
const searchGlobal = async (req, res) => {
  try {
    const query = req.query.query || "";
    const regex = new RegExp(query, "i");

    const foods = await foodModel.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex }
      ]
    });
    const drinks = await drinkModel.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex }
      ]
    });

    res.json({
      success: true,
      foods,
      drinks
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Search failed" });
  }
};

export { searchGlobal };
