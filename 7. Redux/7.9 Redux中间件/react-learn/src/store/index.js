// import { createStore } from "../redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import { createDeleteUserAction } from "./action/userAction";
import { createSetLoginUserAction } from "./action/loginUserAction";
import { v4 as uuid } from "uuid";

/*
 const store = createStore(reducer);
 const originDispatch = store.dispatch;

 // 实现Redux中间件的基本原理，是更改仓库中的dispatch函数。
 store.dispatch = function (action) {
 console.log('rewrite dispatch: action', action);
 console.log('rewrite dispatch: state before update', store.getState());

 originDispatch(action);

 console.log('rewrite dispatch: state after update', store.getState());
 };
 */

// 中间件：类似于插件，可以在不影响原本功能、并且不改动原本代码的基础上，对其功能进行增强。在Redux中，中间件主要用于增强dispatch函数。

// Redux中间件书写：
// 1. 中间件本身是一个函数，该函数接收一个store参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含getState，dispatch。该函数运行的时间，是在仓库创建之后运行。
//   - 由于创建仓库后需要自动运行设置的中间件函数，因此，需要在创建仓库时，告诉仓库有哪些中间件
//   - 需要调用applyMiddleware函数，将函数的返回结果作为createStore的第二或第三个参数。
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

store.dispatch(createDeleteUserAction(1));
store.dispatch(createSetLoginUserAction({ id: uuid(), name: "用户 login", age: 1 }));

