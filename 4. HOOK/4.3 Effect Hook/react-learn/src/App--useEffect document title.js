import React, { useEffect, useState } from "react";

export default function App() {

  const [num, setNum] = useState(0);

  // 以下代码属于副作用（应该放到 useEffect中）
  // document.title = `计数器: ${ num }`;

  // 函数：useEffect，该函数接收一个函数作为参数，接收的函数就是需要进行副作用操作的函数
  useEffect(() => {
    console.log("改变页面标题的副作用操作");
    document.title = `计数器: ${ num }`;
  });

  // 每个函数组件中，可以多次使用useEffect，但不要放入判断或循环等代码块中。
  useEffect(() => {
    console.log("其他副作用操作");
  });

  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={ () => {
        setNum(num + 1);
      } }>+
      </button>
    </div>
  );
}