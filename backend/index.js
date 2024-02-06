import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { routeFactory } from "./routes/index.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(morgan("combined"));

routeFactory(app);
mongoose.connect(process.env.MONGO_URI).then(
  app.listen(process.env.PORT, () => {
    console.log("Server is connecting");
  })
);
