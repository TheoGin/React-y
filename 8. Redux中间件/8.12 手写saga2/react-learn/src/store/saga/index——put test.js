import { put, delay } from "../../redux-saga/effects";
import { getIncreaseAction } from "../action/counter";

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  yield delay(1000);
  yield put(getIncreaseAction())
  // put 没有返回值
  // console.log(yield put(getIncreaseAction())); // undefined
  // console.log(put(getIncreaseAction())); // {@@redux-saga/IO: true, combinator: false, type: 'PUT', payload: {…}}

  console.log("saga 完成");
}

