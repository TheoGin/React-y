import { call } from "../../redux-saga/effects";

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  console.log("saga 完成");
}

