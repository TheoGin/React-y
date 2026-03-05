import compose from "./compose";

export default function applyMiddleware(...argFns) {
  return function (createStore) {
    return function (reducer, defaultState) {
      const store = createStore(reducer, defaultState);
      const newStore = {
        dispatch: store.dispatch,
        getState: store.getState,
      };

      const dispatchProducers = argFns.map(fn => fn(newStore));

      // 需要倒着运行 argFns
      const dispatchProducer = compose(dispatchProducers);
      console.log('dispatchProducer', dispatchProducer);
      store.dispatch = dispatchProducer(store.dispatch);

      return store;
    };
  };

}