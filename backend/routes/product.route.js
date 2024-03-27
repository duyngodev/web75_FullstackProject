import express from "express";
import { getAllProduct,getAllProducts, createProduct, getProductById, buyProduct, filterProduct } from "../controller/product.controller.js";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {deleteAllProductInCart} from "../controller/productInCart.controller.js"
const productRouter = express.Router();

productRouter.get("/filter", tryCatch(filterProduct))

productRouter
  .route("/")
  .get(tryCatch(getAllProduct))
  .post(tryCatch(buyProduct))
  .put()
  .delete(tryCatch(deleteAllProductInCart));
productRouter
  .route("/:productId")
    .get(tryCatch(getProductById))
    .post()
    .put()
    .delete();


productRouter
  .route("/")
    .get(tryCatch(getAllProducts))
    .post(tryCatch(createProduct))
    .put()
    .delete();


export { productRouter };