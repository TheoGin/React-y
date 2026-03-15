import { fork, put, take } from "../../redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

function* asyncIncrease() {
  /*  const action = take(actionTypes.increase);
   put(action); */
  yield take(actionTypes.asyncIncrease);
  yield put(getIncreaseAction());
}


/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  // fork(fn, ...args)
  // yield fork(asyncIncrease); // 不会阻塞
  console.log(fork(asyncIncrease)); //
  console.log("正在监听increase");
  const task = yield fork(asyncIncrease, 123, 456); // 会返回一个任务对象
  console.log("task", task); // {@@redux-saga/TASK: true, id: 2, meta: {…}, isRoot: undefined, context: {…}, …}

  // fork([context, fn], ...args)
  /* const task2 = yield fork(["abc", asyncIncrease], 123, 456); // 会返回一个任务对象
  console.log("task2", task2); */

  console.log("saga 完成");
}

