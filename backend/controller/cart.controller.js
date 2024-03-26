import cartModel from "../model/cart.model.js";
import productInCartModel from "../model/productInCart.model.js";
import mongoose from 'mongoose';

export const getAllCart = async (req, res, next) => {
  try {
    const carts = await cartModel.find().populate("idProductInCart");
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

export const getCartById = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    const cart = await cartModel.findById(cartId).populate("idProductInCart");

    if (!cart) {
      return res.status(404).send("Cart not found");
    }

    // Tính totalQuantity và totalPrice dựa trên idProductInCart
    const aggregateResult = await cartModel.aggregate([
      { $match: { _id: cart._id } },
      { $unwind: "$idProductInCart" },
      {
        $lookup: {
          from: "ProductInCart",
          localField: "idProductInCart",
          foreignField: "_id",
          as: "productInCart"
        }
      },
      { $unwind: "$productInCart" },
      {
        $lookup: {
          from: "Product",
          localField: "productInCart.productId",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" },
      {
        $group: {
          _id: "$_id",
          totalQuantity: { $sum: "$productInCart.quantityInCart" },
          totalPrice: { $sum: { $multiply: ["$product.price", "$productInCart.quantityInCart"] } }
        }
      }
    ]);
    if (aggregateResult.length > 0) {
      cart.totalQuantity = aggregateResult[0].totalQuantity;
      cart.totalPrice = aggregateResult[0].totalPrice;
    }

    res.status(200).send(cart);
  } catch (error) {
    next(error);
  }
};

export const payCart = async (req, res, next) => {
  try {
    // 1. Lấy thông tin từ yêu cầu
    const { idProductInCart, totalQuantity, discount, idUser, totalPrice } = req.body;
    console.log(idProductInCart, totalQuantity, discount, idUser, totalPrice);
    // 2. Tạo mới giỏ hàng
    const newCart = await cartModel.create({
      _id: new mongoose.Types.ObjectId(),
      idProductInCart,
      idUser,
      totalQuantity,
      discount,
      totalPrice
    });

    // 3. Lưu giỏ hàng vào cơ sở dữ liệu
    const savedCart = await newCart.save();

    // 4. Trả về kết quả
    return res.status(200).json({ message: "Cart created successfully", cart: savedCart });
  } catch (error) {
    // Xử lý lỗi nếu có
    next(error);
  }
};


export const cancelPayProduct = async (req, res, next) => {
    try {
      
    } catch (error) {
      next(error);
    }
};

export const deleteAllCart = async (req, res, next) => {
  try {
    const deletedItems = await cartModel.deleteMany({});
    return res.status(200).json({ message: "Xóa giỏ hàng thành công", deletedItems });
  } catch (error) {
    next(error);
  }
};
