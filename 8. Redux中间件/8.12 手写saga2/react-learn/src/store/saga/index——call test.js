import { call } from "../../redux-saga/effects";

function asyncFunc(a, b) {
  // console.log("asyncFunc触发 a, b", this, a, b); // asyncFunc触发 a, b 123 456
  console.log("asyncFunc触发 this, a, b", this, a, b); // {asyncFunc: ƒ} 123 456
  // return 'aaa';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(111);
      reject(new Error('失败'));
    }, 1000);
  });
}

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  // call(fn, ...args)
  // const result = yield call(asyncFunc, 123, 456);

  // call([context, fn], ...args)
  // const result = yield call(['abc', asyncFunc], 123, 456);

  // call([context, fnName], ...args)
  const result = yield call([{ asyncFunc }, "asyncFunc"], 123, 456);
  // console.log("result", result); // 111
  console.log("result", result); // result Error: 失败
  console.log("saga 完成");
}

