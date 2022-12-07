import axios from "axios";

import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  GET_ERRORS
} from "./types";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'http://jpoms.com/api/' // production
      : 'http://localhost:3001/api/', // development
});

export const fetchGames = dispatch => {
  return dispatch => {
    dispatch(requestGames())
    return app
    .get("/games")
    .then(res => {
      const games = res.data;
      dispatch(receiveGames(games));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateGames = games => dispatch => {
  let requestUrl;
  if (games._id) {
        requestUrl = '/api/games/' + games._id + '/update';
  } else {
       requestUrl = '/api/games/create';
  }
  axios
    .post(requestUrl, games)
    .then(res => {
      dispatch(fetchGames());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveGames = games => {
  return {
    type: RECEIVE_GAMES,
    games
  };
};

export const requestGames = () => {
    return {
        type: REQUEST_GAMES
    };
};

export default {
  fetchGames,
  receiveGames
};
