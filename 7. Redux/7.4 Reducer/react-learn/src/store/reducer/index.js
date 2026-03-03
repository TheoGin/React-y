import loginUser from "./loginUserReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";


/* export default function reducer(state = {}, action) {
  const newState = {
    loginUser: loginUser(state.loginUser, action),
    users: usersReducer(state.users, action),
  };

  return newState;
} */

/*
 export function combineReducers<S>(
  reducers: ReducersMapObject<S, any>
 ): Reducer<CombinedState<S>>
*  */
// 返回一个函数
export default combineReducers({
  loginUser,
  users: usersReducer,
})
