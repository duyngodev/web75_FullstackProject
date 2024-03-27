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
  getAllCart,
  deleteAllCart
} from "../controller/cart.controller.js";

const cartRouter = express.Router();
cartRouter
  .route("/")
  .get(tryCatch(getAllCart))
  .post(tryCatch(payCart))
  .put()
  .delete(tryCatch(deleteAllCart));
cartRouter
  .route("/:cartId")
  .get(tryCatch(getCartById))
  .post()
  .put()
  .delete();
cartRouter
  .route("/:cartId/:productId")
  .get()
  .post()
  .put(tryCatch(cancelPayProduct))
  .delete();
export { cartRouter };
