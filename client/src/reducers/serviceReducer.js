import {
  RECEIVE_SERVICES, REQUEST_SERVICES
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  services: [],
  retrievingServices: false
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
    case REQUEST_SERVICES:
      return {
          ...state,
          retrievingServices: true
      }
    case REQUEST_SERVICES:
      let services = action.services;
      let new_services = services.map(service => {
        let date = new Date(service.date);
        service.date = format(date, "MMM yyyy")
        return _.mapKeys(service, (value, key) => {
          return map[key];
        });
      })

      return {
        ...state,
        services: new_services,
        retrievingServices: false
      };

    default:
      return state;
  }
}
