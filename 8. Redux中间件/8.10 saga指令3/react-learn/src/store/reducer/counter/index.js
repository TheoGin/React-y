import { actionTypes } from "../../action/counter";

export default function counter(state = 10, { type, payload }) {
  switch (type) {
    case actionTypes.increase:
      return state + 1;
    case actionTypes.decrease:
      return state - 1;
    default:
      return state;
  }
}