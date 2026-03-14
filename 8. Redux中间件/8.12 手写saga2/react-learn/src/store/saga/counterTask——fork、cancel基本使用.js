import { fork, delay, put, take, cancel } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

function* listenAsyncIncreaseTask() {
  while (true) {
    yield take(actionTypes.asyncIncrease);
    delay(1000);
    yield put(getIncreaseAction());
  }
}

export default function* counterTask() {
  // 1. fork：用于开启一个新的任务，该任务不会阻塞，该函数需要传递一个生成器函数，fork返回了一个对象，类型为Task
  const task = yield fork(listenAsyncIncreaseTask);

  // 2. cancel：用于取消一个或多个任务，实际上，取消的实现原理，是利用generator.return。cancel可以不传递参数，如果不传递参数，则取消当前任务线。
  yield delay(5000);
  yield cancel(task);
  console.log("cancel task", task);
}