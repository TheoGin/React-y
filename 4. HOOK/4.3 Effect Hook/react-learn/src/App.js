import React, { useEffect, useState } from "react";

export default function App() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    // 仅挂载后运行
    const timer = setTimeout(() => {
      setNum(num - 1);
      if (num === 0) {
        clearTimeout(timer);
      }
    }, 1000);

    return () => { // 函数卸载时运行
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={ () => {
        setNum(num + 1);
      } }>
        n+1
      </button>
    </div>
  );
}

/* 每次拿到输出的都是 9
 9
 9
 9
 ……
 *  */
