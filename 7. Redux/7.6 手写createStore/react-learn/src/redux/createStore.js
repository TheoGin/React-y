/**
 * 得到一个指定长度的随机字符串
 * @param {*} length
 */
function getRandomStringByLength(length) {
  // return "@@redux/INIT" + Math.random().toString(36).substr(2, length).split("").join(".");
  return Math.random().toString(36).substr(2, length).split("").join(".");
}

/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj
 */
function isPlainObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  // return obj.__proto__ === Object.prototype;
  return Object.getPrototypeOf(obj) === Object.prototype;
}

export default function createStore(reducer, defaultState) {
  let currentReducer = reducer, // 当前使用的reducer
    currentState = defaultState; // 当前仓库中的状态

  const listeners = []; // 记录所有的监听器（订阅者）

  // 创建仓库时，需要分发一次初始的action
  const type = `@@redux/INIT${ getRandomStringByLength(6) }`;
  // let state = currentReducer(defaultState, { type });
  dispatch({ type }); // 用 dispatch 减少重复代码
  console.log(type); // @@redux/INITx.g.0.z.f.c

  // 1. dispatch：分发一个action
  function dispatch(action) {
    // 验证action
    /* if (typeof action !== "object") {
     throw new TypeError("action must be a object");
     } */
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }

    // 验证action的type属性是否存在
    // if (!("type" in action)) {
      // if (!action.hasOwnProperty('type')) {
      if (action.type === undefined) {
      throw new TypeError("action must have a property of type");
    }

    if (typeof currentReducer !== "function") {
      throw new TypeError("reducer must be a function");
    }

    currentState = currentReducer(currentState, action);

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
      if  (isRemove) { // 也可以判断 index 是否等于 -1来 return
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