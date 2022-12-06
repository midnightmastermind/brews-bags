import { combineReducers } from "redux";
import productReducer from "./productReducer";
import serviceReducer from "./serviceReducer";
import userReducer from "./userReducer";
export default combineReducers({
  products: productReducer,
  services: serviceReducer,
  users: userReducer
});
