import { combineReducers } from "redux";
import orders from "./Orders";
import products from "./products";
import categories from "./Categories";

export default combineReducers({
    orders,
    products,
    categories,
});
