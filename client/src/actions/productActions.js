import axios from "axios";

import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  GET_ERRORS
} from "./types";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'http://jpoms.com/api/' // production
      : 'http://localhost:3001/api/', // development
});

export const fetchProducts = dispatch => {
  return dispatch => {
    dispatch(requestProducts())
    return app
    .get("/products")
    .then(res => {
      const products = res.data;
      dispatch(receiveProducts(products));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateProducts = products => dispatch => {
  let requestUrl;
  if (products._id) {
        requestUrl = '/api/products/' + products._id + '/update';
  } else {
       requestUrl = '/api/products/create';
  }
  axios
    .post(requestUrl, products)
    .then(res => {
      dispatch(fetchProducts());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};

export const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS
    };
};

export default {
  fetchProducts,
  receiveProducts
};
