import { Router } from "express";
import { getAllFoods, getFood } from "../controllers/food.js";

const router = Router();

router.get("/", getAllFoods);
router.get("/:foodId", getFood);

export default router;
