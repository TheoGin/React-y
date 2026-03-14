import { delay, put, fork, take, call, race } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease); // 只监听autoIncrease

    yield race({
      autoIncrease: call(function* () {
        while (true) {
          yield delay(1000);
          yield put(getIncreaseAction());
        }
      }),
      // stopAutoIncrease: cancel()
      stopAutoIncrease: take(actionTypes.stopAutoIncrease), // 停止一来，就比延迟一秒快，就会停止其他任务
    });
  }
}

export default function* counterTask() {
  yield fork(autoTask);
  console.log("正在监听 autoIncrease");
}
