import { Router } from "express";
import handler from "express-async-handler";
import { FoodModel } from "../models/food.model.js";

const router = Router();

router.get(
    "/",
    handler(async (req, res) => {
        // getting all foods
        const foods = await FoodModel.find({});
        console.log(foods);
        res.send(foods);
    })
);

router.get(
    "/:foodId",
    handler(async (req, res) => {
        const { foodId } = req.params;

        const food = await FoodModel.findById(foodId);
        res.send(food);
    })
);

export default router;
