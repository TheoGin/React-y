// import createSagaMiddleware from "redux-saga";
// import { all, take } from "redux-saga/effects";
import { take } from "redux-saga/effects";
// import counterTask from "./counterTask";
// import { actionTypes } from "../action/counter";
// import studentTask from "./studentTask";

/**
 * saga任务
 */
/* export default function* rootSaga(a, b) {
  console.log('a, b', a, b); */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  const value1 = yield 123;
  console.log("counterTask value1", value1);
  const value2 = yield Promise.resolve(456);
  console.log("counterTask value2", value2);

  // 查看 take 返回类型
  // console.log(take('abc')); // {@@redux-saga/IO: true, combinator: false, type: 'TAKE', payload: {…}}
  console.log('saga 完成');
}

