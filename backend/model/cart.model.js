import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  idProductInCart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductInCart'
  }],
  idUser:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  discount: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  totalQuantity: {
    type: Number
  }
});

const CartModel = mongoose.model("Cart", cartSchema);

export default CartModel;
