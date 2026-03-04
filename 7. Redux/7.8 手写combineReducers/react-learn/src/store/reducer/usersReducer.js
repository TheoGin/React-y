import { ADD_USER_TYPE, DELETE_USER_TYPE, UPDATE_USER_TYPE } from "../action/userAction";
import { v4 as uuid } from "uuid";

const initState = [
  { id: 1, name: "用户1", age: 18 },
  { id: uuid(), name: "用户2", age: 16 },
];

export default function usersReducer(state = initState, action) {
  console.log(action); // {type: '@@redux/PROBE_UNKNOWN_ACTIONa.a.0.t.w.f'}
  switch (action.type) {
    case ADD_USER_TYPE:
      return [...state, action.payload];
    case UPDATE_USER_TYPE:
      // const usersReducer = state.find(usersReducer => usersReducer.id === action.payload.id);
      return state.map(user => user.id === action.payload.id ? { ...user, ...action.payload } : user);
    case DELETE_USER_TYPE:
      console.log('state', state);
      console.log('action', action);
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
}