import compose from "./compose";

/**
 * 注册中间件
 * @param  {...any} middlewares 所有的中间件
 */
export default function applyMiddleware(...middlewares) {
  return function (createStore) { // 给我创建仓库的函数
    // 下面的函数用于创建仓库
    return function (reducer, defaultState) {
      // 创建仓库
      const store = createStore(reducer, defaultState);
      let dispatch = () => {
        throw new Error("目前还不能使用dispatch");
      };
      const simpleStore = {
        dispatch: store.dispatch,
        getState: store.getState,
      };

      // 根据中间件数组，得到一个dispatch创建函数的数组
      const dispatchProducers = middlewares.map(middleware => middleware(simpleStore));

      // 需要倒着运行 middlewares
      // const dispatchProducer = compose(...dispatchProducers);
      // const dispatchProducer = compose(...dispatchProducers); // dispatchProducers 是数组，需要展开

      // 给dispatch赋值
      // store.dispatch = dispatchProducer(store.dispatch);
      // dispatch = dispatchProducer(store.dispatch);
      // 上面两行简写
      dispatch = compose(...dispatchProducers)(store.dispatch);

      // return store;
      return {
        ...store,
        dispatch,
      };
    };
  };

}