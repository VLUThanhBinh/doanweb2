import express from "express";
import {
  addFood,
  listFood,
  getFoodById,
  deleteFood,
  updateFood,
} from "../controllers/foodController.js";
import multer from "multer";

const router = express.Router();

// Cấu hình multer để upload ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addFood); // Thêm món ăn
router.get("/list", listFood); // Lấy danh sách món ăn
router.get("/:id", getFoodById); // Lấy chi tiết món ăn
router.delete("/:id", deleteFood); // Xóa món ăn
router.put("/:id", updateFood); // Sửa món ăn

export default router;