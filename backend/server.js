import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import drinkRouter from "./routes/drinkRoute.js";

//app config
const app = express();
const port = 8000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter) 
app.use("/api/Drink", drinkRouter)
app.use("/images", express.static('uploads'));

app.get("/", (req, res) => {
    res.send("API is running...")
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

//mongodb+srv://binh1:123@cluster0.ggqj0ub.mongodb.net/?  
