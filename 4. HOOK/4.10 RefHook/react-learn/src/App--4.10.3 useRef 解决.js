import React, { useRef, useState } from "react";

window.arr = [];


function App() {
  console.log("App render");
  const [num, setNum] = useState(0);

  // useRef函数：function useRef<T>(initialValue: T|null): RefObject<T>;
  //   1. 一个参数：默认值
  //   2. 返回一个固定的对象，{ current: 值 }
  const inputRef = useRef();
  window.arr.push(inputRef);

  return (
    <div>
      <input ref={ inputRef } type="text" />
      <button onClick={ () => {
        console.log(inputRef.current.value);
      } }>得到input的值
      </button>
      <input type="text" value={ num } onChange={ (e) => {
        setNum(parseInt(e.target.value));
      } } />
    </div>
  );
}

export default App;

/* 会导致每次都重新 createRef
App render
App render
App render
App render
arr //  (6) [{…}, {…}, {…}, {…}, {…}, {…}]
arr[1] === arr[3] // true
*  */