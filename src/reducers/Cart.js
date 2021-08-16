import { ADD_DISH } from "../constants/ActionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DISH:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productReducer;
