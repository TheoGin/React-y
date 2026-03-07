import { getAllStudents } from "../../services/student";

export const ADD_USER_TYPE = Symbol("add-usersReducer");
export const UPDATE_USER_TYPE = Symbol("update-usersReducer");
export const DELETE_USER_TYPE = Symbol("delete-usersReducer");
export const SET_USERS_TYPE = Symbol("set-users");
export const SET_IS_LOADING = Symbol("is-loading");

export function createAddUserAction(user) {
  return {
    type: ADD_USER_TYPE,
    payload: user,
  };
}

export function createUpdateUserAction(id, newUser) {
  return {
    type: UPDATE_USER_TYPE,
    payload: {
      ...newUser,
      id,
    },
  };
}

export function createDeleteUserAction(id) {
  return {
    type: DELETE_USER_TYPE,
    payload: id,
  };
}

export function createSetUsersAction(users) {
  return {
    type: SET_USERS_TYPE,
    payload: users, // 用户数组
  };
}

/**
 * 返回一个设置加载状态的action
 * @param {*} isLoading
 */
export function createIsLoadingAction(isLoading) {
  return {
    type: SET_IS_LOADING,
    payload: isLoading, // 是否正在加载
  };
}

// 1、ES6 回调写法
/* export function fetchUsers() {
  return function (dispatch) {
    dispatch(createIsLoadingAction(true));
    getAllStudents().then(resp => {
      setTimeout(() => {
        // dispatch(createIsLoadingAction(true)); // 应该在网络请求前就开启 loading
        dispatch(createSetUsersAction(resp));
        dispatch(createIsLoadingAction(false));
      }, 1000);
    });
  };
} */

// 2、ES7 写法
 export function fetchUsers() {

   /** redux-thunk：thunk允许action是一个带有副作用的函数，当action是一个函数被分发时，thunk会阻止action继续向后移交。
   * thunk会向函数中传递三个参数
   1. dispatch：来自于store.dispatch
   2. getState：来自于store.getState
   3. extra：来自于用户设置的额外参数
   */
   return async function (dispatch, getState, extra) {
     console.log(dispatch, getState, extra);
     dispatch(createIsLoadingAction(true)); // 正在加载
     const resp = await getAllStudents(); // 由于thunk的存在，允许action是一个带有副作用的函数
     dispatch(createSetUsersAction(resp));
     dispatch(createIsLoadingAction(false));
   };
 }
