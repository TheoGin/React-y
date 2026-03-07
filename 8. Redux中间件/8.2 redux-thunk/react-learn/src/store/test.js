import store from "./index";
import { fetchUsers } from "./action/userAction";
/* import { getAllStudents } from "../services/student";
import { createIsLoadingAction, createSetUsersAction } from "./action/userAction";

// 传统做法
getAllStudents().then(resp => {
  store.dispatch(createIsLoadingAction(true));
  store.dispatch(createSetUsersAction(resp));
  store.dispatch(createIsLoadingAction(false));
}); */

store.dispatch(fetchUsers())