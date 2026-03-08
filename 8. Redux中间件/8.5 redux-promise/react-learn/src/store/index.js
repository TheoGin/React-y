import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import promiseMiddleware from "../redux-promise";
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  diff: true,
});

// 用于创建仓库，并导出
const store = createStore(
  reducer,
  applyMiddleware(
    promiseMiddleware,
    logger,
  ),
);

export default store;