// singleProductReducer.js
import { ADD_TO_CART, RESET_QUANTITY, TOGGLE_ADDED_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,PAY_CART  } from "./actionTypes";

const initialState = {
  cart: [],
  quantity: 0,
  isAddedToCart: false,
};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productToStore = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === productToStore.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantityInCart +=
          productToStore.quantityInCart;
        return { ...state, cart: updatedCart, isAddedToCart: true };
      } else {
        return {
          ...state,
          cart: [...state.cart, productToStore],
          isAddedToCart: true,
        };
      }
    case RESET_QUANTITY:
      return { ...state, quantity: 1 };
    case TOGGLE_ADDED_TO_CART:
      return { ...state, isAddedToCart: false };
    case REMOVE_FROM_CART:
      const productIdToRemove = action.payload;
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== productIdToRemove)
      };
    case INCREASE_QUANTITY:
      const productIdToIncrease = action.payload;
      const increasedCart = state.cart.map(item => {
        if (item.id === productIdToIncrease) {
          return { ...item, quantityInCart: item.quantityInCart + 1 };
        }
        return item;
      });
      return { ...state, cart: increasedCart };
    case DECREASE_QUANTITY:
      const productIdToDecrease = action.payload;
      const decreasedCart = state.cart.map(item => {
        if (item.id === productIdToDecrease && item.quantityInCart > 1) {
          return { ...item, quantityInCart: item.quantityInCart - 1 };
        }
        return item;
      });
      return { ...state, cart: decreasedCart };
    case PAY_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default singleProductReducer;
