import React, { useEffect, useState } from "react";

let num = 1;

function odd() {
  console.log("odd 副作用函数");

  return () => {
    console.log("odd 清理函数");
  }
}

function even() {
  console.log("even 副作用函数");

  return () => {
    console.log("even 清理函数");
  }
}

export default function App() {
  const [, forceUpdate] = useState();

  useEffect(num % 2 === 0 ? even : odd);
  num++;
  return (
    <div>
      <h1>{ num }</h1>
      <button onClick={ () => {
        forceUpdate({});
      } }>强制刷新
      </button>
    </div>
  );
}

/*

 *  */
