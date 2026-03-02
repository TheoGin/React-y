import { bindActionCreators, createStore } from "redux";
import * as numberTypes from "./action/number-types";
import * as numberActions from "./action/number-actions";

// 假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
// 约定action的格式：{type:"操作类型", payload:附加数据}

/**
 reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
  // 返回一个新的状态
  if (action.type === numberTypes.INCREASE) {
    return state + 1;
  } else if (action.type === numberTypes.DECREASE) {
    return state - 1;
  } else if (action.type === numberTypes.SET) {
    return action.payload;
  }

  return state;
  /* 类型不存在时，不是报错，而是返回原数据。否则
   * store.getState() undefined
   * store.getState() NaN
   *  */
}

const store = createStore(reducer, 10);

console.log("store.getState()", store.getState()); // 得到仓库中当前的数据

const action = {
  type: numberTypes.INCREASE,
};
/* class Action {
   constructor(type) {
    this.type = type;
   }
 }
 // 1. action是一个plain-object（平面对象） - 它的proto指向Object.prototype
 // Error: Actions must be plain objects. Instead, the actual type was: ''.
 const action = new Action('increase'); */
store.dispatch(action); // 向仓库分发 action
console.log("store.getState()", store.getState()); //

// 2. 通常，使用 payload属性表示附加数据（payload属性名命名没有强制要求）
store.dispatch({
  // Uncaught Error: Actions may not have an undefined "type" property. You may have misspelled an action type string constant.
  // type1: "set",
  // 3. action中必须有type属性，该属性用于描述操作的类型 - 但是，没有对type的类型做出要求
  type: "set",
  payload: 6,
});
console.log("store.getState()", store.getState()); // 6

// 5. 为了方面传递action，通常会使用action创建函数(action creator)来创建action
//   - action创建函数应为无副作用的纯函数
//     - 不能以任何形式改动参数
//     - 不可以有异步
//     - 不可以对外部环境中的数据造成影响，如 localstorage，外部变量更改等
store.dispatch(numberActions.getSetAction(111));
console.log("store.getState()", store.getState()); // 111

// 6. 为了方便利用action创建函数来分发（触发）action，redux提供了一个函数bindActionCreators，该函数用于增强action创建函数的功能，使它不仅可以创建action，并且创建后会自动完成分发。
/*
 export function bindActionCreators<A, C extends ActionCreator<A>>(
   actionCreator: C,
   dispatch: Dispatch
 ): C
 * @param actionCreator An object whose values are action creator functions.  One handy way to obtain it is to use ES6 `import * as` syntax. You may  also pass a single function. 第一个参数，是 action创建函数合并的对象，第二个参数是仓库的dispatch函数
*  */
const boundDispatchStore = bindActionCreators(numberActions, store.dispatch);
// bindDispatchStore(getDecreaseAction);
console.log(numberActions); // Module { getIncreaseAction: ƒ, getDecreaseAction: ƒ, getSetAction: ƒ }
console.log(boundDispatchStore); // {g|etIncreaseAction: ƒ, getDecreaseAction: ƒ, getSetAction: ƒ}

// boundDispatchStore.getDecreaseAction(); // 等价于 store.dispatch(numberActions.getDecreaseAction())
console.log("store.getState()", store.getState()); // 110

boundDispatchStore.getSetAction(66); // 等价于 store.dispatch(numberActions.getSetAction(66))
console.log("store.getState()", store.getState()); // 66