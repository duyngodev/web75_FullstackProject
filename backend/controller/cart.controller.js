import { ProductModel } from "../model/product.model.js";
import { CartModel } from "../model/cart.model.js";

export const getCartById = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const cart = await ProductModel.findById(cartId);
    if (!cart) {
      return res.status(404).send("Cart not found");
    }
    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export const payCart = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};
export const cancelPayProduct = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
};


