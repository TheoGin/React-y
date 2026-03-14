import { applyMiddleware, createStore } from "../redux";
import reducer from "./reducer";
import { createLogger } from "redux-logger/src";
import createSagaMiddleware from "../redux-saga";
import rootSaga from "./saga";

const logger = createLogger({
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

// 用于创建仓库，并导出
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    logger,
  ),
);

sagaMiddleware.run(rootSaga);
// const run = sagaMiddleware.run(rootSaga);
// console.log('sagaMiddleware', sagaMiddleware);
// console.log('run', run);

export default store;