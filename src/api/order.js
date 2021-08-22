import axios from "axios";

export const getAllOrders = (params = {}) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/orders`, {
    params,
  });
};

export const addOrder = (newOrder) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/new-order`, newOrder);
};

export const getOrder = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/get-order/${id}`);
}

export const updateOrder = (id, updatedOrder) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/edit-order/${id}`, updatedOrder);
};

export const orderPayment = (data) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/online-payment`, data)
}