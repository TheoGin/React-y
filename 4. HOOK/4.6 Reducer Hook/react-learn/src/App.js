import React, { useReducer } from "react";
// import useReducer from "./useReducer";

// Flux：Facebook出品的一个数据流框架（比React、Redux早出现）
// 1. 规定了数据是单向流动的

/**
 * 该函数，根据当前的数据，以及action，生成一个新的数据
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
    case "decrease":
      if (state === 0) {
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [num, dispatch] = useReducer(reducer, 10, (initialState) => {
    console.log(initialState); // 10
    return initialState * 10; // 100 需要通过 initialState，进行复杂运算，得到最终的 finalInitialState
  });

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