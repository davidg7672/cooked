import { Router } from "express";
import auth from "../middleware/auth.mid.js";
import {
    create,
    pay,
    trackOrder,
    newOrderForCurrentUser,
    allStatus,
    status,
} from "../controllers/order.js";

const router = Router();

router.use(auth);

router.post("/create", create);
router.put("/pay", pay);
router.get("/track/:orderId", trackOrder);
router.get("/newOrderForCurrentUser", newOrderForCurrentUser);
router.get("/allstatus", allStatus);
router.get("/:status?", status);

export default router;
