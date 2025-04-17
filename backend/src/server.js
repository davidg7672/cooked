import dotenv from "dotenv";
dotenv.config();
import foodRouter from "./routers/food.router.js";
import userRouter from "./routers/user.router.js";
import cors from "cors";
import express from "express";
import { connectDB } from "./config/database.config.js";

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

// listening on port 5001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
