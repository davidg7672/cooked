import dotenv from "dotenv";
dotenv.config();
import foodRouter from "./routers/food.router.js";
import userRouter from "./routers/user.router.js";
import orderRouter from "./routers/order.router.js";
import uploadRouter from "./routers/upload.router.js";
import cors from "cors";
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/database.config.js";

connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);

const publicFolder = path.join(__dirname, "public");
app.use(express.static(publicFolder));

app.get("*", (req, res) => {
    const indexFilePath = path.join(publicFolder, "index.html");
    res.sendFile(indexFilePath);
});

// listening on port 5001
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
