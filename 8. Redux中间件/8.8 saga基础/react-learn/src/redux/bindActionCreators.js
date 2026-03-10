
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof dispatch !== "function") {
    throw new Error("actionCreators must be a function");
  }

  if (typeof actionCreators === "function") {
    return getAutoDispatchActionCreator(actionCreators, dispatch); // 抽离共同代码
    /* return function (...args) {
     const action = actionCreators(...args);
     dispatch(action);
     }; */
  } else if (typeof actionCreators === "object") {
    const result = {}; // 返回结果
    for (const key in actionCreators) {
      if (actionCreators.hasOwnProperty(key)) {
        const actionCreator = actionCreators[key]; // 取出对应的属性值
        if (typeof actionCreator === "function") {
          result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
        } // 如果不是函数保留原值
      }
      /* result[key] = function (...args) {
       const action = actionCreator(...args);
       dispatch(action);
       }; */
    }
    return result;
  } else {
    throw new Error("actionCreators must be a function or object");
  }
}

/**
 * 得到一个自动分发的action创建函数
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
  return function (...args) {
    const action = actionCreator(...args);
    dispatch(action);
  };
}