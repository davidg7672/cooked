import { upload } from "../controllers/upload.js";
import adminMid from "../middleware/admin.mid";
import multer from "multer";
import Router from "express";

const router = Router();
const upload = multer();

router.post("/", adminMid, upload.single("image"), upload);

export default router;
