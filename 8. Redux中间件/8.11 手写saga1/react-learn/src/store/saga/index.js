// import createSagaMiddleware from "redux-saga";
// import { all, take } from "redux-saga/effects";
// import { all } from "redux-saga/effects";
// import counterTask from "./counterTask";
// import { actionTypes } from "../action/counter";
// import studentTask from "./studentTask";

/**
 * saga任务
 */
export default function* rootSaga() {

  console.log("task start 执行"); // task start 执行 一开始会执行

  // const value = yield 123;
  const value = yield Promise.resolve(123);
  console.log("counterTask value", value);
  console.log('saga 完成');
}

