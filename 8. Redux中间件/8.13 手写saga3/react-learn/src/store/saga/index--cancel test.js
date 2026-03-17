import { cancel, delay, put, takeEvery } from "../../redux-saga/effects";
import { actionTypes, getIncreaseAction } from "../action/counter";

function* asyncIncrease(a, b) {
  console.log('a, b', a, b); // a, b 123 456
  yield put(getIncreaseAction());
}


/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  // takeEvery(pattern, saga, ...args)
  // yield takeEvery(asyncIncrease); // 不会阻塞

  // 1、返回的 effect 对象
  console.log('cancel(task)', cancel()); // {@@redux-saga/IO: true, combinator: false, type: 'CANCEL', payload: '@@redux-saga/SELF_CANCELLATION'}

  // 2、返回值
  const task = yield takeEvery(actionTypes.asyncIncrease, asyncIncrease, 123, 456); // 用 fork 类型，返回 task 对象，可以用于取消
  yield delay(3000)
  console.log(task); // {@@redux-saga/TASK: true, id: 2, meta: {…}, isRoot: undefined, context: {…}, …}
  console.log('cancel(task)', yield cancel(task)); // cancel(task) undefined
  console.log("cancel finish");
  console.log("正在监听asyncIncrease");

  console.log("saga 完成");
}

