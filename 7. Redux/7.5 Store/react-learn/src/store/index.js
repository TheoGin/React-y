import { createStore } from "redux";
import reducer from "./reducer";
import { createAddUserAction, createDeleteUserAction, createUpdateUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

const store = createStore(reducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("触发subscribe store.getState()", store.getState());
});

store.dispatch(createDeleteUserAction(1));

unsubscribe();  // 取消订阅

store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

// console.log(store.getState());