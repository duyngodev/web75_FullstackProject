import express from "express";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {
  getAllProduct,
  getProductById,
  buyProduct,
  deleteProductInCartById
} from "../controller/product.controller.js";
const productRouter = express.Router();
productRouter
  .route("/")
  .get(tryCatch(getAllProduct))
  .post(tryCatch(buyProduct))
  .put()
  .delete(tryCatch(deleteProductInCartById));
productRouter
  .route("/:productId")
  .get(tryCatch(getProductById))
  .post()
  .put()
  .delete();
export { productRouter };
