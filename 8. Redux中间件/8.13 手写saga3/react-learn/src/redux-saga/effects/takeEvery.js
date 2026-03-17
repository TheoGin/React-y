// 用 fork 和 take 实现
import { fork } from "./fork";
import { take } from "./take";
import { cancel } from "./cancel";

export function takeEvery(actionType, generatorFn, ...args) {
  return fork(function* () {
    let task;
    while (true) {
      // yield take(actionType); // 有返回值
      const action = yield take(actionType);
      if (task) {
        yield cancel(task);
      }
      // task = yield fork(generatorFn, ...args);
      // task = yield fork(generatorFn, ...args.concat(actionType)); // 拼接的是 action
      task = yield fork(generatorFn, ...args.concat(action));
    }
  }, ...args);
}

// 用 fork 的
/*
 export function runTakeEveryEffect() {

 }*/
