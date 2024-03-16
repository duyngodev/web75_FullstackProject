import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  quantityProducts: [
    {
      type: String,
    },
  ],
  priceProducts: [
    {
      type: String,
    },
  ],
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

