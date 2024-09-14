import express from "express";
import { createOrder,findById,filterOrder,deleteOrder,editOrder } from "../../controller/shopingStore/orderController.js";

const router = express.Router();

router.post("/create/", createOrder);
router.get("/find/:id", findById);
router.get("/filter/:keyword", filterOrder);
router.delete("/delete/:id", deleteOrder);
router.put("/edit/:id", editOrder);

export default router;
