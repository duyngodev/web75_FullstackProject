import productInCartModel from "../model/productInCart.model.js";
export const getProductInCartById = async (req, res, next) => {
  try {
    const productInCartId = req.params.productInCartId;
    const productInCart = await productInCartModel.findById(productInCartId);
    if (!productInCart) {
      return res.status(404).send("Payment not found");
    }
    res.status(200).send(productInCart);
  } catch (error) {
    next(error);
  }
};
export const deleteAllProductInCart = async (req, res, next) => {
  try {
    const deletedItems = await productInCartModel.deleteMany({});
    return res.status(200).json({ message: "Xóa hàng thành công", deletedItems });
  } catch (error) {
    next(error);
  }
};
