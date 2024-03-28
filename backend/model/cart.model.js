import mongoose from "mongoose";

const productInCartSchema = mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantityInCart: { type: Number }
});


const cartSchema = mongoose.Schema({
  idProductInCart: [productInCartSchema],
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  discount: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  totalQuantity: {
    type: Number,
  },
});

const CartModel = mongoose.model("Cart", cartSchema);

export default CartModel;

