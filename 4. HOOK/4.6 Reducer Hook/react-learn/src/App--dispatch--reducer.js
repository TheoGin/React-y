import React, { useState } from "react";

// Flux：Facebook出品的一个数据流框架（比React、Redux早出现）
// 1. 规定了数据是单向流动的

/**
 * 4. 具体改变数据的是一个函数，该函数叫做reducer
 *   4.1. 该函数接收两个参数
 * @param state 表示当前数据仓库中的数据
 * @param action 描述了如何去改变数据，以及改变数据的一些附加信息
 * @returns {number|*}
 */
function reducer(state, action) {
  // 4.2. 该函数必须有一个返回结果，用于表示数据仓库变化之后的数据
  //   4.2.1. Flux要求，对象是不可变的，如果返回对象，必须创建新的对象
  // 4.3. reducer必须是纯函数，不能有任何副作用
  switch (action.type) {
    case "increase":
      return state + 1;
    case  "decrease":
      if (state === 0) {
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
}

function App() {

  // 2. 数据存储在数据仓库中（目前，可以认为state就是一个存储数据的仓库）
  const [num, setNum] = useState(0);

  /**
   * 5. 如果要触发reducer，不可以直接调用，而是应该调用一个辅助函数dispatch
   * @param action 5.1. 该函数仅接收一个参数：action
   */
  function dispatch(action) {
    // 5.2. 该函数会间接去调用reducer，以达到改变数据的目的
    const newNum = reducer(num, action);
    console.log(`日志：n的值 ${ num } -> ${ newNum }`);
    setNum(newNum);
  }

  return (
    <div>
      <button onClick={ () => {
        // 3. action是改变数据的唯一原因（本质上就是一个对象，action有两个属性）
        //   1. type：字符串，动作的类型
        //   2. payload：任意类型，动作发生后的附加信息
        // 例如，加 1，action可以描述为：
        dispatch({
          type: "decrease",
        });
      } }>-
      </button>
      <span>{ num }</span>
      <button onClick={ () => {
        // 例如，减 1，action可以描述为：
        dispatch({
          type: "increase",
        });
      } }>+
      </button>
    </div>
  );
}

export default App;

/*
 日志：n的值 0 -> 1
 日志：n的值 1 -> 2
 日志：n的值 2 -> 3
 日志：n的值 3 -> 2
 *  */