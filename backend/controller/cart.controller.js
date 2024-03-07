import cartModel from "../model/cart.model.js";

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


