import { createStore } from "redux";
import reducer from "./reducer";
import { v4 as uuid } from "uuid";
import { createAddUserAction, createDeleteUserAction, createUpdateUserAction } from "./action/userAction";

const initState = {
  loginUser: { id: uuid(), name: "用户 login", age: 1 },
  users: [
    { id: 1, name: "用户1", age: 18 },
    { id: uuid(), name: "用户2", age: 16 },
  ],
};
console.log(initState);

const store = createStore(reducer, initState);

console.log(store.getState());

// store.dispatch(createAddUserAction({ id: uuid(), name: "用户3", age: 20 }));
// store.dispatch(createUpdateUserAction(1, { id: 1, name: "用户 update", age: 22 }));
store.dispatch(createDeleteUserAction(1));

console.log(store.getState());