import axios from "axios";

export const getCities = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/cities`);
}