import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = 8000;

app.get("/products", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
