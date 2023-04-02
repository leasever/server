import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/:id", getProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

export { router };
