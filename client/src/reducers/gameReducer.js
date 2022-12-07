import {
  RECEIVE_GAMES, REQUEST_GAMES
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  games: [],
  retrievingGames: false
};
const map = {
  date: "title",
  name: "cardTitle",
  org: "cardSubtitle",
  description: "description",
  reference: "reference",
  type: "type",
  _id: "id",
  files: "files",
  tags: "tags"
}
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
          ...state,
          retrievingGames: true
      }
    case REQUEST_GAMES:
      let games = action.games;
      let new_games = games.map(game => {
        let date = new Date(game.date);
        game.date = format(date, "MMM yyyy")
        return _.mapKeys(game, (value, key) => {
          return map[key];
        });
      })

      return {
        ...state,
        games: new_games,
        retrievingGames: false
      };

    default:
      return state;
  }
}
