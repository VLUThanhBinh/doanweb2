import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://binh1:123@cluster0.ggqj0ub.mongodb.net/webfartfood').then(()=>console.log("MongoDB connected..."));
}