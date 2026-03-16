// 用 fork 和 take 实现
import { fork } from "./fork";
import { take } from "./take";
import { cancel } from "./cancel";

export function takeEvery(actionType, generatorFn, ...args) {
  return fork(function* () {
    let task;
    while (true) {
      console.log('takeEvery while (true) start');
      yield take(actionType);
      if (task) {
        yield cancel(task);
      }
      task = yield fork(generatorFn, ...args);
      // task = yield fork(generatorFn, ...args.concat(actionType));
    }
  }, ...args);
}

// 用 fork 的
/*
 export function runTakeEveryEffect() {

 }*/
