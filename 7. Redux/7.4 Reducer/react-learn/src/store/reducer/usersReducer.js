import { ADD_USER_TYPE, DELETE_USER_TYPE, UPDATE_USER_TYPE } from "../action/userAction";

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case ADD_USER_TYPE:
      return [...state, action.payload];
    case UPDATE_USER_TYPE:
      // const usersReducer = state.find(usersReducer => usersReducer.id === action.payload.id);
      return state.map(user => user.id === action.payload.id ? { ...user, ...action.payload } : user);
    case DELETE_USER_TYPE:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
}