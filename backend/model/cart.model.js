import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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

const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
