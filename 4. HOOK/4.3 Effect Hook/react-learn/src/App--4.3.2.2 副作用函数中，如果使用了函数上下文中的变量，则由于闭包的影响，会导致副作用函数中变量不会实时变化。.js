import React, { useEffect, useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(num);  // n指向，当前App函数调用时的n
    }, 5000);
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
0
1
2
3
4
5
6
7
8
9
 *  */
