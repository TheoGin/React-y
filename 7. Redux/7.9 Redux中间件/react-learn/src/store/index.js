import { bindActionCreators, createStore } from "../redux";
import reducer from "./reducer";
import { createAddUserAction, createDeleteUserAction, createUpdateUserAction } from "./action/userAction";
// import * as userActions from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
  // 要在监听器（订阅）拿到状态原始值，改前、改后的值，由于监听器是无参函数，所以拿不到 ——》用中间件，修改 store.dispatch
  console.log("触发subscribe store.getState()", store.getState());
});

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

