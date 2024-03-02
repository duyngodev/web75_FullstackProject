import mongoose from "mongoose";

const productInCartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: { type: String},
    quantityInCart: { type: String},
  });
  
const productInCartModel = mongoose.model('ProductInCart', productInCartSchema);
export default productInCartModel;
  
