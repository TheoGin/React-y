// import { delay, put, fork, take, call, race } from "redux-saga/effects";
// import { actionTypes, getIncreaseAction } from "../action/counter";
import { call } from "../../redux-saga/effects";


function asyncFunc(a, b) {
  console.log('asyncFunc触发');
  console.log("a, b", a, b);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(111);
    }, 1000);
  });
}

export default function* counterTask() {
  console.log('counterTask');
  const result = yield call(asyncFunc, 123, 456);
  console.log('result', result);
}
