import { fork, delay, put, take, cancel } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

let isStop = false;

function* autoIncrease() {
  let taskFork;
  while (true) {
    yield take(actionTypes.autoIncrease);
    if (taskFork) {
      yield cancel(taskFork);
    }

    taskFork = yield fork(function* () {
      while (true) {
        if (isStop) {
          yield cancel(taskFork);
          isStop = false;
        }
        yield delay(1000);
        yield put(getIncreaseAction());
      }
    });
  }
}

function cancelTask() {
  isStop = true;
}
window.cancelTask = cancelTask
export default function* counterTask() {
  yield fork(autoIncrease);
}