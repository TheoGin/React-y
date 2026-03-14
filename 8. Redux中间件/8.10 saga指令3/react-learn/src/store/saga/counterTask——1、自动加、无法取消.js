import { fork, delay, put, take, cancel } from "redux-saga/effects";
// import { fork, delay, put, take } from "redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

function* autoIncreaseTask() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    while (true) {
      yield delay(1000);
      yield put(getIncreaseAction());
    }
    /* const taskFork = yield fork(function* () {
      /!* if (taskFork) { // ReferenceError: Cannot access 'taskFork' before initialization
       yield cancel(taskFork);
       } *!/
      while (true) {
        yield delay(1000);
        yield put(getIncreaseAction());
      }
    }); */
  }
}

export default function* counterTask() {
  // 1. fork：用于开启一个新的任务，该任务不会阻塞，该函数需要传递一个生成器函数，fork返回了一个对象，类型为Task
  yield fork(autoIncreaseTask);

  // 2. cancel：用于取消一个或多个任务，实际上，取消的实现原理，是利用generator.return。cancel可以不传递参数，如果不传递参数，则取消当前任务线。
  /* yield delay(2000);
   yield cancel(task);
   console.log("cancel task", task); */

  // 3. takeLastest：功能和takeEvery一致，只不过，会自动取消掉之前开启的任务
  // 4. cancelled：判断当前任务线是否被取消掉了
  // 5. race：【阻塞】竞赛，可以传递多个指令，当其中任何一个指令结束后，会直接结束，与Promise.race类似。返回的结果，是最先完成的指令结果。并且，该函数会自动取消其他的任务

}