import { createStore } from "../redux";
// import { createStore } from "redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";
import applyMiddleware from "../redux/applyMiddleware";


function loggerDispatch1(store) {
  console.log("loggerDispatch1 store", store); // loggerDispatch1 store {getState: ƒ, dispatch: ƒ}

  // 2. 中间件函数必须返回一个dispatch创建函数
  return function (nextDispatch) {
    return function (action) {
      console.log("loggerDispatch1 action", action);
      console.log("loggerDispatch1 state before update", store.getState());

      nextDispatch(action);

      console.log("loggerDispatch1 state after update", store.getState());
    };
  };
}

/**
 * 一个中间件函数
 * @param {*} store
 */
/* function loggerDispatch2(store) {
  console.log("loggerDispatch1 store", store); // loggerDispatch1 store {getState: ƒ, dispatch: ƒ}

  // 2. 中间件函数必须返回一个dispatch创建函数
  return function (nextDispatch) {
    return function (action) {
      console.log("loggerDispatch2 action", action);
      console.log("loggerDispatch2 state before update", store.getState());

      nextDispatch(action);

      console.log("loggerDispatch2 state after update", store.getState());
    };
  };
} */
// 简写
const loggerDispatch2 = store => nextDispatch => action => {
  console.log("loggerDispatch2 action", action);
  console.log("loggerDispatch2 state before update", store.getState());

  nextDispatch(action);

  console.log("loggerDispatch2 state after update", store.getState());
}

// 3. applyMiddleware函数，用于记录有哪些中间件，它会返回一个函数
//   - 该函数用于记录创建仓库的方法，然后又返回一个函数

// 应用中间件，
// 一、applyMiddleware 结合 createStore 用法1：
// const store = createStore(reducer, applyMiddleware(loggerDispatch1, loggerDispatch2));

// 二、applyMiddleware 结合 createStore 用法2（上面用法本质也是调用下面的）：
const store = applyMiddleware(loggerDispatch1, loggerDispatch2)(createStore)(reducer);

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

/*
 1）
 export function applyMiddleware<Ext1, Ext2, S>(
 middleware1: Middleware<Ext1, S, any>,
 middleware2: Middleware<Ext2, S, any>
 ): StoreEnhancer<{ dispatch: Ext1 & Ext2 }>

 2）
 export type StoreEnhancer<Ext = {}, StateExt = {}> = (
 next: StoreEnhancerStoreCreator
 ) => StoreEnhancerStoreCreator<Ext, StateExt>

 3）
 export type StoreEnhancerStoreCreator<Ext = {}, StateExt = {}> = <
 S = any,
 A extends Action = AnyAction
 >(
 reducer: Reducer<S, A>,
 preloadedState?: PreloadedState<S>
 ) => Store<S & StateExt, A> & Ext
 *  */


