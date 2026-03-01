import { createStore } from "redux";

// 假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
// 约定action的格式：{type:"操作类型", payload:附加数据}

/**
type Reducer<S = any, A extends Action = AnyAction> = (
 state: S | undefined,
 action: A
) => S
 reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
*/
function reducer(state, action) {
  // 返回一个新的状态
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  }
}

/*
 export declare function createStore<S, A extends Action, Ext, StateExt>(
 reducer: Reducer<S, A>,
 preloadedState?: PreloadedState<S>,
 ): Store<S & StateExt, A> & Ext
 *  */
const store = createStore(reducer, 10);

console.log("store.getState()", store.getState());

store.dispatch({
  type: "increase",
});

console.log("store.getState()", store.getState());