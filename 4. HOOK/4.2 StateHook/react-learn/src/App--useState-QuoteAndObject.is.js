import React, { useState } from "react";

window.arrSetFn = [];
export default function App() {
  console.log("App render");

  const [num, setNum] = useState(0);

  window.arrSetFn.push(setNum);

  // 3. useState返回的函数（数组的第二项），引用不变（节约内存空间）
  /*
  App render
  arrSetFn // (2)[ƒ, ƒ]
  App render
  arrSetFn[0] === arrSetFn[1] // true
  */

  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={ () => {
        setNum(num - 1);
      } }>-
      </button>
      <span>{ num }</span>
      <button onClick={ () => {
        setNum(num + 1);
      } }>+
      </button>
      <button onClick={ () => {
        // 4. 使用函数改变数据，若数据和之前的数据完全相等（使用Object.is比较），不会导致重新渲染，以达到优化效率的目的。
        setVisible(visible);
      } }>
        设置原来的visible
      </button>
    </div>
  );
}
