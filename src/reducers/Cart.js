import {
  ADD_DISH,
  UPDATE_DISH,
  DELETE_DISH,
  ADD_ITEMS_TO_CART,
} from "../constants/ActionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DISH:
      return [...state, action.payload];
    case UPDATE_DISH:
      return state.map((dish) =>
        dish.id === action.payload.id ? action.payload : dish
      );
    case ADD_ITEMS_TO_CART:
      return action.payload;
    case DELETE_DISH:
      return state.filter((dish) => dish.id !== action.payload.id);
    default:
      return state;
  }
};

export default productReducer;
