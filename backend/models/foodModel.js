import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

// Tạo thuộc tính `id` ánh xạ từ `_id`
foodSchema.virtual("formattedId").get(function () {
    const typeMap = {
      "Drink": "DRIK",
      "Salad": "SALD",
      "Pizza": "PIZA",
    };
  
    const typeCode = typeMap[this.category] || "UNKN"; // Mặc định là "UNKN" nếu không khớp
    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase(); // 4 ký tự ngẫu nhiên
    return `FOOD${typeCode}${randomCode}`;
  });

const foodModel = mongoose.models.food || mongoose.model("Food", foodSchema);

export default foodModel;