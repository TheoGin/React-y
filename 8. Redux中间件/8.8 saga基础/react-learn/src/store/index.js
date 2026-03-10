import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import createSaga from "redux-saga";
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  diff: true,
});

const saga = createSaga();

// 用于创建仓库，并导出
const store = createStore(
  reducer,
  applyMiddleware(
    saga,
    logger,
  ),
);

export default store;