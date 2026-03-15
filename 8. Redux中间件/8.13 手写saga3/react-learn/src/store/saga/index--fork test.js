import { take } from "../../redux-saga/effects";
import { actionTypes } from "../action/counter";
import { fork } from "../../redux-saga/effects/fork";

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  // yield take(actionTypes.increase);
  console.log(take(actionTypes.increase)); // {@@redux-saga/IO: true, combinator: false, type: 'TAKE', payload: {…}}
  console.log('正在监听increase');
  const task = yield fork(asyncIncrease); // 会返回一个完整的 action 对象
  console.log(action); // {type: Symbol(increase)}
  console.log('take finish');
  // yield put(action);

  console.log("saga 完成");
}

