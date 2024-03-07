import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
  getAllCart,
} from "../controller/cart.controller.js";

const cartRouter = express.Router();
cartRouter
  .route("/")
  .get(tryCatch(getAllCart))
  .post()
  .put()
  .delete();
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
