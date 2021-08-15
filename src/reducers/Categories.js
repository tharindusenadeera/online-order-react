import { ADD_CATEGORIES } from "../constants/ActionTypes";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
