import React, { useEffect, useState } from "react";

export default function App() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    // 写在这！！！
    if (num === 0) {
      return; // 可以返回 undefined
    }
    setTimeout(() => {
      // 某一次渲染完成后，需要根据当前n的值，1秒后重新渲染
      console.log('after', num); // 异步减，前后都是一样的num
      setNum(num - 1);
      console.log(num); // 异步减，前后都是一样的num
      /* if (num === 0) {
       clearTimeout(timer);
       } */
    }, 1000);
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

/*
after 10
10
after 9
9
after 8
8
after 7
7
after 6
6
after 5
5
after 4
4
after 3
3
after 2
2
after 1
1
 *  */
