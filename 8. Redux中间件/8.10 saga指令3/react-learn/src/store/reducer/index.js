import { combineReducers } from "../../redux";
import student from "./student";
import counter from "./counter";

export default combineReducers({
  student,
  counter,
});