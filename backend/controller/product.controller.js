import ProductModel  from "../model/product.model.js";
import CartModel from "../model/cart.model.js";

export const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export const buyProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
