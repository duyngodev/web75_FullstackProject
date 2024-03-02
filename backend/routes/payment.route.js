import express from "express";
import { tryCatch } from "../middlewares/tryCatch.middleware.js";
const paymentRouter = express.Router();

paymentRouter
    .route("/")
    .get()
    .post()
    .put()
    .delete();
paymentRouter
  .route("/:paymentId")
  .get()
  .post()
  .put()
  .delete();
  paymentRouter
  .route("/:paymentId/:userId")
  .get()
  .post()
  .put()
  .delete();
export { paymentRouter };