import { createStore } from "../redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

const store = createStore(reducer);
let oldDispatch = store.dispatch; // 保留原本的dispatch函数

// 实现Redux中间件的基本原理，是更改仓库中的dispatch函数。
store.dispatch = function (action) { // 更改store中的dispatch
  console.log('rewrite dispatch1: action', action);
  console.log('rewrite dispatch1: state before update', store.getState());

  oldDispatch(action);

  console.log('rewrite dispatch1: state after update', store.getState());
};

// oldDispatch = store.dispatch; // 死循环
store.dispatch = function (action) { // 更改store中的dispatch
  console.log('rewrite dispatch2: action', action);
  console.log('rewrite dispatch2: state before update', store.getState());

  oldDispatch(action);

  console.log('rewrite dispatch2: state after update', store.getState());
};

// 这种方案只能写一个中间件，多个后面会把前面的给覆盖

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));