import express from "express";
// controller import
import { getDefault, postDefault } from "../controller/default.controller.js";
// middleware import
import { tryCatch } from "../middlewares/tryCatch.middleware.js";

const router = express.Router();

router
  .route("/")
  // .all()  => middleware apply for all methods
  //   .get(/* middleware, function */)
  .get(tryCatch(getDefault))
  .post(tryCatch(postDefault))
  .put()
  .delete();

router
  .route("/login")
//   .post(tryCatch(postDefault))       with middleware validation login

router
  .route("/register")
//   .post(tryCatch(postDefault))       with middleware validation register

router
  .route("/logout")
//   .post(tryCatch(postDefault))

export { router as defaultRouter };
