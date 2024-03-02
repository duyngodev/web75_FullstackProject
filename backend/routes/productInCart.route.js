import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
const productInCartRouter = express.Router();

productInCartRouter
    .route("/")
    .get()
    .post()
    .put()
    .delete();
productInCartRouter
  .route("/:productInCartId")
  .get()
  .post()
  .put()
  .delete();
export { productInCartRouter };