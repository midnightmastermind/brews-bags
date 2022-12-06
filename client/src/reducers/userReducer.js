import {
  RECEIVE_USERS, REQUEST_USERS
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  users: [],
  retrievingUsers: false
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
    case REQUEST_USERS:
      return {
          ...state,
          retrievingUsers: true
      }
    case REQUEST_USERS:
      let users = action.users;
      let new_users = users.map(user => {
        let date = new Date(user.date);
        user.date = format(date, "MMM yyyy")
        return _.mapKeys(user, (value, key) => {
          return map[key];
        });
      })

      return {
        ...state,
        users: new_users,
        retrievingUsers: false
      };

    default:
      return state;
  }
}
