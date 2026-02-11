import React, { useState } from "react";

window.arr = [];

// 如果提出去，当组件被使用多次时，会共用同一个，也有出问题
const inputRef = React.createRef();

function App() {
  console.log("App render");
  window.arr.push(inputRef);
  const [num, setNum] = useState(0);

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
arr[0] === arr[2] // false
*  */