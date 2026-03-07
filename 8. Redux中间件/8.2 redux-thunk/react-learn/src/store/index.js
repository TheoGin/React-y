import { createStore } from "../redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";
import applyMiddleware from "../redux/applyMiddleware";
import { createLogger } from "redux-logger/src";

const logger = createLogger({
  // collapsed: true,
  diff: true,
  duration: true, // 是否打印 (in 0.00 ms)
  // timestamp: false, // 是否打印 @ 14:43:51.601
});

const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

