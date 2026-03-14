import { delay, put, takeLatest } from "redux-saga/effects";
import { actionTypes, getDecreaseAction, getIncreaseAction } from "../action/counter";

let isStop; // 是否停止

function* autoIncrease() {
  while (true) {
    yield delay(1000);
    if (isStop) {
      isStop = false;
      break;
    }
    // yield delay(1000); // 位置不对，要放 if 前

    yield put(getIncreaseAction());
  }
}

function stopAutoIncrease() {
  // 如果没用到 yield，可以不是生成器函数
  isStop = true;
}

export default function* counterTask() {
  // 3. takeLastest：功能和takeEvery一致，只不过，会自动取消掉之前开启的任务
  yield takeLatest(actionTypes.autoIncrease, autoIncrease);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);

  console.log("正在监听 autoIncrease");
}