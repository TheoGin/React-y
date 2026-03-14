import runSaga from "./runSaga";

/**
 * 创建saga中间件的函数
 */
export default function createSagaMiddleware() {
  return function sagaMiddleware(store) {
    // run 的书写位置，因为只需要初始化一次，不需要用到 nextDispatch
    /* sagaMiddleware.run = function (rootSaga, ...args) {
     const boundRootSaga = rootSaga.bind(null, ...args);
     return runSaga({ store }, boundRootSaga);
     }; */
    const env = { store };
    sagaMiddleware.run = runSaga.bind(null, env);

    return function (nextDispatch) {
      return function (action) {
        // nextDispatch(action); // 之前的中间件有可能有返回值，需要返回
        return nextDispatch(action); //直接交给下一个中间件处理
      };
    };
  };
}