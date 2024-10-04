import express from "express";
import { createOrder,findById,deleteOrder , findOrderLast } from "../../controller/restaurant/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/find/:id", findById);
router.get("/findlast/:table_id", findOrderLast);
router.delete("/delete/:id", deleteOrder);

export default router;
