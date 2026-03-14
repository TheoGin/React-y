import { delay, put, takeLatest, fork, take, cancel } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

let task;

function* autoIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);

    yield* stopTask();

    task = yield fork(function* () {
      while (true) {
        yield delay(1000);
        yield put(getIncreaseAction());
      }
    });
  }
}

function* stopTask() {
  if (task) {
    yield cancel(task);
  }
}

function* stopAutoIncrease() {
  yield* stopTask();
}

export default function* counterTask() {
  // 3. takeLastest：功能和takeEvery一致，只不过，会自动取消掉之前开启的任务
  yield fork(autoIncrease);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);

  console.log("正在监听 autoIncrease");
}
