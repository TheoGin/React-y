import reducer from "./reducer";
import { createStore, applyMiddleware } from "../redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
  // collapsed: true,
  // diff: true,
  duration: true, // 是否打印 (in 0.00 ms)
  // timestamp: false, // 是否打印 @ 14:43:51.601
});

// Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions.
// thunk 需要写在 logger 的前面
const store = createStore(
  reducer,
  applyMiddleware(
    // thunk,
    thunk.withExtraArgument("extra-value"),
    logger,
  ),
);

export default store;


