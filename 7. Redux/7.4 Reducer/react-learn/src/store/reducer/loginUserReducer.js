import { SET_LOGIN_USER_TYPE } from "../action/loginUserAction";

const initState = null;
export default function loginUserReducer(state = initState, action) {
  switch (action.type) {
    case SET_LOGIN_USER_TYPE:
      // return { ...action.payload };
      return action.payload;
    default:
      return state;
  }
}