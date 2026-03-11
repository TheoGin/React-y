import createSagaMiddleware from "redux-saga";
// import { all, take } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
// import { actionTypes } from "../action/counter";
import studentTask from "./studentTask";

/**
 * saga任务
 */
export default function* rootSaga() {

  console.log("task start 执行"); // task start 执行 一开始会执行
  // 2. all指令：【阻塞】该函数传入一个数组，数组中放入[生成器！！！]，saga会等待所有的生成器全部完成后才会进一步处理
  // yield all([counterTask, studentTadsk]); // 错误写法，调用才会得到生成器
  yield all([counterTask(), studentTask()]);
  console.log('saga 完成');
}

// 在使用的地方创建
/*
const sagaMiddleware = createSagaMiddleware();
// createStore 之后才能 run
// sagaMiddleware.run(task);

export default sagaMiddleware;*/
