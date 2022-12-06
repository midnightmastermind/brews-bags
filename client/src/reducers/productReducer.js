import {
  RECEIVE_PRODUCTS, REQUEST_PRODUCTS
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  products: [],
  retrievingProducts: false
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
    case REQUEST_PRODUCTS:
      return {
          ...state,
          retrievingProducts: true
      }
    case REQUEST_PRODUCTS:
      let products = action.products;
      let new_products = products.map(product => {
        let date = new Date(product.date);
        product.date = format(date, "MMM yyyy")
        return _.mapKeys(product, (value, key) => {
          return map[key];
        });
      })

      return {
        ...state,
        products: new_products,
        retrievingProducts: false
      };

    default:
      return state;
  }
}
