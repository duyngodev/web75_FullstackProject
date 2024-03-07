import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
import {getProductInCartById} from"../controller/productInCart.controller.js"
const productInCartRouter = express.Router();

productInCartRouter
    .route("/")
    .get()
    .post()
    .put()
    .delete();
productInCartRouter
  .route("/:productInCartId")
  .get(getProductInCartById)
  .post()
  .put()
  .delete();
export { productInCartRouter };