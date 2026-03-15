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
/*
// 传递普通函数
sagaMiddleware.run(function () {
  console.log('normal function');
}); */

// middleware.run(saga, ...args) 可以传递参数
// sagaMiddleware.run(rootSaga, 1, 2);

/* const run = sagaMiddleware.run(rootSaga);
console.log('sagaMiddleware', sagaMiddleware); // 中间件返回的函数
console.log('run', run); // task对象实例： {@@redux-saga/TASK: true, id: 1, meta: {…}, isRoot: true, context: {…}, …} */

export default store;