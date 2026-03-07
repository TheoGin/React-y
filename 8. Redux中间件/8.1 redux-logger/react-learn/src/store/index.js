import { createStore } from "../redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";
import applyMiddleware from "../redux/applyMiddleware";
// 用法 1：
/* import logger from "redux-logger";
const store = createStore(reducer, applyMiddleware(logger)); */

// 用法 2：
import { createLogger } from "redux-logger/src";

/*
 {
   predicate, // if specified this function will be called before each action is processed with this middleware.
   collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
   duration = false: Boolean, // print the duration of each action?
   timestamp = true: Boolean, // print the timestamp with each action?
   level = 'log': 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
   diff = false: Boolean, // (alpha) show diff between states?
 }
*  */
const logger = createLogger({
  /* predicate() { // 自定义日志输出
    console.log("predicate");
  }, */
  // collapsed: true,
  diff: true,
  duration: true, // 是否打印 (in 0.00 ms)
  // timestamp: false, // 是否打印 @ 14:43:51.601
});

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

