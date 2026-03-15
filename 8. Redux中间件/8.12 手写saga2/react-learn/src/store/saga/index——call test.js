import { call } from "../../redux-saga/effects";

function asyncFunc(a, b) {
  console.log("asyncFunc触发 a, b", a, b); // asyncFunc触发 a, b 123 456
  // return 'aaa';
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(111);
    }, 1000);
  });
}

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  const result = yield call(asyncFunc, 123, 456);
  console.log('result', result); // 111
  console.log("saga 完成");
}

