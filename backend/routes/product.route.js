import express from "express";
import { getAllProducts, createProduct, getProductById, buyProduct, filterProduct } from "../controller/product.controller.js";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {
  getCartById,
  payCart,
  cancelPayProduct,
} from "../controller/cart.controller.js";


const productRouter = express.Router();

productRouter.get("/filter", tryCatch(filterProduct))

productRouter
  .route("/:productId")
    .get(tryCatch(getProductById))
    .post()
    .put(tryCatch(buyProduct))
    .delete();


productRouter
  .route("/")
    .get(tryCatch(getAllProducts))
    .post(tryCatch(createProduct))
    .put()
    .delete();


export { productRouter };