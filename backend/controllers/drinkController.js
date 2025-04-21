import drinkModel from "../models/drinkModel.js";

// Lấy danh sách đồ uống
const listDrink = async (req, res) => {
  try {
    const drinks = await drinkModel.find({});
    res.json({ success: true, data: drinks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch drinks" });
  }
};

// Thêm đồ uống
const addDrink = async (req, res) => {
  try {
    const drink = new drinkModel(req.body);
    await drink.save();
    res.status(201).json({ success: true, drink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to add drink" });
  }
};

export { listDrink, addDrink };
