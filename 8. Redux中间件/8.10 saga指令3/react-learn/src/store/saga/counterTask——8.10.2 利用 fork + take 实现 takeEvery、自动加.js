// import { fork, delay, put, take, cancel, takeEvery } from "redux-saga/effects";
import { fork, delay, put, take, cancel } from "redux-saga/effects";
import { actionTypes, getDecreaseAction, getIncreaseAction } from "../action/counter";

export default function* counterTask() {
  // 1. fork：用于开启一个新的任务，该任务不会阻塞，该函数需要传递一个生成器函数，fork返回了一个对象，类型为Task
  yield fork(autoIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
  console.log("正在监听 autoIncrease");
}

function* autoIncrease() {
  let taskFork;
  while (true) {
    yield take(actionTypes.autoIncrease);
    if (taskFork) {
      yield cancel(taskFork);
    }
    taskFork = yield fork(function* () {
      while (true) {
        yield delay(1000);
        yield put(getIncreaseAction());
      }
    });
  }
}

// 利用 fork 实现 takeEvery
function* takeEvery(actionType, generatorFn) {
  /* while (true) {
    const action = yield take(actionType);
    yield fork(generatorFn);
  } */
  let task;
  while (true) {
    yield take(actionType);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(generatorFn);
  }
}

function* asyncDecrease() {
  yield delay(1000);
  yield put(getDecreaseAction());
}