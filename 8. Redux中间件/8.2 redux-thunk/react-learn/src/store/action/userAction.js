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
    payload: users,
  };
}

export function createIsLoadingAction(isLoading) {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
}

export function fetchUsers() {

  /** redux-thunk：thunk允许action是一个带有副作用的函数，当action是一个函数被分发时，thunk会阻止action继续向后移交。
   * thunk会向函数中传递三个参数
    1. dispatch：来自于store.dispatch
    2. getState：来自于store.getState
    3. extra：来自于用户设置的额外参数
   */
  return async function (dispatch, getState, extra) {
    dispatch(createIsLoadingAction(true))
    const resp = await getAllStudents();
    dispatch(createSetUsersAction(resp));
    dispatch(createIsLoadingAction(false))
  }
}