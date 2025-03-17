import { Router } from "express";
import auth from "../middleware/auth.mid.js";
import { login, register, updateProfile } from "../controllers/user.js";

const router = Router();

// routes
router.post("/login", login);
router.post("/register", register);
router.put("/updateProfile", auth, updateProfile);

export default router;
