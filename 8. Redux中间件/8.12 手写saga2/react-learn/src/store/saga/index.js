import { delay, select } from "../../redux-saga/effects";

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  yield delay(1000);
  const state = yield select();
  console.log(state); // {student: {…}, counter: 10}

  // select(selector, ...args)
  const counter = yield select(state => state.counter);
  console.log(counter); // 10

  const conditionWithArgs = yield select((state, a, b) => {
    console.log('a, b', a, b); // a, b 1 2
    return state.student.condition;
  }, 1, 2);
  console.log(conditionWithArgs); // {keyword: '111', sex: 1, page: 1, limit: 10}

  // console.log(select(state => state.counter)); // {@@redux-saga/IO: true, combinator: false, type: 'SELECT', payload: {…}}

  console.log("saga 完成");
}

