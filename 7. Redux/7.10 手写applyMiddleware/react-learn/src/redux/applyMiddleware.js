import compose from "./compose";

export default function applyMiddleware(...argFns) {
  return function (createStore) {
    return function (reducer, defaultState) {
      // 需要倒着运行 argFns
      const composeFn = compose(argFns);
    };
  };

}