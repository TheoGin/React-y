import { bindActionCreators, createStore } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, createDeleteUserAction, createUpdateUserAction } from "./action/userAction";
// import * as userActions from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

const store = createStore(reducer);
// console.log(store);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("触发subscribe store.getState()", store.getState());
});

// 1、userActions是对象
const bindDispatchUserActions = bindActionCreators({ createAddUserAction, createDeleteUserAction, createUpdateUserAction }, store.dispatch);
// console.log(userActions);
console.log(bindDispatchUserActions); // {createAddUserAction: ƒ, createUpdateUserAction: ƒ, createDeleteUserAction: ƒ}
store.dispatch(createDeleteUserAction(1));
// bindDispatchUserActions.createDeleteUserAction(1);

// unsubscribe();

// 2、createSetLoginUserAction是函数
const bindDispatchSetLoginUserAction = bindActionCreators(createSetLoginUserAction, store.dispatch);
// store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));
bindDispatchSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 });
// console.log(store.getState());