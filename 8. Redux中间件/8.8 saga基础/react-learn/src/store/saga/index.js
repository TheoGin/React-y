import createSagaMiddleware from "redux-saga";
// import { all, take } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
// import { actionTypes } from "../action/counter";
import studentTask from "./studentTask";

export function* task() {

  // 2. all指令：【阻塞】该函数传入一个数组，数组中放入生成器，saga会等待所有的生成器全部完成后才会进一步处理
  yield all([counterTask, studentTask]);
  console.log('task执行完毕');
}

// 3. takeEvery指令：不断的监听某个action，当某个action到达之后，运行一个函数。takeEvery永远不会结束当前的生成器
const sagaMiddleware = createSagaMiddleware();
// createStore 之后才能 run
// sagaMiddleware.run(task);

export default sagaMiddleware;