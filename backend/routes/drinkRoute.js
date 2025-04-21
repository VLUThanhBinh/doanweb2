import express from "express";
import { listDrink, addDrink } from "../controllers/drinkController.js";

const router = express.Router();

router.get("/list", listDrink);
router.post("/add", addDrink);

export default router;
