import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
import { getAllProducts, createProduct, getProductById, buyProduct } from "../controller/product.controller.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
} from "../controller/cart.controller.js";

const productRouter = express.Router();
productRouter
  .route("/")
    .get(tryCatch(getAllProducts))
    .post(tryCatch(createProduct))
    .put()
    .delete();
productRouter
  .route("/:productId")
    .get(tryCatch(getProductById))
    .post()
    .put(tryCatch(buyProduct))
    .delete();
