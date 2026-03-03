import { SET_LOGIN_USER_TYPE } from "../action/loginUserAction";

export default function loginUserReducer(state = null, action) {
  switch (action.type) {
    case SET_LOGIN_USER_TYPE:
      return { ...action.payload };
    default:
      return state;
  }
}