import express from "express";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {
  getProductById,
  buyProduct,
} from "../controller/product.controller.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
} from "../controller/cart.controller.js";

const cartRouter = express.Router();
cartRouter.route("/").get().post().put().delete();
cartRouter
  .route("/:cartId")
  .get(tryCatch(getCartById))
  .post()
  .put(tryCatch(payCart))
  .delete();
cartRouter
  .route("/:cartId/:productId")
  .get()
  .post()
  .put(tryCatch(cancelPayProduct))
  .delete();
export { cartRouter };
