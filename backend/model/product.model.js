import mongoose from "mongoose";

const productSchema = mongoose.Schema({
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

const ProductModel = mongoose.model("Product", productSchema);

export { ProductModel };
