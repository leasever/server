import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/product.controller";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/:id", logMiddleware, getProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

export { router };
