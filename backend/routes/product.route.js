import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
import { getAllProduct,getProductById, buyProduct } from "../controller/product.controller.js";

const productRouter = express.Router();
productRouter
  .route("/")
  .get(tryCatch(getAllProduct))
  .post()
  .put()
  .delete();
productRouter
  .route("/:productId")
  .get(tryCatch(getProductById))
  .post(tryCatch(buyProduct))
  .put()
  .delete();
export { productRouter };
