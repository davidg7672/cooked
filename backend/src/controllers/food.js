import { FoodModel } from "../models/food.model";
import handler from "express-async-handler";

export const getAllFoods = handler(async (req, res) => {
    const foods = await FoodModel.find({});
    console.log(foods);
    res.send(foods);
});

export const getFood = handler(async (req, res) => {
    const { foodId } = req.params;
    const food = await FoodModel.findById(foodId);
    res.send(food);
});
