import productModel from "../model/product.model.js";
import productInCartModel from "../model/productInCart.model.js";
import cartModel from "../model/cart.model.js";

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
    const productId = req.params.productId;
    const quantityInCart = req.body.quantityInCart;

    // Kiểm tra xem productId có tồn tại trong cơ sở dữ liệu không
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (!quantityInCart) {
      return res.status(400).json({ message: "Quantity is required" });
    }

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    let productInCart = await productInCartModel.findOne({ productId });

    if (productInCart) {
      // Nếu sản phẩm đã tồn tại, cập nhật lại số lượng
      productInCart.quantityInCart += parseInt(quantityInCart);
      await productInCart.save();
    } else {
      // Nếu sản phẩm chưa tồn tại, tạo mới
      productInCart = await productInCartModel.create({
        productId,
        quantityInCart
      });
    }

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng (cart) chưa
    const cart = await cartModel.findOne({});
    const isProductExistInCart = cart.idProductInCart.some(id => id.equals(productInCart._id));

    // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào
    if (!isProductExistInCart) {
      cart.idProductInCart.push(productInCart._id);
      await cart.save();
    }

    res.status(201).json({ message: "Product added to cart successfully" });
  } catch (error) {
    next(error);
  }
};


