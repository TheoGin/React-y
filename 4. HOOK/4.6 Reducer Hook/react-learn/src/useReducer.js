import { useState } from "react";

/**
 * 通用的useReducer函数
 * @param {function} reducer reducer函数，标准格式
 * @param {any} initialState 初始状态
 * @param {(initialState: T) => T} initialStateFunc 用于计算初始值的函数
 * @returns {[state, dispatch]}
 */
export default function useReducer(reducer, initialState, initialStateFunc) {
  // 2. 数据存储在数据仓库中（目前，可以认为state就是一个存储数据的仓库）
  const [state, setState] = useState(initialStateFunc ? initialStateFunc(initialState) : initialState);

  /**
   * 5. 如果要触发reducer，不可以直接调用，而是应该调用一个辅助函数dispatch
   * @param action 5.1. 该函数仅接收一个参数：action
   */
  function dispatch(action) {
    // 5.2. 该函数会间接去调用reducer，以达到改变数据的目的
    const newState = reducer(state, action);
    console.log(`日志：n的值 ${ state } -> ${ newState }`);
    setState(newState);
  }

  return [state, dispatch];
}