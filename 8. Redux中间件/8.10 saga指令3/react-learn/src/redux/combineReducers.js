import isPlainObject from "./utils/isPlainObject";
import { getInitRandomString, getUnknownRandomString } from "./utils/ActionTypes";

export default function combineReducers(reducers) {
  // 1. 验证
  validateReducers(reducers);

  /**
   * 返回的是一个reducer函数
   */
  return function (state = {}, action) {
    const newState = {}; // 要返回的新的状态

    for (const key in reducers) {
      if (reducers.hasOwnProperty(key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action);
      }
    }

    return newState; // 返回状态
  };
}

function validateReducers(reducers) {
  if (typeof reducers !== "object") {
    throw new TypeError("reducers must be a object.");
  }

  if (!isPlainObject(reducers)) {
    throw new TypeError("reducers must be a plain object.");
  }

  // 验证reducer的返回结果是不是undefined
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key]; // 拿到reducer
      if (typeof reducer !== "function") {
        throw new TypeError("reducer must be a function.");
      }

      // 传递一个特殊的type值
      const stateByInit = reducer(undefined, {
        type: getInitRandomString(),
      });
      if (stateByInit === undefined) {
        throw new Error("reducers cannot return undefined.");
      }

      const stateByUnknown = reducer(undefined, {
        type: getUnknownRandomString(),
      });
      // if (init !== unknown) {
      if (stateByUnknown === undefined) {
        throw new Error("reducers cannot return undefined.");
      }
    }
  }
}
