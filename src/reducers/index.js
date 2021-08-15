import { combineReducers } from "redux";
import orders from "./Orders";
import products from "./Products";
import categories from "./Categories";

export default combineReducers({
    orders,
    products,
    categories,
});
