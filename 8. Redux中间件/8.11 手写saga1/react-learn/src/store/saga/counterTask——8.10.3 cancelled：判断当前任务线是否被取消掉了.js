import { delay, put, fork, take, cancel, cancelled } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
  let task;
  // 4. cancelled：判断当前任务线是否被取消掉了
  while (true) {
    yield take(actionTypes.autoIncrease); // 只监听autoIncrease

    task = yield fork(function* () {
      try {
        while (true) {
          /*
           // 位置不对，因为取消之后，就 return 了，而在 finally 无论如何都会运行
           const isCancelled = yield cancelled();
           if (isCancelled) {
           console.log("自动增加任务被取消掉了！！！");
           } */
          yield delay(1000);
          yield put(getIncreaseAction());
        }
      } finally {
        const isCancelled = yield cancelled();
        if (isCancelled) {
          console.log("自动增加任务被取消掉了！！！");
        }
      }
    });

    yield take(actionTypes.stopAutoIncrease); // 转而监听stopAutoIncrease
    yield cancel(task);
  }
}

export default function* counterTask() {
  yield fork(autoTask);
  console.log("正在监听 autoIncrease");
}
