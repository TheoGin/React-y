import {
  ADD_USER_TYPE,
  DELETE_USER_TYPE,
  SET_IS_LOADING,
  SET_USERS_TYPE,
  UPDATE_USER_TYPE,
} from "../action/userAction";

const initState = {
  isLoading: false, // 是否正在加载
  datas: [], // 用户数组
};

export default function usersReducer(state = initState, action) {
  switch (action.type) {
    case ADD_USER_TYPE:
      return {
        ...state,
        datas: [...state.datas, action.payload],
      };
    case UPDATE_USER_TYPE:
      return {
        ...state,
        datas: state.datas.map(user => user.id === action.payload.id ? { ...user, ...action.payload } : user),
      };
    case DELETE_USER_TYPE:
      return {
        ...state,
        datas: state.datas.filter(user => user.id !== action.payload),
      };
    case SET_USERS_TYPE:
      return {
        ...state,
        datas: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}