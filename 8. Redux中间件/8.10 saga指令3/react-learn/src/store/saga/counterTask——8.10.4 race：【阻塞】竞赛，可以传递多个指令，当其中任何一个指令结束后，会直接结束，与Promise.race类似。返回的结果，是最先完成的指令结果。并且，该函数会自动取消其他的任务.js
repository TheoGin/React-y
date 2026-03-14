import { call, race } from "redux-saga/effects";
import { getDecreaseAction, getIncreaseAction } from "../action/counter";

/**
 * 异步的得到一个action
 */
function asyncAction() {
  return new Promise((resolve, reject) => {
    // 生成一个1000 ~ 5000毫秒的随机时间
    const duration = Math.floor(Math.random() * 4000 + 1000);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        // resolve("成功");
        resolve(getIncreaseAction());
      } else {
        // reject("失败");
        reject(getDecreaseAction());
      }
    }, duration);
  });
}

export default function* counterTask() {
// 5. race：【阻塞】竞赛，可以传递多个指令，当其中任何一个指令结束后，会直接结束，与Promise.race类似。返回的结果，是最先完成的指令结果。并且，该函数会自动取消其他的任务
  const result = yield race({
    action1: call(asyncAction),
    action2: call(asyncAction),
  });
  console.log(result);
  // 返回的结果，是最先完成的指令结果
  // {action2: {…}}
  // {action1: {…}}
}
