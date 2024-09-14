import express from "express";
import {
  createProduct,
  filterProduct,
  findById,
  deleteProduct,
  editProduct,
} from "../../controller/shopingStore/productController.js";

const router = express.Router();

router.post("/create/", createProduct);
router.get("/find/:id", findById);
router.get("/filter/:keyword", filterProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/edit/:id", editProduct);

export default router;
