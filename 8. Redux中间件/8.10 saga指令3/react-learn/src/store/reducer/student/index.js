import { combineReducers } from "../../../redux";
import searchResult from "./searchResult";
import searchCondition from "./searchCondition";


export default combineReducers({
  result: searchResult,
  condition: searchCondition,
});