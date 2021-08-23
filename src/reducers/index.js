import { combineReducers } from "redux";
import orders from "./Orders";
import products from "./Product";
import categories from "./Categories";
import cart from "./Cart";

export default combineReducers({
    orders,
    products,
    categories,
    cart,
});
