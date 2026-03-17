import { all } from "../../redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";

/**
 * saga任务
 */
export default function* rootSaga() {
  console.log("task start 执行"); // task start 执行 一开始会执行

  yield all([counterTask(), studentTask()]);

  console.log("saga 完成");
}

