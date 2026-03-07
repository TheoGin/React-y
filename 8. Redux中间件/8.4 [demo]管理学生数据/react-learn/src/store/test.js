import store from "./index";
import { fetchUsers } from "./action/userAction";

// console.log("return", store.dispatch(fetchUsers())); // return Promise {<pending>}
// 为异步函数时，return typeof action === "function" ? action(store.dispatch, store.getState, extra) : next(action); 调用 action，就是一个 Promise
store.dispatch(fetchUsers());