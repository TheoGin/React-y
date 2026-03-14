import { fork, delay, put, take, cancel, takeEvery } from "redux-saga/effects";
import { actionTypes, getDecreaseAction, getIncreaseAction } from "../action/counter";

/* function* asyncIncrease() {
   while (true) {
     yield take(actionTypes.asyncIncrease);
     yield delay(1000);
     yield put(getIncreaseAction());
   }
 } */
function* asyncIncrease() {
  let task;
  while (true) {
    // yield take(actionTypes.increase); // 错误写法，监听的是 异步加
    yield take(actionTypes.asyncIncrease);

    // 监听到了action，并且在开启新任务之前，取消之前的任务
    if (task) {
      // 之前有任务
      yield cancel(task);
      console.log("之前的任务被取消掉了")
    }

    // task = fork(function* () {
    task = yield fork(function* () {
      yield delay(1000);
      yield put(getIncreaseAction());
    });
  }
}

function* asyncDecrease() {
  console.log("触发了asyncDecrease");
  yield delay(1000);
  yield put(getDecreaseAction());
}

export default function* counterTask() {
  // 1. fork：用于开启一个新的任务，该任务不会阻塞，该函数需要传递一个生成器函数，fork返回了一个对象，类型为Task
  yield fork(asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听asyncIncrease、asyncDecrease");
}