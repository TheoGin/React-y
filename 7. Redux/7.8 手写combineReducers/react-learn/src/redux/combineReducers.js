import isPlainObject from "./utils/isPlainObject";
import { getInitRandomStringByLength, getUnknownRandomStringByLength } from "./utils/ActionTypes";

export default function combineReducers(reducers) {
  validateReducers(reducers);
  return function (state = {}, action) {
    const newState = {};

    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }

    return newState;
  };
}

function validateReducers(reducers) {
  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers must be a plain object.");
  }

  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      if (typeof reducer !== "function") {
        throw new TypeError("reducer must be a function.");
      }

      const init = reducer(undefined, { type: getInitRandomStringByLength(6) });
      if (init === undefined) {
        throw new Error("reducer must be return default state.");
      }

      const unknown = reducer(undefined, { type: getUnknownRandomStringByLength(6) });
      if (init !== unknown) {
        throw new Error("The action type cannot only contain string type.");
      }
    }
  }
}
