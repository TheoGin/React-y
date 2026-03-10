import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import { createLogger } from "redux-logger/src";
import sagaMiddleware, { task } from "./saga";

const logger = createLogger({
  diff: true,
});



// 用于创建仓库，并导出
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    logger,
  ),
);

sagaMiddleware.run(task);

export default store;