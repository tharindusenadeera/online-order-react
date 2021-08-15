import { combineReducers } from "redux";
import order from "./order";
import products from "./products";

export default combineReducers({
    order,
    products,
});
