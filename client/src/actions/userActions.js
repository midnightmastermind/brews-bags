import axios from "axios";

import {
  REQUEST_USERS,
  RECEIVE_USERS,
  GET_ERRORS
} from "./types";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'http://jpoms.com/api/' // production
      : 'http://localhost:3001/api/', // development
});

export const fetchUsers = dispatch => {
  return dispatch => {
    dispatch(requestUsers())
    return app
    .get("/users")
    .then(res => {
      const users = res.data;
      dispatch(receiveUsers(users));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateUsers = users => dispatch => {
  let requestUrl;
  if (users._id) {
        requestUrl = '/api/users/' + users._id + '/update';
  } else {
       requestUrl = '/api/users/create';
  }
  axios
    .post(requestUrl, users)
    .then(res => {
      dispatch(fetchUsers());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};
