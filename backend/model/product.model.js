import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  imgURL1: {
    type: String,
  },
  imgURL2: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  newProduct: {
    type: Boolean,
  },
  bestSeller: {
    type: Boolean,
  },
  quantity: {
    type: Number,
  }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
