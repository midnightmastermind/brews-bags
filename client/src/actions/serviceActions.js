import axios from "axios";

import {
  REQUEST_SERVICES,
  RECEIVE_SERVICES,
  GET_ERRORS
} from "./types";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'http://jpoms.com/api/' // production
      : 'http://localhost:3001/api/', // development
});

export const fetchServices = dispatch => {
  return dispatch => {
    dispatch(requestServices())
    return app
    .get("/services")
    .then(res => {
      const services = res.data;
      dispatch(receiveServices(services));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateServices = services => dispatch => {
  let requestUrl;
  if (services._id) {
        requestUrl = '/api/services/' + services._id + '/update';
  } else {
       requestUrl = '/api/services/create';
  }
  axios
    .post(requestUrl, services)
    .then(res => {
      dispatch(fetchServices());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveServices = services => {
  return {
    type: RECEIVE_SERVICES,
    services
  };
};

export const requestServices = () => {
    return {
        type: REQUEST_SERVICES
    };
};

export default {
  fetchServices,
  receiveServices
};
