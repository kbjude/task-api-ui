import { combineReducers } from "redux";
import users from "./user";
import items from "./item";
import itemDetail from "./itemDetails";

const rootReducer = combineReducers({
  users,
  items,
  itemDetail
});

export default rootReducer;
