import React, { useEffect, useState } from "react";

// 以下是错误的做法
export default function App() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    // 仅挂载后运行
    const timer = setInterval(() => {
      const newNum = num - 1;

      console.log(newNum); // 每次拿到的都是 10 - 1 = 9
      setNum(newNum);
      if (newNum === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => { // 函数卸载时运行
      clearInterval(timer);
    };
  }, []); // 检测到副作用函数有依赖项，但是传递是空数组，就会警告：React Hook useEffect has a missing dependency: 'num'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

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
