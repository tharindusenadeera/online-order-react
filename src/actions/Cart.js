
import { ADD_DISH } from "../constants/ActionTypes";

export const addDish = (data) => {
    return {
        type: ADD_DISH,
        payload: data,
    };
};
