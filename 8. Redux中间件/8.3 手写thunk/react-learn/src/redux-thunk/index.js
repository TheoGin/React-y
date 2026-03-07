// 该函数返回一个thunk中间件
function createThunkMiddleware(extra) {
  // next: nextDispatch
  return store => next => action => {
    // 如果action是一个函数，则thunk不会向后移交，会直接调用函数，然后 action函数会调用store.dispatch，重新走一遍整个流程
    return typeof action === "function" ? action(store.dispatch, store.getState, extra) : next(action);
  };
}

const thunk = createThunkMiddleware();
/* thunk.withExtraArgument = function (extra) {
 return createThunkMiddleware(extra);
 }; */
// 简写
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;