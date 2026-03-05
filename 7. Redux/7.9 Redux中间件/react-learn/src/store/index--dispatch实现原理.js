import { createStore } from "../redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

const store = createStore(reducer);
const originDispatch = store.dispatch;

// 实现Redux中间件的基本原理，是更改仓库中的dispatch函数。
store.dispatch = function (action) {
  console.log('rewrite dispatch: action', action);
  console.log('rewrite dispatch: state before update', store.getState());

  originDispatch(action);

  console.log('rewrite dispatch: state after update', store.getState());
};

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

