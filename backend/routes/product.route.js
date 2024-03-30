import express from "express";
import {
  getAllProduct,
  getAllProducts,
  createProduct,
  getProductById,
  buyProduct,
  filterProduct,
  updateProduct,
  deleteProductById,
} from "../controller/product.controller.js";
import { tryCatch } from "../Utils/tryCatch.middleware.js";
import { deleteAllProductInCart } from "../controller/productInCart.controller.js";
import { requireUser } from "../middlewares/requireUser.middleware.js";
const productRouter = express.Router();

productRouter
  .route("/filter")
  .get(tryCatch(getAllProducts))
  .post(tryCatch(createProduct))
  .put()
  .delete();

productRouter
  .route("/")
  .get(tryCatch(getAllProduct))
  .post(tryCatch(buyProduct))
  .put( tryCatch(updateProduct))
  .delete(tryCatch(deleteAllProductInCart));

productRouter
  .route("/:productId")
  .get(tryCatch(getProductById))
  .post()
  .put()
  .delete(tryCatch(deleteProductById));

export { productRouter };
