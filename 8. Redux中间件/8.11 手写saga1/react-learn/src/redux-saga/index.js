import runSaga from "./runSaga";

export default function createSagaMiddleware() {
  return function s(store) {
    // run 的书写位置，因为只需要初始化一次，不需要用到 nextDispatch
    s.run = function (rootSaga, ...args) {
      const boundRootSaga = rootSaga.bind(null, ...args);
      return runSaga({ store }, boundRootSaga);
    };
    return function (nextDispatch) {
      return function (action) {
        nextDispatch(action);
      };
    };
  };
}