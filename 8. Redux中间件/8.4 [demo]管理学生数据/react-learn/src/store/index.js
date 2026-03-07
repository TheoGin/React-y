import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import thunk from "../redux-thunk";
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  diff: true,
});

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger,
  ),
);
window.store1 = store;
export default store;