import express from "express";
import {
  createMenu,
  findById,
  deleteMenu,
  editMenu,
  getMenu,
} from "../../controller/restaurant/menuController.js";

const router = express.Router();

router.post("/create", createMenu);
router.get("/find/:id", findById);
router.delete("/delete/:id", deleteMenu);
router.put("/edit/:id", editMenu);
router.get("/find/menu/:store_id/:category", getMenu);
// router.get("/findAll/:store_id",  getProductList);

export default router;
