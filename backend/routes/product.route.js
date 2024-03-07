import express from "express";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {
  getAllProduct,
  getProductById,
  buyProduct,
} from "../controller/product.controller.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
} from "../controller/cart.controller.js";

const productRouter = express.Router();
productRouter
  .route("/")
  .get(tryCatch(getAllProduct))
  .post()
  .put()
  .delete();
productRouter
  .route("/:productId")
  .get(tryCatch(getProductById))
  .post(tryCatch(buyProduct))
  .put()
  .delete();
export { productRouter };
