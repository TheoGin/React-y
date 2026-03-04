export const SET_LOGIN_USER_TYPE = Symbol("set-login-usersReducer");

export function createSetLoginUserAction(user) {
  return {
    type: SET_LOGIN_USER_TYPE,
    payload: user,
  };
}