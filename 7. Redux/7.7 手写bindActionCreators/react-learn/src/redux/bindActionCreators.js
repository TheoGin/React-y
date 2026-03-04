export default function bindActionCreators(actionCreator, dispatch) {
  if (typeof dispatch !== "function") {
    throw new Error("actionCreator must be a function");
  }

  if (typeof actionCreator === "function") {
    return function (...args) {
      const action = actionCreator(...args);
      dispatch(action);
    };
  } else if (typeof actionCreator === "object") {
    const result = {};
    for (const key in actionCreator) {
      const createAction = actionCreator[key];
      result[key] = function (...args) {
        const action = createAction(...args);
        dispatch(action);
      };
    }
    return result;
  } else {
    throw new Error("actionCreator must be a function or object");
  }
}