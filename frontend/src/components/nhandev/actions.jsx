import {
  ADD_TO_CART,
  RESET_QUANTITY,
  TOGGLE_ADDED_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  PAY_CART,
} from "./actionTypes";
import axios from "axios";
import mongoose from 'mongoose';

axios.defaults.baseURL = "http://localhost:3001";
const sendProductDataToServer = async (productData) => {
  try {
    const response = await axios.post("/product", productData);
    console.log("Product saved to database:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving product to database:", error);
    throw error;
  }
};
export const saveProductToDatabase = (productData) => async (dispatch) => {
  try {
    // Thay đổi trường productId thành id
    const modifiedProductData = { ...productData, productId: productData.id };
    delete modifiedProductData.id;

    console.log(modifiedProductData);
    await sendProductDataToServer(modifiedProductData);
    // dispatch({ type: ADD_TO_CART, payload: response.data });
  } catch (error) {
    console.error("Error saving product to database:", error);
  }
};

// Hàm helper để tăng số lượng sản phẩm
export const increaseQuantity = (productId) => async (dispatch) => {
  try {
    // Lấy thông tin sản phẩm từ server (ở đây chỉ giả sử là productId)
    const productData = { productId, quantityInCart: 1 };
    await sendProductDataToServer(productData);
    // Dispatch action tăng số lượng sản phẩm
    dispatch({
      type: INCREASE_QUANTITY,
      payload: productId,
    });
  } catch (error) {
    console.error("Error increasing quantity:", error);
  }
};

// Hàm helper để giảm số lượng sản phẩm
export const decreaseQuantity = (productId) => async (dispatch) => {
  try {
    // Lấy thông tin sản phẩm từ server (ở đây chỉ giả sử là productId)
    const productData = { productId, quantityInCart: -1 };
    await sendProductDataToServer(productData);
    // Dispatch action giảm số lượng sản phẩm
    dispatch({
      type: DECREASE_QUANTITY,
      payload: productId,
    });
  } catch (error) {
    console.error("Error decreasing quantity:", error);
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    // Tạo modifiedProductData với trường productId
    const modifiedProductData = { productId: productId };
    // Gửi yêu cầu xóa sản phẩm khỏi server, gửi modifiedProductData như một phần của dữ liệu gửi đi
    await axios.delete(`/product`, { data: modifiedProductData });
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productId,
    });
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
};
export const payCart = (productData) => async (dispatch) => {
  try {
    // Chuyển đổi cấu trúc của productData
    const transformedData = {
      // idProductInCart: productData.idProductInCart.map(id => mongoose.Types.ObjectId(id)),
      totalQuantity: productData.totalQuantity,
      discount: productData.discount,
      idUser: productData.idUser,
      totalPrice: productData.totalPrice
    };
    console.log(transformedData);
    // Gửi yêu cầu POST với dữ liệu đã chuyển đổi
    await axios.post(`/cart`, transformedData);

    // Dispatch action xóa sản phẩm khỏi giỏ hàng
    dispatch({
      type: PAY_CART,
      payload: transformedData,
    });
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
};



export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const resetQuantity = () => ({
  type: RESET_QUANTITY,
});

export const toggleAddedToCart = () => ({
  type: TOGGLE_ADDED_TO_CART,
});
