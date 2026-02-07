import React, { useState } from "react";

export default function App() {
  console.log("App render");

  const [num, setNum] = useState(0);  // 使用一个状态，该状态的默认值是0

  return (
    <div>
      <button onClick={ () => {
        /* setNum(num - 1);
         setNum(num - 1); */

        setNum(prevNum => prevNum - 1); // 传入的函数，在事件完成之后统一运行
        setNum(prevNum => prevNum - 1); // (prevState: T) => T
      } }>
        -
      </button>
      <span>{ num }</span>
      <button onClick={ () => {
        // 虽然 写了两次，但只会 加1，因为在事件中是异步的
        /*
         setNum(num + 1); // 不会立即改变，事件运行完成之后一起改变
         setNum(num + 1);  // 此时，n的值仍然是 0
         */

        // 8. 和类组件的状态一样，函数组件中改变状态可能是异步的（在DOM事件中），多个状态变化会合并以提高效率，此时，不能信任之前的状态，而应该使用回调函数的方式改变状态。如果状态变化要使用到之前的状态，尽量传递函数。
        setNum(prevNum => prevNum + 1); // 传入的函数，在事件完成之后统一运行
        setNum(prevNum => prevNum + 1); // (prevState: number) => number
        // 虽然 写了两次，最终只会渲染一次（React做了优化）
      } }>
        +
      </button>
    </div>
  );
}