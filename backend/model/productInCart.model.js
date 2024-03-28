import mongoose from "mongoose";

const productInCartSchema = mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  productId: { type: String },
  quantityInCart: { type: Number },
});

const productInCartModel = mongoose.model("ProductInCart", productInCartSchema);
export default productInCartModel;
