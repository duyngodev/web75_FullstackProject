import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
import { getProductById, buyProduct } from "../controller/product.controller.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
} from "../controller/cart.controller.js";

const productRouter = express.Router();
productRouter.route("/").get().post().put().delete();
productRouter
  .route("/:productId")
  .get(tryCatch(getProductById))
  .post()
  .put(tryCatch(buyProduct))
  .delete();
export { productRouter };
