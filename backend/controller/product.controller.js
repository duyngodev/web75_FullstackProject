import productModel from "../model/product.model.js";
import productInCartModel from "../model/productInCart.model.js";
export const getAllProduct = async (req, res, next) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
    try {
      const productId = req.params.productId;
      const product = await productModel.findById(productId);
      console.log(product);
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
      const productId = req.body.productId;
      const quantityInCart = req.body.quantityInCart;

      let productInCart = await productInCartModel.findOne({ productId });
  
      if (productInCart) {
        productInCart.quantityInCart += parseInt(quantityInCart);
      } else {
        productInCart = await productInCartModel.create({
          productId,
          quantityInCart
        });
      }
  
      // Lưu thay đổi vào cơ sở dữ liệu
      await productInCart.save();
  
      // Trả về kết quả thành công
      res.status(201).json({ message: "Product added to cart successfully" });
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error("Error adding product to cart:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  export const deleteProductInCartById = async (req, res, next) => {
    try {
      const productId = req.body.productId;
      const deletedItem = await productInCartModel.findOneAndDelete({ productId });
      console.log(deletedItem);
      if (!deletedItem) {
        return res.status(404).json({ message: "Sản phẩm không tồn tại trong giỏ hàng" });
      }
      return res.status(200).json({ message: "Xóa sản phẩm thành công", deletedItem });
    } catch (error) {
      next(error);
    }
  };
  