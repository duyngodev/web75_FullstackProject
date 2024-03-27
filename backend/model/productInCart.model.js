import mongoose from "mongoose";

const productInCartSchema = mongoose.Schema({
  productId: { type: String },
  quantityInCart: { type: Number },
});

const productInCartModel = mongoose.model("ProductInCart", productInCartSchema);
export default productInCartModel;
