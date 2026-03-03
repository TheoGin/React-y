function randomStrByLength(length) {
  return "@@redux/INIT" + Math.random().toString(36).substr(2, length).split("").join(".");
}

function isPlainObject(action) {
  // return action.__proto__ === Object.prototype;
  return Object.getPrototypeOf(action) === Object.prototype;
}

export default function createStore(reducer, defaultState) {

  if (typeof reducer !== "function") {
    throw new TypeError("reducer must be a function");
  }
  const type = randomStrByLength(6);
  let state = reducer(defaultState, { type });
  const listeners = [];

  // 1. dispatch：分发一个action
  function dispatch(action) {
    if (typeof action !== "object") {
      throw new TypeError("action must be a object");
    }
    if (!isPlainObject(action)) {
      throw new TypeError("action must be a plain object");
    }

    if (!("type" in action)) {
      // if (!action.hasOwnProperty('type')) {
      throw new TypeError("action must have a property of type");
    }

    state = reducer(state, action);

    for (const listener of listeners) {
      listener();
    }
  }


  // 2. getState：得到仓库中当前的状态
  function getState() {
    return state;
  }

  // 3. subscribe：注册一个监听器，监听器是一个无参函数，该分发一个action之后，会运行注册的监听器。该函数会返回一个函数，用于取消监听
  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }; // unsubscribe
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}