import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import singleProductReducer from "./reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["singleProduct"], // only singleProductReducer will be persisted
};
const rootReducer = combineReducers({
  singleProduct: singleProductReducer,
});

export default persistReducer(persistConfig, rootReducer);
