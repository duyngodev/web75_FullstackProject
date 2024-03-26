import express from "express";
import { getAllProducts, createProduct, getProductById, buyProduct, filterProduct } from "../controller/product.controller.js";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import {
  getAllProduct,
  getProductById,
  buyProduct,
  deleteProductInCartById
} from "../controller/product.controller.js";
const productRouter = express.Router();

productRouter.get("/filter", tryCatch(filterProduct))

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


productRouter
  .route("/")
    .get(tryCatch(getAllProducts))
    .post(tryCatch(createProduct))
    .put()
    .delete();


export { productRouter };