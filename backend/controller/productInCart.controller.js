import { ProductInCartModel } from "../model/productInCart.model";

export const getProductInCartById = async (req, res, next) => {
  try {
    const productInCartId = req.params.productInCartId;
    const productInCart = await ProductInCartModel.findById(productInCartId);
    if (!productInCart) {
      return res.status(404).send("Payment not found");
    }
    res.status(200).send(productInCart);
  } catch (error) {
    next(error);
  }
};