import isPlainObject from "./utils/isPlainObject";
import { getInitRandomString, getRandomStringByLength } from "./utils/ActionTypes";

/**
 * 实现createStore的功能
 * @param {function} reducer reducer
 * @param {any} defaultState 默认的状态值
 * @param {function} enchancer 默认的状态值
 */
export default function createStore(reducer, defaultState, enchancer) {
  // enhanced表示applymiddleware返回的函数
  if (typeof defaultState === "function") {
    enchancer = defaultState;
    defaultState = undefined;
  }
  if (typeof enchancer === "function") {
    // 进入applyMiddleWare的处理逻辑
    return enchancer(createStore)(reducer, defaultState);
  }
  /* if (typeof defaultState === "function") {
    enchancer = defaultState;
  }
  if (typeof enchancer === "function") {
    return enchancer(createStore)(reducer, typeof defaultState !== "function" ? defaultState : undefined);
  } */

  let currentReducer = reducer, // 当前使用的reducer
    currentState = defaultState; // 当前仓库中的状态

  const listeners = []; // 记录所有的监听器（订阅者）

  // 创建仓库时，需要分发一次初始的action
  // const type = `@@redux/INIT${ getRandomStringByLength(6) }`;
  const type = getInitRandomString();
  // let state = currentReducer(defaultState, { type });
  dispatch({ type }); // 用 dispatch 减少重复代码

  // 1. dispatch：分发一个action
  function dispatch(action) {
    // 验证action
    if (typeof action !== "object") {
      throw new TypeError("action must be a object");
    }

    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }

    // 验证action的type属性是否存在
    if (action.type === undefined) {
      throw new TypeError("action must have a property of type");
    }

    if (typeof currentReducer !== "function") {
      throw new TypeError("reducer must be a function");
    }

    // 中间件：类似于插件，可以在不影响原本功能、并且不改动原本代码的基础上，对其功能进行增强。所以不能改动源代码
    /* console.log('action', action);
     console.log('state before update', currentState); */

    currentState = currentReducer(currentState, action);

    /* console.log('state after update', currentState); */

    // 运行所有的订阅者（监听器）
    for (const listener of listeners) {
      listener();
    }
  }


  // 2. getState：得到仓库中当前的状态
  function getState() {
    return currentState;
  }

  // 3. subscribe：注册一个监听器，监听器是一个无参函数，该分发一个action之后，会运行注册的监听器。该函数会返回一个函数，用于取消监听
  /**
   * 添加一个监听器（订阅器）
   */
  function subscribe(listener) {
    listeners.push(listener); // 将监听器加入到数组中
    let isRemove = false; // 是否已经移除掉了

    return () => {
      if (isRemove) { // 也可以判断 index 是否等于 -1来 return
        return; // 防止重复 unsubscribe，减少循环次数
      }
      // 将listener从数组中移除
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
      isRemove = true;
    }; // unsubscribe
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}