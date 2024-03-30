import express from "express";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {getProductInCartById, deleteAllProductInCart} from"../controller/productInCart.controller.js"
const productInCartRouter = express.Router();

productInCartRouter
    .route("/")
    .get()
    .post()
    .put()
    .delete(tryCatch(deleteAllProductInCart));
productInCartRouter
  .route("/:productInCartId")
  .get(getProductInCartById)
  .post()
  .put()
  .delete();
export { productInCartRouter };