import { ORDER, TABLE_NUMBER } from "../constants/ActionTypes";

const initialState = {
  order: {},
  tableNumber: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return { ...state, order: action.payload };
    case TABLE_NUMBER:
      return { ...state, tableNumber: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
